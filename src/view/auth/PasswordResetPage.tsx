import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Storage from "src/security/storage";
import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import ButtonIcon from "../shared/ButtonIcon";
import InputFormItem from "../shared/form/items/InputFormItem";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import FormWrapper from "../shared/styles/FormWrapper";
import { i18n } from "src/i18n";
import { logos } from "src/assets/images";
import AuthWrapper from "./styles/AuthWrapper";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n("user.fields.email"), {
    required: true,
  }),
});

function PasswordResetPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);
  const externalErrorMessage = useSelector(selectors.selectErrorMessage);
  const [initialValues] = useState({
    email: "",
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });
  const onSubmit = ({ email }) => {
    dispatch(actions.doResetPassword(email));
  };
  const clearErrorMessage = () => {
    dispatch(actions.doClearErrorMessage());
  };
  useEffect(() => {
    clearErrorMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = () => {
    if (externalErrorMessage) {
      clearErrorMessage();
    }
  };
  // const onSubmit = (email) => {
  //   dispatch(actions.doResetPassword(email));
  // };

  return (
    <div className="app__resetPassword">
      <img className="lazyload" src={logos} alt="" srcSet="" />

      <AuthWrapper>
        <div className="app__signin">
          <div className="app__login">
            <div className="archieve__header">
              <h2>{i18n("auth.passwordResetEmail.message")}</h2>
              <div className="communiquer__bar"></div>
            </div>
            <div className="Login__container">
              <div className="container__form">
                <FormProvider {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="container__form">
                      <InputFormItem
                        name="email"
                        label={i18n("user.fields.email")}
                        placeholder="email"
                        autoComplete="email"
                        onChange={handleChange}
                        externalErrorMessage={externalErrorMessage}
                      />

                      <button className="form__button" disabled={loading}>
                        <ButtonIcon loading={loading} />
                        {i18n("buttons.envoyer")}
                      </button>
                    </div>
                  </form>
                </FormProvider>
                {/* <div className="form__group">
                  <label htmlFor="Login">{i18n("user.fields.email")}</label>
                  <input type="text" />
                </div>

                <div className="form__button">{i18n("buttons.envoyer")}</div>
                <div className="form__link">
                  <div className="link__account right__reset_password ">
                    <Link to="/auth/signin" className="reset">
                      <i
                        className="fa-solid fa-chevron-left"
                        style={{ paddingRight: 11 }}
                      />
                      {i18n("common.retour")}
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </AuthWrapper>
    </div>
  );
}

export default PasswordResetPage;
