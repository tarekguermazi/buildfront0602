import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Storage from "src/security/storage";
import { Link } from "react-router-dom";
import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import ButtonIcon from "../shared/ButtonIcon";
import InputFormItem from "../shared/form/items/InputFormItem";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import FormWrapper from "../shared/styles/FormWrapper";
import ImagesFormItem from "../shared/form/items/ImagesFormItem";
import SelectFormItem from "../shared/form/items/SelectFormItem";
import userEnumerators from "../user/userEnumerators";
import { i18n } from "src/i18n";



const schema = yup.object().shape({
  firstName: yupFormSchemas.string("Mot de passe", {
    required: true,
  }),
  lastName: yupFormSchemas.string("Mot de passe", {
    required: true,
  }),
  phoneNumber: yupFormSchemas.string("Numéro de téléphone", {
    matches: /^[0-9]/,
    max: 24,
    required: true,
  }),
  occupation: yupFormSchemas.string("Occupation", {
    max: 175,
    required: true,
  }),
  regionTunisie: yupFormSchemas.string("Region", {
    max: 175,
  }),
  region: yupFormSchemas.string("Region", {
    max: 175,
  }),
  avatars: yupFormSchemas.images("Avatar", {
    max: 1,
  }),
});

function ProfileForm() {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoadingUpdateProfile);
  const currentUser = useSelector(selectors.selectCurrentUser);
  const [initialValues] = useState(() => {
    const record = currentUser || {};
    return {
      firstName: record.firstName,
      lastName: record.lastName,
      phoneNumber: record.phoneNumber,
      pays: record.pays,
      occupation: record.occupation,
      region: record.region,
      avatars: record.avatars || [],
    };
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });
  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };
  const onSubmit = (values) => {
    dispatch(actions.doUpdateProfile(values));
  };

  return (
    <div className='app__updateprofile'>
      <Link to='/profile'>
        <div className='retour'>
          <i className='fa-solid fa-arrow-left'></i> Retour
        </div>
      </Link>
      <FormWrapper>
        <FormProvider {...form}>
          <div className='modifyprofile'>
            <ImagesFormItem
              name='avatars'
              label={"user.fields.avatars"}
              storage={Storage.values.userAvatarsProfiles}
              max={1}
            />
            <div className='profile__user'>
              <div className='profile__detaill'>
                <div className='title__profile'>{currentUser.fullName}</div>
                <div className='title__description'>
                  {currentUser.occupation}, {currentUser.pays}
                </div>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='Login__container'>
                  <div className='container__form'>
                    <InputFormItem
                      name='firstName'
                      label={i18n("Nom")}
                      placeholder='Nom'
                      autoComplete='firstName'
                      autoFocus
                    />

                    <InputFormItem
                      name='lastName'
                      label='Prénom'
                      placeholder='Prénom'
                      autoComplete='Prénom'
                      autoFocus
                    />

                    <SelectFormItem
                      name={"pays"}
                      label={"pays"}
                      options={userEnumerators.pays.map((value) => ({
                        value,
                        label: value,
                      }))}
                    />
                    {form.watch().pays && form.watch().pays === "Tunisia" && (
                      <SelectFormItem
                        name={"region"}
                        label='Region'
                        options={userEnumerators.regionTunisie.map((value) => ({
                          value,
                          label: value,
                        }))}
                      />
                    )}
                    <SelectFormItem
                      name={"occupation"}
                      label='Occupation'
                      options={userEnumerators.occupation.map((value) => ({
                        value,
                        label: value,
                      }))}
                    />

                    <InputFormItem
                      name='phoneNumber'
                      label={"phone Number"}
                      autoComplete='phoneNumber'
                      autoFocus
                    />
                    <div className='form__group'>
                      <div className={"input-group"}>
                        <label htmlFor='email'>email</label>

                        <input
                          type='text'
                          className='form-control'
                          id='email'
                          name={"email"}
                          value={currentUser.email}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className='form__oublier'>
                      <div className='oublier'>
                        <Link to='/auth/forgot-password' className='reset'>
                          Changer mot de passe
                        </Link>
                      </div>
                    </div>
                    <div className='item__button'>
                      <button
                        className='cancel__button'
                        onClick={onReset}
                        type='button'
                        disabled={loading}>
                        Annuler
                      </button>
                      <button
                        className='form__button'
                        onClick={form.handleSubmit(onSubmit)}
                        disabled={loading}>
                        <ButtonIcon loading={loading} />
                        Valider
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </FormProvider>
      </FormWrapper>
    </div>
  );
}

export default ProfileForm;
