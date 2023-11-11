import { signIn } from "next-auth/react";
import { Button } from "../atoms/ui/button";
import Link from "next/link";

const LogoutComponent = ({ path }) => {
	const callbackUrl = path;
	return (
		<>
			<Button
				onClick={() => signIn()}
				variant={"outline"}>
				Sign In
			</Button>
			<Button asChild>
				<Link
					href={{
						pathname: "/signup",
						query: {
							callbackUrl,
						},
					}}>
					Sign Up
				</Link>
			</Button>
		</>
	);
};

export default LogoutComponent;
