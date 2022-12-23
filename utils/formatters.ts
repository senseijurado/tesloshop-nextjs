export interface CurrencyProps {
	price: number | string;
	decimalDigits?: number;
	taxes?: number;
	fees?: number;
}

export interface DateTimeProps {
	date: Date;
}

export function currencyPrice({
	price,
	decimalDigits = 2,
}: CurrencyProps): string | void {
	return new Intl.NumberFormat('en-US', {
		style: 'USD',
		currency: 'currency',
		maximumFractionDigits: decimalDigits || 2,
		minimumFractionDigits: decimalDigits || 2,
	}).format(Number(price));
}

export function currencyPriceWithFees({
	price,
	decimalDigits = 2,
	fees = 0.21,
}: CurrencyProps): string | void {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: decimalDigits,
		minimumFractionDigits: decimalDigits,
	}).format(Number(price) * Number(fees) + Number(price));
}

export function currencyPriceFees({
	price,
	decimalDigits = 2,
	fees = 0.21,
}: CurrencyProps): string | void {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: decimalDigits,
		minimumFractionDigits: decimalDigits,
	}).format(Number(price) * Number(fees));
}

export function dateTimeStandard(getDate: DateTimeProps | Date): string {
	return new Date(getDate).toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
}

export function dateTimeEurope(getDate: DateTimeProps | Date): string {
	return new Date(getDate).toLocaleDateString('es-ES', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
}

export const UTILITIES = {
	dateTimeEurope(
		date: string | Date | undefined = Date.now()
	): string | void {
		return new Intl.DateTimeFormat('es-ES', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		}).format(date);
	},

	// * GENERATORS:
	uuid(rounds?: number = 1, trimmer?: number = 4) {
		let timestamp = Math.random().toString(32).substring(trimmer);
		let datestamp = Date.now().toString(32).substring(trimmer);

		return (timestamp + datestamp).repeat(rounds);
	},
	slugify(givenText?: string | undefined = ''): string | void {
		return givenText
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]+/g, '')
			.replace(/--+/g, '-')
			.replace(/^-+/, '')
			.replace(/-+$/, '');
	},

	// * CONVERTERS & FORMATTER:
	inchesToCM(inches: number, decimalDigits?: number = 2): string | void {
		return `${(inches * 2.54).toFixed(decimalDigits)} cm`;
	},

	cmToInches(cmt: number, decimalDigits?: number = 2): string | void {
		return `${(cmt * 0.3937007874).toFixed(decimalDigits)} inches`;
	},

	// From $ Dollars to €uros
	USDToEUR(usd: number = 1, decimalDigits?: number = 2): string | void {
		return (usd * 0.94531015).toLocaleString('en-US', {
			style: 'currency',
			currency: 'EUR',
			maximumFractionDigits: decimalDigits,
			minimumFractionDigits: decimalDigits,
		});
	},

	// From $ Dollars to GBP
	USDToGBP(usd: number = 1, decimalDigits?: number = 2): string | void {
		return (dollars * 0.82584855).toLocaleString('en-US', {
			style: 'currency',
			currency: 'GBP',
			maximumFractionDigits: decimalDigits,
			minimumFractionDigits: decimalDigits,
		});
	},

	// From Euros to Dollars
	EURToUSD(euro: number = 1, decimalDigits?: number = 2): string | void {
		return (euro * 1.0611895).toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: decimalDigits,
			minimumFractionDigits: decimalDigits,
		});
	},
	// From Euros to GBPounds
	EURToGBP(euro: number = 1, decimalDigits?: number = 2): string | void {
		return (euros * 0.87638397).toLocaleString('en-US', {
			style: 'currency',
			currency: 'GBP',
			maximumFractionDigits: decimalDigits,
			minimumFractionDigits: decimalDigits,
		});
	},
};

// Barril File index.ts
export * from './utils.js';
