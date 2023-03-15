import React from 'react';
const resultsPerQuery = 25;
const Product = ({ productId, children } ) => {
    const [productData, setProductData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [errors, setErrors] = React.useState([])
    const [resultsIndex, setResultsIndex] = React.useState(0)
    
    React.useEffect(()=>{
      
        const fetchData = async()=>{
            const query = {
                // "operationName": "Query",
                "query": `query{
                    product(query:{id:${productId}}){
                      id,
                      brand,
                      name,
                      price,
                      price_sign,
                      currency,
                      image_link,
                      product_link,
                      website_link,
                      description,
                      categories,
                      product_type,
                      tag_list,
                      created_at,
                      updated_at,
                      product_api_url,
                      api_featured_image,
                      product_colors {
                        colour_name
                        hex_value
                      },
                      reviews {
                        accessible
                        buyAgain
                        content
                        created_at
                        firebaseUser
                        title
                      }
                    }
                  }`,
                // "variables": {}
            };

            return graphQLQuery(token, query).then(d => {
                setResultsIndex(pv=>pv+resultsPerQuery)
                setProductData(d.data.products)
                setLoading(false);
            }).catch(err=>{console.log(err); setErrors(pv=>pv.push(err))});
        }
        fetchData().then(d=>setProductData(d.data.product)).catch(err=>{console.log(err); setErrors(pv=>pv.push(err))});
    },[])
	

  if (loading) return <Text>Loading...</Text>;
  if (errors.length) return <Text>Error :( {errors}</Text>;

  const {
    id,
    brand,
    name,
    price,
    price_sign,
    currency,
    image_link,
    product_link,
    website_link,
    description,
    categories,
    product_type,
    tag_list,
    created_at,
    updated_at,
    product_api_url,
    api_featured_image,
    product_colors,
    reviews
    
  } = productData;

  return (
    //maybe use context or something to pass data to children, this component should pass data into the UI component for product details
    <>{children}</>
  );
};

export default Product;