
const resultsPerQuery = 25;

const graphQLQuery = async (token, query) => {
	const endpoint = "https://us-central1.gcp.realm.mongodb.com/api/client/v2.0/app/elc-makeup-app-kerwc/graphql";
	const headers = {
		"content-type": "application/json",
		"Authorization": `Bearer ${token}`,
	};
	const options = {
		"method": "POST",
		"headers": headers,
		"body": JSON.stringify(query)
	};
	try {
		const response = await fetch(endpoint, options);
		const json = await response.json();
		console.log(json.errors)
		return json?.data;
	}
	catch (err) {
		console.log(err);
	}
}

export const fetchAllProducts = (token, resultsIndex) => {
	const query = {
		// "operationName": "Query",
		"query": `query {
			  products(limit: ${resultsPerQuery}, offset: ${resultsPerQuery * resultsIndex}) {
				id
				name
			  }
			}`,
		// "variables": {}
	};
	graphQLQuery(token, query).then(v => {
		console.log(v);
		return {
			type: resultsIndex == 0 ? "init_fetch" : "fetch_more",
			data: { allProducts: { ...v.products }, resultsIndex: resultsIndex + resultsPerQuery }
		}
	}).catch(err => console.log(err));
}

export const initProductState = {
	allProducts: {
		products: {},
		resultsIndex: 0
	},
}

export const productReducer = (state, action) => {
	switch (action.type) {
		case "init_fetch": {
			return { ...state, ...action.data };
		}
		case "fetch_more": {
			return { ...state, ...action.data };
		}
	}
}