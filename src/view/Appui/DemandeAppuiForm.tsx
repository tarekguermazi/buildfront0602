import React, { useState } from "react";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import demandeAppuiEnumerators from "../../modules/demandeAppui/demandeAppuiEnumerators";
import { i18n } from "../../i18n";
import TextAreaFormItem from "../shared/form/items/TextAreaFormItem";
import ButtonIcon from "../shared/ButtonIcon";
import SelectFormItem from "../shared/form/items/SelectFormItem";

const schema = yup.object().shape({
  type: yupFormSchemas.enumerator(i18n("entities.demandeAppui.fields.type"), {
    options: demandeAppuiEnumerators.type,
  }),
  etat: yupFormSchemas.enumerator(i18n("entities.demandeAppui.fields.etat"), {
    options: demandeAppuiEnumerators.etat,
    required: true,
  }),
  gouvernorat: yupFormSchemas.enumerator(
    i18n("entities.demandeAppui.fields.gouvernorat"),
    {
      options: demandeAppuiEnumerators.gouvernorat,
      required: true,
    }
  ),
  importance: yupFormSchemas.enumerator(
    i18n("entities.demandeAppui.fields.importance"),
    {
      options: demandeAppuiEnumerators.importance,
    }
  ),
  descriptionFR: yupFormSchemas.string(i18n("Description"), {
    required: true,
  }),
});
function DemandeAppuiForm(props) {
  const [activeTab, setActiveTab] = useState("modere");
  const [radio, setRadio] = useState("Logistique");
  const radio1 = () => {
    setRadio("Legal");
  };
  const radio2 = () => {
    setRadio("Logistique");
  };
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("Haute");
  };
  const handleTab2 = () => {
    // update the state to tab1
    setActiveTab("modere");
  };
  const handleTab3 = () => {
    // update the state to tab1
    setActiveTab("normale");
  };
  const [initialValues] = useState(() => {
    const record = props.record || {};
    setRadio(record.type);
    setActiveTab(record.importance);
    return {
      type: record.type,
      etat: record.etat,
      gouvernorat: record.gouvernorat,
      category: record.category,
      importance: record.importance,
      descriptionFR: record.descriptionFR,
      descriptionAR: record.descriptionAR,
      descriptionEN: record.descriptionEN,
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
    values.type = radio;
    values.importance = activeTab;
    props.onSubmit(props?.record?.id, values);
  };
  const { saveLoading } = props;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='container__form'>
          <div className='form__radio'>
            <label htmlFor='Type d’appui demandé'>Type d’appui demandé</label>
            <div>
              <div
                className={radio === "Legal" ? "radio__active" : ""}
                onClick={radio1}>
                <input type='radio' name='Légal' id='' />
                <span>Légal</span>
              </div>
              <div
                className={radio === "Logistique" ? "radio__active" : ""}
                onClick={radio2}>
                <input type='radio' name='Logistique' id='' />
                <span>Logistique</span>
              </div>
            </div>
          </div>
          {/* <div className='form__select'>
            <label htmlFor='Où'>Où</label>
            <select name='ou' id=''>
              <option value=''>physique</option>
            </select>
          </div>
          <div className='form__select'>
            <label htmlFor='Gouvernorat'>Gouvernorat</label>
            <select name='Gouvernorat' id=''></select>
          </div> */}
          <SelectFormItem
            name='etat'
            label='etat'
            options={demandeAppuiEnumerators.etat.map((value) => ({
              value,
              label: value,
            }))}
            required={true}
          />

          <SelectFormItem
            name='gouvernorat'
            label='gouvernorat'
            options={demandeAppuiEnumerators.gouvernorat.map((value) => ({
              value,
              label: value,
            }))}
            required={true}
          />
          <div className='form__importance'>
            <label htmlFor='Importance'>Importance</label>
            <div className='importance__status'>
              <div
                className={activeTab === "Haute" ? "status__active" : ""}
                onClick={handleTab1}>
                Haute
              </div>
              <div
                className={activeTab === "modere" ? "status__active" : ""}
                onClick={handleTab2}>
                Modérée
              </div>
              <div
                className={activeTab === "normale" ? "status__active" : ""}
                onClick={handleTab3}>
                Normale
              </div>
            </div>
          </div>
          <TextAreaFormItem
            name='descriptionFR'
            label='description'
            required={false}
          />
          <div className='item__button'>
            <button
              className='cancel__button'
              onClick={onReset}
              type='button'
              disabled={saveLoading}>
              Annuler
            </button>
            <button
              className='form__button'
              onClick={form.handleSubmit(onSubmit)}
              disabled={saveLoading}>
              <ButtonIcon loading={saveLoading} />
              Valider
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default DemandeAppuiForm;
