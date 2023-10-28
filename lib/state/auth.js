import { create } from "zustand";

const initialState = {
	isLogin: false,
	password: "",
	email: "",
};

export const AuthStore = create((set, get) => ({
	...initialState,
	handleLogin: ({ password, email }) => {
		set({ password, email });
		set({ isLogin: true });
	},
	handleLogout: () => {
		set(initialState);
	},
}));
