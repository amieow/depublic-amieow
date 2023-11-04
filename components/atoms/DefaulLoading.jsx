import { useSession } from "next-auth/react";

export default function NullLoading({ LoginComponent, LogoutComponent }) {
	const { status } = useSession();
	if (status == "loading") {
		return <></>;
	}
	if (status == "unauthenticated") {
		return LogoutComponent;
	}
	return LoginComponent;
}
