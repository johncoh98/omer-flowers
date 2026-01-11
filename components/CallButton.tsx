"use client";

import React from "react";
import { siteConfig } from "@/lib/siteConfig";

type CallButtonProps = {
	size?: "sm" | "md" | "lg";
	className?: string;
	label?: string;
};

export default function CallButton({
	size = "md",
	className = "",
	label = "התקשרו עכשיו",
}: CallButtonProps) {
	const sizes: Record<NonNullable<typeof size>, string> = {
		sm: "px-4 py-2 text-sm",
		md: "px-5 py-3 text-base",
		lg: "px-6 py-4 text-lg",
	};
	const href = `tel:${siteConfig.phone.e164}`;
	return (
		<a
			href={href}
			className={`inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white text-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${sizes[size]} ${className}`}
			aria-label={`חיוג אל ${siteConfig.storeName}`}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
				<path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.47.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
			</svg>
			<span>{label}</span>
		</a>
	);
}


