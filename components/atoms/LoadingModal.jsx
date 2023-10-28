"use client";
import React from "react";
import { AlertDialog, AlertDialogContent } from "./ui/alert-dialog";
import SpinnerGif from "@/public/spinner.gif";
import Image from "next/image";
import Typography from "./ui/Typography";

export default function LoadinModal({
	title = "Being Processed",
	description = "Wait a moment...",
	children,
}) {
	const [tempOpen, setTempOpen] = React.useState(true);
	React.useEffect(() => {
		const delay = setTimeout(() => {
			setTempOpen(false);
		}, 1500);
		return () => clearTimeout(delay);
	}, [tempOpen]);
	return (
		<AlertDialog open={tempOpen}>
			<AlertDialogContent className="space-y-[30px] rounded-[20px]">
				{children ? (
					children
				) : (
					<>
						<Image
							src={SpinnerGif}
							alt="spinner-gif"
						/>
						<div className="flex flex-col items-center">
							<Typography thick={"bolder"}>{title}</Typography>
							<Typography size={"label1"}>{description}</Typography>
						</div>
					</>
				)}
			</AlertDialogContent>
		</AlertDialog>
	);
}
