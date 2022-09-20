import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import moment from "moment";
import { yupResolver } from "@hookform/resolvers/yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "src/i18n";
import * as yup from "yup";
import FilesFormItem from "../../shared/form/items/FilesFormItem";
import Storage from "../../../security/storage";
import TextAreaFormItem from "../../shared/form/items/TextAreaFormItem";
import ButtonIcon from "../../shared/ButtonIcon";
import SelectFormItem from "../../shared/form/items/SelectFormItem";
import publicationEnumerators from "../../../modules/publication/publicationEnumerators";
import RadioFormItem from "../../shared/form/items/RadioFormItem";

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
  //   type: yupFormSchemas.enumerator(i18n("entities.publication.fields.type"), {
  //     required: true,
  //     options: publicationEnumerators.type,
  //   }),
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
  //   statut: yupFormSchemas.enumerator(
  //     i18n("entities.publication.fields.statut"),
  //     {
  //       required: true,
  //       options: publicationEnumerators.statut,
  //     }
  //   ),
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
          <SelectFormItem
            name='category'
            label='categorie'
            options={publicationEnumerators.categorie.map((value) => ({
              value,
              label: value,
            }))}
            required={true}
          />

          <RadioFormItem
            name='type'
            label='Type de contenu'
            options={publicationEnumerators.type.map((value) => ({
              value,
              label: value,
            }))}
            className='contentTypeRadio'
          />

          <FilesFormItem
            name='supports'
            label='supports'
            required={true}
            storage={Storage.values.publicationSupports}
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

export default PublicationForm;
