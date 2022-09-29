import React, { useState } from "react";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import demandeAppuiEnumerators from "src/modules/demandeAppui/demandeAppuiEnumerators";
import { i18n } from "../../../i18n";
import TextAreaFormItem from "../../shared/form/items/TextAreaFormItem";
import ButtonIcon from "../../shared/ButtonIcon";
import FilesFormItem from "src/view/shared/form/items/FilesFormItem";
import Storage from "src/security/storage";
import InputFormItem from "src/view/shared/form/items/InputFormItem";

const schema = yup.object().shape({
  gouvernorat: yupFormSchemas.enumerator(
    i18n("entities.demandeAppui.fields.gouvernorat"),
    {
      options: demandeAppuiEnumerators.gouvernorat,
    }
  ),
  phoneNumber: yupFormSchemas.string(i18n("user.fields.phoneNumber"), {
    matches: /^[0-9]/,
    max: 8,
    required: true,
  }),
  descriptionFR: yupFormSchemas.string(
    i18n("entities.demandeAppui.fields.description"),
    {
      required: true,
    }
  ),
  supports: yupFormSchemas.files(
    i18n("entities.demandeAppui.fields.supports"),
    {}
  ),
});
function DemandeAppuiForm(props) {
  const [activeTab, setActiveTab] = useState("physique");

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("physique");
  };
  const handleTab2 = () => {
    // update the state to tab1
    setActiveTab("Organisation");
  };

  const [initialValues] = useState(() => {
    const record = props.record || {};
    setActiveTab(record.personne);
    return {
      email: record.email,
      personne: record.personne,
      phoneNumber: record.phoneNumber,
      descriptionFR: record.descriptionFR,
      supports: record.supports || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues as any,
  });
  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    values.personne = activeTab;
    props.onSubmit(props?.record?.id, values);
  };
  const { saveLoading } = props;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='container__form'>
          <div className='form__importance'>
            <label htmlFor='Importance'>Personne</label>
            <div className='importance__status'>
              <div
                className={activeTab === "physique" ? "status__active" : ""}
                onClick={handleTab1}>
                physique
              </div>
              <div
                className={activeTab === "Organisation" ? "status__active" : ""}
                onClick={handleTab2}>
                Organisation
              </div>
            </div>
          </div>
          <InputFormItem
            name='email'
            label={i18n("user.fields.email")}
            autoComplete='email'
            autoFocus
          />
          <InputFormItem
            name='phoneNumber'
            label={i18n("user.fields.phoneNumber")}
            autoComplete='phoneNumber'
            autoFocus
          />
          <FilesFormItem
            name='supports'
            label={i18n("entities.demandeAppui.fields.supports")}
            required={false}
            storage={Storage.values.demandeAppuiSupports}
            max={undefined}
            formats={undefined}
          />
          <TextAreaFormItem
            name='descriptionFR'
            label={i18n("entities.demandeAppui.fields.description")}
            required={false}
          />
          <div className='item__button'>
            <button
              className='cancel__button'
              onClick={onReset}
              type='button'
              disabled={saveLoading}>
              {i18n("common.reset")}
            </button>
            <button
              className='form__button'
              onClick={form.handleSubmit(onSubmit)}
              disabled={saveLoading}>
              <ButtonIcon loading={saveLoading} />
              {i18n("common.save")}
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default DemandeAppuiForm;
