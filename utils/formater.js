import { z } from "zod";

const namaHari = [
	"Minggu",
	"Senin",
	"Selasa",
	"Rabu",
	"Kamis",
	"Jumat",
	"Sabtu",
];
const namaBulan = [
	"Januari",
	"Februari",
	"Maret",
	"April",
	"Mei",
	"Juni",
	"Juli",
	"Agustus",
	"September",
	"Oktober",
	"November",
	"Desember",
];

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
export const formatTanggal = (date) => {
	const validate = z.date().safeParse(date);
	if (!validate.success) {
		return `Day, Mon Tanggal`;
	}
	const dates = validate.data;
	const hari = namaHari[dates.getDay()];
	const bulan = namaBulan[dates.getMonth()];
	const datesBulan = dates.getDate();

	return `${hari}, ${bulan} ${datesBulan}`;
};
