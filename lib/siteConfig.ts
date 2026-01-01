export const siteConfig = {
	storeName: "פרחי עומר",
	siteUrl: "https://example.com",
	address: {
		street: "רחוב הראשי 10",
		city: "תל אביב",
		countryCode: "IL",
	},
	phone: {
		display: "050-123-4567",
		e164: "+972501234567",
	},
	whatsappNumber: "972501234567", // E.164 without '+'
	hours: {
		weekday: "א׳–ה׳: 09:00–19:00",
		friday: "ו׳: 09:00–14:00",
		saturday: "שבת: סגור",
	},
	deliveryPrices: [
		{ label: "משלוח בתוך העיר", price: 25, note: "עד 3 שעות" },
		{ label: "משלוח לשכונות סמוכות", priceRange: "35–45 ₪" },
		{ label: "איסוף עצמי", price: 0 },
	],
};

export type SiteConfig = typeof siteConfig;


