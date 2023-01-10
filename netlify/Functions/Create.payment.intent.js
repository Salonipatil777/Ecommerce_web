

require('dotenv').config();
 
const stripe = require("stripe")(process.env.STRIPE_SECRETE_KEY)

exports.handler = async (event) => {
    try{
        const {amount} = JSON.parse(event.body)
        const PaymentIntent = await stripe.PaymentIntent.create({
            amount,
            currency:"usd",
            payment_method_types:["card"],
        })

        return{
            statusCode:200,
            body : JSON.stringify({PaymentIntent}),
        }
    }catch(error){
        console.log({error});

        return{ status : 400 ,
        body:JSON.stringify({error}), 
    };
    }
};