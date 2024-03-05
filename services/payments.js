const axios = require("axios");

const config = require("../config/config.json")[
	process.env.NODE_ENV || "development"
].payment;

const postRequest = (url, body) => {
	return axios.post(url, body, {
		headers: {
			Authorization: config.api_key,
		},
	});
};

const getProducts = async () => {
	const {
		data: {
			data: { Categories },
		},
	} = await postRequest(config.get_products, { data: {} });

	return Categories;
};

const sellProduct = async (rData) => {
	const {
		data: { data },
	} = await postRequest(config.sell, rData);
	return data;
};

const quoteProduct = async (rData) => {
	const {
		data: {
			data: { Amount },
		},
	} = await postRequest(config.quote, rData);
	return Amount;
};

const getProductDescription = async (rData) => {
	const {
		data: {
			data: {
				Product: { Categories, description },
			},
		},
	} = await postRequest(config.get_product, rData);
	return { Categories, description };
};

const getPublicServiceById = async (rData) => {
	const {
		data: {
			data: {
				Product: { options },
			},
		},
	} = await postRequest(config.get_product, rData);
	return { options };
};

module.exports = {
	getProducts,
	sellProduct,
	quoteProduct,
	getProductDescription,
	getPublicServiceById,
	quoteProduct,
};
