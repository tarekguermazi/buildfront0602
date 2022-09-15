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
import FilesFormItem from "../shared/form/items/FilesFormItem";
import Storage from "../../security/storage";

const schema = yup.object().shape({
  gouvernorat: yupFormSchemas.enumerator(
    i18n("entities.demandeAppui.fields.gouvernorat"),
    {
      options: demandeAppuiEnumerators.gouvernorat,
    }
  ),
  descriptionFR: yupFormSchemas.string(i18n("Description"), {
    required: true,
  }),
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

    return {
      type: record.type,
      etat: record.etat,
      gouvernorat: record.gouvernorat,
      category: record.category,
      importance: record.importance,
      descriptionFR: record.descriptionFR,
      descriptionAR: record.descriptionAR,
      descriptionEN: record.descriptionEN,
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
    props.onSubmit(props?.record?.id, values);
  };
  const { saveLoading } = props;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='container__form'>
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
            name='gouvernorat'
            label='gouvernorat'
            options={demandeAppuiEnumerators.gouvernorat.map((value) => ({
              value,
              label: value,
            }))}
            required={true}
          />
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

          <FilesFormItem
            name='supports'
            label='pièces jointes.'
            required={false}
            storage={Storage.values.demandeAppuiSupports}
            max={undefined}
            formats={undefined}
          />
          <TextAreaFormItem
            name='descriptionFR'
            label='Description'
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
