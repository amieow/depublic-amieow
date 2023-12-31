import { Montserrat } from "next/font/google";
import "./globals.css";
import RootHeader from "@/components/organisme/RootHeader";
import AuthProviders from "@/context/AuthProviders";

const monsterat = Montserrat({
	subsets: ["latin"],
	variable: "--font-monsterat",
	weight: ["800", "600", "500", "400", "700"],
});

export const metadata = {
	title: "Depublic",
	description: "Depublic ",
	manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${monsterat.variable} -z-10 font-monsterat bg-[#C5C5C5]`}>
				<AuthProviders>
					<RootHeader />
					{children}
				</AuthProviders>
			</body>
		</html>
	);
}
