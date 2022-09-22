import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import moment from "moment";
import { yupResolver } from "@hookform/resolvers/yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "src/i18n";
import * as yup from "yup";
import FilesFormItem from "src/view/shared/form/items/FilesFormItem";
import Storage from "src/security/storage";
import TextAreaFormItem from "src/view//shared/form/items/TextAreaFormItem";
import ButtonIcon from "src/view/shared/ButtonIcon";
import publicationEnumerators from "src/modules/publication/publicationEnumerators";
import RadioFormItem from "src/view/shared/form/items/RadioFormItem";
import CategoryPublicationAutocompleteFormItem from "../autocomplete/PublicationAutocompleteFormItem";

const schema = yup.object().shape({
  thematique: yupFormSchemas.relationToOne(
    i18n("entities.publication.fields.thematique"),
    {}
  ),
  category: yupFormSchemas.relationToOne(
    i18n("entities.publication.fields.categorie"),
    {
      required: false,
    }
  ),
  supports: yupFormSchemas.files(i18n("entities.publication.fields.supports"), {
    required: true,
  }),
  descriptionFR: yupFormSchemas.string(
    i18n("entities.publication.fields.description"),
    {
      required: true,
    }
  ),
  descriptionAR: yupFormSchemas.string(
    i18n("entities.publication.fields.description"),
    {
      required: false,
    }
  ),
  descriptionEN: yupFormSchemas.string(
    i18n("entities.publication.fields.description"),
    {
      required: false,
    }
  ),
});
function PublicationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      thematique: record.thematique,
      category: record.category,
      type: record.type,
      supports: record.supports || [],
      descriptionFR: record.descriptionFR,
      descriptionAR: record.descriptionAR,
      descriptionEN: record.descriptionEN,
      statut: record.statut,
      date: record.date ? moment(record.date, "YYYY-MM-DD") : null,
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
          {/* CATEGORIES */}
          <CategoryPublicationAutocompleteFormItem
            name='category'
            label={i18n("entities.publication.fields.categorie")}
            required={false}
            showCreate={!props.modal}
          />

          <RadioFormItem
            name='type'
            label={i18n("entities.publication.fields.type")}
            options={publicationEnumerators.type.map((value) => ({
              value,
              label: value,
            }))}
            className='contentTypeRadio'
          />

          <FilesFormItem
            name='supports'
            label={i18n("entities.publication.fields.supports")}
            required={true}
            storage={Storage.values.publicationSupports}
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

export default PublicationForm;
