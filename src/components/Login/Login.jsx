import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = props => {
  const onSubmit = formData => console.log(formData);
  return (
    <>
      <h1>LoginForm</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </>
  );
};

const LoginForm = props => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name={"login"} placeholder={"Login"} component={"input"}/>
        </div>
        <div>
          <Field name={"password"} type={"password"} placeholder={"Password"} component={"input"} />
        </div>
        <div>
          <Field name={"rememberMe"} type={"checkbox"}  component={"input"}/> Remember me?
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

export default Login;
