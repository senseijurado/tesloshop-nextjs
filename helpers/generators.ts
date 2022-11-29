export function slugify(givenText: string = ''): string | Function {
	return givenText.toLocaleLowerCase().replace(/\s+/g, '-');
}

export function hashUUID(rounds: number = 1) {
	let timestamp: string | Date = Math.random().toString(32).substring(4);
	let dateTimestamp: string | Date = Date.now().toString(32).substring(4);
	let result: string = timestamp + dateTimestamp;

	return result.trim().repeat(rounds);
}
