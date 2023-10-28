export const formatUpperFirstcharSplit = (input, prefix) => {
	let str = "";
	const splitStr = input.split(prefix || " ");
	splitStr.forEach((item) => {
		str += formatUpperFirstchar(item) + " ";
	});
	return str.trim();
};
export const formatUpperFirstchar = (input) => {
	return (input.charAt(0).toUpperCase() + input.slice(1)).trim();
};

export const formatRupiah = (input) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
	}).format(input);
};
