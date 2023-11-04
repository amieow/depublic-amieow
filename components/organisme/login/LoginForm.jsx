"use client";
import FormControlWithPasswordIcon from "@/components/atoms/FormControlWithPasswordIcon";
import { Button } from "@/components/atoms/ui/button";
import {
	Form,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/atoms/ui/form";
import { formatUpperFirstcharSplit } from "@/utils/formater";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

const TextFormSubmit = {
	signin: {
		label: "Sign In",
		action: "/api/auth/callback/credentials",
	},
	signup: {
		label: "Create Account",
		action: "/api/auth/callback/credentials",
	},
};
export const LoginForm = (props) => {
	const ObjectDefaultValueSchema = props.ArrayObjectZod.reduce((acc, str) => {
		acc[str] = "";
		return acc;
	}, {});
	const form = useForm({
		resolver: zodResolver(props.zod),
		defaultValues: ObjectDefaultValueSchema,
	});
	const arrayZodSchemaValues = props.ArrayObjectZod.map((key) => ({
		val: key,
		type: key == "password" ? "password" : "text",
		placeholder: formatUpperFirstcharSplit(key, "_"),
	}));

	return (
		<Form {...form}>
			<form
				method="post"
				action={TextFormSubmit[props.page]?.action || ""}
				className="space-y-10"
				onSubmit={form.handleSubmit(props.onValid)}>
				<div className="space-y-4">
					{arrayZodSchemaValues.map((key, i) => (
						<Fragment key={i}>
							<FormField
								control={form.control}
								name={key.val}
								render={({ field }) => {
									const { className: cls, ...rest } = field;
									return (
										<FormItem>
											<FormControlWithPasswordIcon
												{...key}
												rest={rest}
											/>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
						</Fragment>
					))}
				</div>
				<Button
					type="submit"
					size={"medium"}>
					{TextFormSubmit[props.page]?.label || ""}
				</Button>
			</form>
		</Form>
	);
};
