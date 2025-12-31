"use client";

import React from "react";

type WhatsAppButtonProps = {
	phoneNumber?: string; // E.164 format without '+', e.g. 972501234567
	message?: string;
	size?: "sm" | "md" | "lg";
	className?: string;
};

export default function WhatsAppButton({
	phoneNumber = "972501234567",
	message = "שלום פרחי עומר, אשמח לקבל פרטים 😊",
	size = "md",
	className = "",
}: WhatsAppButtonProps) {
	const sizes: Record<NonNullable<typeof size>, string> = {
		sm: "px-4 py-2 text-sm",
		md: "px-5 py-3 text-base",
		lg: "px-6 py-4 text-lg",
	};

	const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message
	)}`;

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${sizes[size]} ${className}`}
			aria-label="שליחת הודעה ב-WhatsApp לפרחי עומר"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className="h-5 w-5"
				aria-hidden="true"
			>
				<path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.16-1.6A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52ZM12 22a9.9 9.9 0 0 1-5.05-1.4l-.36-.22-3.62.94.97-3.53-.24-.37A10 10 0 1 1 22 12c0 5.52-4.48 10-10 10Zm5.46-7.62c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.48-1.73-1.65-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.5-.5-.67-.5-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.62.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35Z" />
			</svg>
			<span>וואטסאפ</span>
		</a>
	);
}



