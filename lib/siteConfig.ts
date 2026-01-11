export const siteConfig = {
	storeName: "פרחי עומר",
	siteUrl: "https://example.com",
	address: {
		street: "אחוזה 100",
		city: "רעננה",
		countryCode: "IL",
	},
	phone: {
		display: "052-677-5475",
		e164: "+972526775475",
	},
	whatsappNumber: "972526775475", // E.164 without '+'
	hours: {
		weekday: "א׳–ה׳: 09:30–19:00",
		friday: "ו׳: 08:30 – חצי שעה לפני כניסת שבת",
		saturday: "שבת: סגור",
	},
	deliveryPrices: [
		{ label: "משלוח בתוך העיר", price: 25, note: "עד 3 שעות" },
		{ label: "משלוח לשכונות סמוכות", priceRange: "35–45 ₪" },
		{ label: "איסוף עצמי", price: 0 },
	],
};

export type SiteConfig = typeof siteConfig;


