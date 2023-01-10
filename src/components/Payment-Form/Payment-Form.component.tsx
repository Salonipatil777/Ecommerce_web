import { useState , FormEvent } from 'react';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';

import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/Cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';


import '../Button/button.component';

import { PaymentFormContainer, FormContainer } from './Payment-Form.style';

const IfValidCardElement = (card:StripeCardElement | null): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [ processingPayment , setProcessingPayment] = useState(false)

  const PaymentHandler = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({ amount : amount*100 }),
    }).then((res) => res.json());

    const {
        PaymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);
    if(!IfValidCardElement(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser? currentUser.displayName: 'Guest',
        },
      },
    });

    setProcessingPayment(false);


    if(paymentResult.error) {
      alert(paymentResult.error);
    } else {
      // if (paymentResult.PaymentIntent.status === 'succeeded') {
      //   alert('payment Successful');
      // }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={PaymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement/>
        <button disabled={processingPayment} className='button-container'>Pay Now</button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
