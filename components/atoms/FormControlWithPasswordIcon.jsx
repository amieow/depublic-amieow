"use client";
import React, { useState } from "react";
import { FormControl } from "./ui/form";
import { Input, InputPasswordIcon } from "./ui/input";

export default React.memo(function FormControlWithPasswordIcon(props) {
	const [openPassword, setOpen] = useState(false);
	const toggle = () => setOpen((v) => !v);
	const ModifiedType = openPassword ? "text" : "password";
	return (
		<div className="relative">
			<FormControl>
				<Input
					placeholder={props.placeholder}
					{...props.rest}
					type={props.type == "password" ? ModifiedType : props.type}
					className={"border-0 border-b rounded-none focus-visible:ring-0"}
				/>
			</FormControl>
			{props.type == "password" && (
				<InputPasswordIcon
					toggle={toggle}
					isOpen={openPassword}
				/>
			)}
		</div>
	);
});
