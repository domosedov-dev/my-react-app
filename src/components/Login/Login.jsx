import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/formControls";
import { maxLength, required } from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormControls/formControls.module.sass";

// Custom Validators
let maxLength50 = maxLength(50);

const Login = props => {
  const onSubmit = formData => {
    const { email, password, rememberMe } = formData;
    props.login(email, password, rememberMe);
  };

  // Если пользователь залогинен, то редирект на главную
  if(props.isAuth) {
      return <Redirect to={"/profile"}/>
  }

  // Иначе возвращаем форму Login
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
          validate={[required, maxLength50]}
          name={"email"}
          placeholder={"Email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[required, maxLength50]}
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
        { props.error && (<div className={style.form_summaryError}>
            {props.error}
            </div>)
        }

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    login
})(Login);
