import { useSession } from "next-auth/react";

export default function NullLoading({
	LoginComponent,
	LogoutComponent,
	EquealComponent,
}) {
	const { status } = useSession();
	if (status == "loading") {
		return <></>;
	}
	if (status == "unauthenticated") {
		return EquealComponent || LogoutComponent;
	}
	return EquealComponent || LoginComponent;
}
