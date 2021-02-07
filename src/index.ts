import { promises as fs } from "fs";

export default async function exists(path: string): Promise<boolean> {
	try {
		await fs.stat(path);
	} catch (e: unknown) {
		return false;
	}
	return true;
}
