export function currencyFormat(
	price: any,
	fractionDigits?: number,
	taxRate = 0.21
) {
	return (price * taxRate + price).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: fractionDigits!,
		maximumFractionDigits: fractionDigits!,
	});
}
