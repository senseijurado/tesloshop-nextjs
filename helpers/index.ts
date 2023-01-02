/**
 * It generates a random string of characters.
 * @param {number} [rounds=1] - The number of times the random string is repeated.
 * @param {number} [trimmer=4] - The number of characters to trim from the start of the string.
 * @returns A random string of characters.
 */
export function uuid(rounds: number = 1, trimmer: number = 4) {
	return (
		Math.random().toString(32).substring(trimmer) +
		Date.now().toString(32).substring(trimmer)
	).repeat(rounds);
}

/**
 * If the isUppercase argument is true, then return the givenText argument in uppercase, otherwise
 * return the givenText argument in lowercase.
 * @param [isUppercase=false] - This is a boolean value that determines whether the slugified text
 * should be in uppercase or not.
 * @param {string | undefined} [givenText] - The text you want to slugify.
 * @returns A function that takes two parameters, isUppercase and givenText.
 */
export function slugify(givenText: string | undefined = ''): string | void {
	return givenText
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

/**
 * It takes a number and returns a string
 * @param {number} price - number - The price to format
 * @param {number} [decimalDigits=2] - number = 2
 * @returns A string
 */
export function currencyPrice(
	price: number,
	decimalDigits: number = 2
): string | void {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: decimalDigits,
		minimumFractionDigits: decimalDigits,
	}).format(price);
}

/**
 * It takes a price, a number of decimal digits and a fee, and returns a string with the price and the
 * fee
 * @param {number | string} price - The price of the item.
 * @param {number} [decimalDigits=2] - The number of decimal digits to show.
 * @param {number} [fees=0.21] - The fees you want to add to the price.
 * @returns A string
 */
export function currencyPriceWithFees(
	price: number,
	decimalDigits: number = 2,
	fees: number = 0.21
): string | void {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: decimalDigits,
		minimumFractionDigits: decimalDigits,
	}).format(price * fees + price);
}

/**
 * It takes a date as an argument and returns a string with the date formatted in Spanish
 * @param date - The date to format.
 * @returns A string with the date in the format: day, month, year.
 */
export function formatDateTime(date = Date.now()): string | void {
	return new Intl.DateTimeFormat('es-ES', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	}).format(date);
}

/**
 * "Convert a number of US dollars to Euros, and return the result as a string."
 *
 * The function takes two parameters:
 *
 * usd: number = 1
 * decimalDigits: number = 2
 * The first parameter, usd, is the number of US dollars to convert. The second parameter,
 * decimalDigits, is the number of decimal digits to include in the result
 * @param {number} [usd=1] - number = 1
 * @param {number} [decimalDigits=2] - number = 2
 * @returns A string
 */
export function USDToEUR(usd: number = 1, decimalDigits: number = 2): string {
	return (usd * 0.94531015).toLocaleString('en-US', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: decimalDigits,
		minimumFractionDigits: decimalDigits,
	});
}
