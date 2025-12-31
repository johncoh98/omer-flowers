import { NextResponse } from "next/server";
import { appendFile, mkdir, stat } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const name = String(body?.name ?? "").trim();
		const phone = String(body?.phone ?? "").trim();
		const email = String(body?.email ?? "").trim();
		const note = String(body?.note ?? "").trim();

		if (!name || !phone) {
			return NextResponse.json({ error: "Missing fields" }, { status: 400 });
		}

		const payload = {
			name,
			phone,
			email: email || undefined,
			note: note || undefined,
			timestamp: new Date().toISOString(),
		};

		const fileDir = process.cwd();
		const filePath = path.join(fileDir, "leads.ndjson");

		// Ensure directory exists (it should), and file is appendable
		try {
			await stat(fileDir);
		} catch {
			await mkdir(fileDir, { recursive: true });
		}

		await appendFile(filePath, JSON.stringify(payload) + "\n", "utf8");

		return NextResponse.json({ ok: true });
	} catch (err) {
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}




