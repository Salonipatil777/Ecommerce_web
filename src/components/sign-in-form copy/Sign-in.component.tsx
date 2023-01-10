

import { useState , FormEvent , ChangeEvent} from "react";
import { useDispatch } from "react-redux";

import FormInput from "../Input-fields/input.component";
import Signup from "../signup-form/Signup.component";
import "./sign-in.style.css";
import '../Button/button.style.css';
import { googleSignInStart , emailSignInStart } from "../../store/user/user.action";

const dformFields = {
  Email: "",
  Password: "",
};

const Signin = () => {
  const dispatch = useDispatch()
  const [formFields, setformFields] = useState(dformFields);
  const { Email, Password } = formFields;

  const resetFormFields = () => {
    setformFields(dformFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  };

  const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(Email , Password))
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const handelChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  return (
    <form className="form2" onSubmit={handelSubmit}>
      <div className="box1">
        <h2>Already have account?</h2>
        <span>Sign in Form</span>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handelChange}
          name="Email"
          value={Email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handelChange}
          name="Password"
          value={Password}
        />

        <div className="btns">
          <button id="signIn" className="button-container">Sign In</button>

          <button id="google" onClick={signInWithGoogle} className="google-sign-in">
            Google SignIn
          </button>
        </div>
      </div>
      <Signup />
    </form>
  );
};

export default Signin;
