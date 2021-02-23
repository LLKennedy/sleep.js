/** Sleeps for the requested number of milliseconds, blocking return until the timeout is complete. Await this function to sleep. */
export async function sleep(millis: number) {
	if (millis === undefined || typeof millis !== "number" || isNaN(millis)) {
		throw new Error(NaN.toString());
	}
	await new Promise(res => {
		setTimeout(res, millis);
	})
}