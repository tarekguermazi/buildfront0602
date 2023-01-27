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
import Retour from "../shared/Retour";

const schema = yup.object().shape({
	firstName: yupFormSchemas.string(i18n("user.fields.firstName"), {
		max: 80,
	}),
	lastName: yupFormSchemas.string(i18n("user.fields.lastName"), {
		max: 175,
	}),
	phoneNumber: yupFormSchemas.string(i18n("user.fields.phoneNumber"), {
		matches: /^[0-9]/,
		max: 8,
	}),
	pays: yupFormSchemas.string(i18n("user.fields.pays"), {
		max: 175,
	}),
	occupation: yupFormSchemas.string(i18n("user.fields.occupation"), {
		max: 175,
	}),
	regionTunisie: yupFormSchemas.string(i18n("user.fields.region"), {
		max: 175,
	}),
	region: yupFormSchemas.string(i18n("user.fields.region"), {
		max: 175,
	}),

	avatars: yupFormSchemas.images(i18n("user.fields.avatars"), {
		max: 1,
	}),
});

function ProfileForm() {
	const dispatch = useDispatch();
	const loading = useSelector(selectors.selectLoadingUpdateProfile);
	const currentUser = useSelector(selectors.selectCurrentUser);
	console.log("current user", currentUser);
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
			membership: record.membership,
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
		const data = {
			...values,
			membership: currentUser.membership,
		};
		dispatch(actions.doUpdateProfile(data));
	};

	return (
		<div className="app__updateprofile">
			<Link to="/profile">
				<Retour />
			</Link>
			<FormWrapper>
				<FormProvider {...form}>
					<div className="modifyprofile">
						<ImagesFormItem
							name="avatars"
							label={"user.fields.avatars"}
							storage={Storage.values.userAvatarsProfiles}
							max={1}
						/>
						<div className="profile__user">
							<div className="profile__detaill">
								<div className="title__profile">{currentUser.fullName}</div>
								<div className="title__description">
									{currentUser.occupation}, {currentUser.pays}
								</div>
							</div>

							<form onSubmit={form.handleSubmit(onSubmit)}>
								<div className="Login__container">
									<div className="container__form">
										<InputFormItem
											name="firstName"
											label={i18n("user.fields.firstName")}
											placeholder="Nom"
											autoComplete="firstName"
											autoFocus
										/>

										<InputFormItem
											name="lastName"
											label={i18n("user.fields.lastName")}
											placeholder="Prénom"
											autoComplete="Prénom"
										/>
										<SelectFormItem
											name={"pays"}
											label={i18n("user.fields.pays")}
											options={userEnumerators.pays.map((value) => ({
												value,
												label: i18n(`user.enumerators.pays.${value}`),
											}))}
										/>
										{form.watch().pays && form.watch().pays === "Tunisia" && (
											<SelectFormItem
												name={"region"}
												label={i18n("user.fields.region")}
												options={userEnumerators.regionTunisie.map((value) => ({
													value,
													label: i18n(`user.enumerators.region.${value}`),
												}))}
											/>
										)}
										<SelectFormItem
											name={"occupation"}
											label={i18n("user.fields.occupation")}
											options={userEnumerators.occupation.map((value) => ({
												value,
												label: i18n(`user.enumerators.occupation.${value}`),
											}))}
										/>

										<InputFormItem
											name="phoneNumber"
											label={i18n("user.fields.phoneNumber")}
											autoComplete="phoneNumber"
										/>
										<div className="form__group">
											<div className={"input-group"}>
												<label htmlFor="email">
													{i18n("user.fields.email")}
												</label>
												<input
													type="text"
													className="form-control"
													id="email"
													name={"email"}
													value={currentUser.email}
													readOnly
												/>
											</div>
										</div>
										<div className="form__oublier">
											<div className="oublier">
												<Link to="/password-change" className="reset">
													{i18n("auth.changePassword")}
												</Link>
											</div>
										</div>
										<div className="item__button">
											<button
												className="cancel__button"
												onClick={onReset}
												type="button"
												disabled={loading}>
												{i18n("common.reset")}
											</button>
											<button
												className="form__button"
												onClick={form.handleSubmit(onSubmit)}
												disabled={loading}>
												<ButtonIcon loading={loading} />
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

export default ProfileForm;
