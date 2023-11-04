export default function ProtectedSectionDE({ children, isLogin }) {
	if (isLogin) {
		return children;
	}
}
