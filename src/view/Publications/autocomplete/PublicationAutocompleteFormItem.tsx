import React, { useState } from "react";
import CategoryPublicationService from "src/modules/categoryPublication/categoryPublicationService";
import AutocompleteFormItem from "src/view/shared/form/items/AutocompleteFormItem";
import { useSelector } from "react-redux";
import selectors from "src/modules/categoryPublication/categoryPublicationSelectors";
import { useFormContext } from "react-hook-form";

const CategoryPublicationAutocompleteFormItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { setValue, getValues } = useFormContext();

  const hasPermissionToCreate = useSelector(selectors.selectPermissionToCreate);

  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = () => {
    setModalVisible(true);
  };

  const fetchFn = (value, limit) => {
    return CategoryPublicationService.listAutocomplete(value, limit);
  };

  const mapper = {
    toAutocomplete(value) {
      if (!value) {
        return null;
      }

      const key = value.id;
      let label = value.label;

      if (value.titleFR) {
        label = value.titleFR;
      }

      return {
        key,
        label,
      };
    },

    toValue(value) {
      if (!value) {
        return null;
      }

      return {
        id: value.key,
        label: value.label,
      };
    },
  };

  const { form, ...rest } = props;
  return (
    <>
      <AutocompleteFormItem
        {...rest}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={doOpenModal}
        inMemoryFilter
        hasPermissionToCreate={hasPermissionToCreate}
      />
    </>
  );
};

export default CategoryPublicationAutocompleteFormItem;
