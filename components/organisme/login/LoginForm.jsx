import { Button } from "@/components/atoms/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/atoms/ui/form";
import { Input, InputPasswordIcon } from "@/components/atoms/ui/input";
import { formatUpperFirstcharSplit } from "@/utils/formater";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

export const LoginForm = (props) => {
	const ObjectDefaultValueSchema = props.ArrayObjectZod.reduce((acc, str) => {
		acc[str] = "";
		return acc;
	}, {});
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
				action={TextFormSubmit[props.page].action}
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
											<div className="relative">
												<FormControl>
													<Input
														placeholder={key.placeholder}
														{...rest}
														type={key.type}
														className={
															"border-0 border-b rounded-none focus-visible:ring-0"
														}
													/>
												</FormControl>
												{key.type == "password" && <InputPasswordIcon />}
											</div>
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
					{TextFormSubmit[props.page].label}
				</Button>
			</form>
		</Form>
	);
};
