import React from "react";
import { Field, reduxForm } from "redux-form";
import { authAPI } from "../../api/api";
import { Input } from "../common/FormControls/formControls";
import { maxLength, required } from "../../utils/validators/validators";

let maxLength15 = maxLength(15);

const Login = props => {
  const onSubmit = formData => {
    const { email, password, rememberMe } = formData;

    // test
    authAPI
      .login(email, password, rememberMe)
      .then(response => response.data)
      .then(data => {
        if (data.resultCode !== 0) {
          console.dir(data.messages);
        } else {
          console.log(data.data.userId);
        }
      });
    // end test
  };

  return (
    <>
      <h1>LoginForm</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

const LoginForm = props => {


  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength15]}
          name={"email"}
          placeholder={"Email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[required, maxLength15]}
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          component={Input}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={Input} />{" "}
        Remember me?
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

export default Login;
