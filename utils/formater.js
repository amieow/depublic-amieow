export const formatUpperFirstcharSplit = (input, prefix) => {
	let str = "";
	const splitStr = input.split(prefix || " ");
	splitStr.forEach((item) => {
		str += item.charAt(0).toUpperCase() + item.slice(1) + " ";
	});
	return str.trim();
};

export const formatRupiah = (input) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
	}).format(input);
};
