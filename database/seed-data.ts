import { faker } from '@faker-js/faker';
import { currencyFormat, slugify } from '../helpers';

export type validProductSizes =
	| 'XS'
	| 'S'
	| 'M'
	| 'L'
	| 'XL'
	| '2XL'
	| '3XL'
	| '4XL';
export type validProductTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';
export type validProductGenders = ['Men' | 'Women' | 'Kids' | 'Unisex'];
export interface iSeedProducts {
	description: string;
	images: string[];
	inStock: number;
	price: number | string | Function;
	sizes: validProductSizes[] | string[];
	slug: string | Function;
	tags: string[];
	title: string;
	type: validProductTypes | string[];
	gender: validProductGenders | string[];
}

export interface iSeedUsuarios {
	name: string | Function;
	email: string | Function;
	passcode: string | Function;
	role: string | Function;
	uid?: string | Function;
}

export interface SeedData {
	users?: iSeedUsuarios[];
	products: iSeedProducts[];
}

export const initialData: SeedData = {
	users: Array(3).fill({
		name: '',
		email: '',
		passcode: '',
		role: '',
		uid: '',
	}),
	products: Array(52).fill({
		description: faker.commerce.productDescription(),
		images: [faker.image.image(), faker.image.imageUrl()],
		inStock: faker.datatype.number(),
		price: currencyFormat(faker.commerce.price(), 3),
		sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
		slug: slugify(faker.datatype.string()),
		type: faker.definitions.commerce?.department!,
		tags: faker.helpers.arrayElements(),
		title: faker.commerce.productName(),
		gender: faker.definitions.name?.gender!,
	}),
};
