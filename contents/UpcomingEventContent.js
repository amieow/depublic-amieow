import Banner1 from "@/public/banner/banner-1.png";

export const UPCOMING_EVENT_CONTENT_BANNER = [
	{
		image: Banner1,
		price: 1999000,
		title: "Judul Event",
		place: "BANDUNG",
		description: "Lorem ipsum dolor sit amet consectet",
		id: 123,
	},
	{
		image: Banner1,
		price: 1999000,
		title: "Judul Event",
		place: "BANDUNG",
		description: "Lorem ipsum dolor sit amet consectet",
		id: 123,
	},
	{
		image: Banner1,
		price: 1999000,
		title: "Judul Event",
		place: "BANDUNG",
		description: "Lorem ipsum dolor sit amet consectet",
		id: 123,
	},
];

export const UPCOMING_EVENT_CONTENT = UPCOMING_EVENT_CONTENT_BANNER.map(
	(event) => ({
		...event,
		title: "Konser Silaturahmi Maher Zain",
		description:
			"Lorem ipsum dolor sit amet consectetur. Nibh ultricies facilisi faucibus euismod mauris lorem fermentum. ",
	}),
);

export const HIGHTLIGHT_TEXT_DE = [
	`Saksikan langsung penampilan memukau dari Maher Zain lewat tur perdana mereka, “2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA”`,
	`Konser akan berlangsung pada tanggal 3 Oktober 2023 di JIEXPO Hall B3, Jakarta `,
	`Untuk cara penggunaan membership code saat periode presale`,
];

export const INFO_PENTING_DE = {
	link: "",
	description: [
		`FEARNOT MEMBERSHIP PRESALE dimulai pada hari Kamis, 3 Agustus 2023 pukul 12.00 - 22.00 WIB.`,
		`General Sales dimulai pada hari Jumat, 4 Agustus 2023 pukul 12.00 WIB.`,
		`Untuk Presale, 1 (satu) akun hanya dapat membeli maks. 4 (empat) tiket.`,
	],
};
