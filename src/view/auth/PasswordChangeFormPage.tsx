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
import { i18n } from "src/i18n";
import Retour from "../shared/Retour";

const schema = yup.object().shape({
	oldPassword: yupFormSchemas.string(i18n("user.fields.oldPassword"), {
		required: true,
	}),
	newPassword: yupFormSchemas.string(i18n("user.fields.newPassword"), {
		required: true,
	}),
	newPasswordConfirmation: yupFormSchemas
		.string(i18n("user.fields.newPasswordConfirmation"), {
			required: true,
		})
		.oneOf(
			[yup.ref("newPassword"), null],
			i18n("auth.passwordChange.mustMatch"),
		),
});

function PasswordChangeFormPage() {
	const dispatch = useDispatch();

	const [initialValues] = useState(() => ({
		oldPassword: "",
		newPassword: "",
		newPasswordConfirmation: "",
	}));

	const form = useForm({
		resolver: yupResolver(schema),
		mode: "all",
		defaultValues: initialValues,
	});

	const saveLoading = useSelector(selectors.selectLoadingPasswordChange);

	const onSubmit = (values) => {
		dispatch(actions.doChangePassword(values.oldPassword, values.newPassword));
	};

	const onReset = () => {
		Object.keys(initialValues).forEach((key: any) => {
			form.setValue(key, initialValues[key]);
		});
	};

	return (
		<div className="app__updateprofile">
			<Link to="/profile">
				<Retour />
			</Link>

			<FormWrapper>
				<FormProvider {...form}>
					<div className="modifyprofile">
						<div className="archieve__header">
							<h2>{i18n("auth.changePassword")}</h2>
							<div className="communiquer__bar"></div>
						</div>
						<div className="contenu__description">
							Entrez vos identifiants pour retrouver votre compte
						</div>
						<div className="profile__user">
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<div className="Login__container">
									<div className="container__form">
										<InputFormItem
											type="password"
											name="oldPassword"
											label={i18n("user.fields.oldPassword")}
											autoComplete="old-password"
											autoFocus
										/>

										<InputFormItem
											type="password"
											name="newPassword"
											label={i18n("user.fields.newPassword")}
											autoComplete="new-password"
										/>
										<InputFormItem
											type="password"
											name="newPasswordConfirmation"
											label={i18n("user.fields.newPasswordConfirmation")}
											autoComplete="new-password"
										/>

										<div className="item__button">
											<button
												className="cancel__button"
												onClick={onReset}
												type="button"
												disabled={saveLoading}>
												{i18n("common.reset")}
											</button>
											<button
												className="form__button"
												onClick={form.handleSubmit(onSubmit)}
												disabled={saveLoading}>
												<ButtonIcon loading={saveLoading} />
												{i18n("common.save")}
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

export default PasswordChangeFormPage;
