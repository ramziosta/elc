import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { AtlasContext } from "../App";
import { graphQLQuery } from "../state/product";
const resultsPerQuery = 25;
export const FetchComponent = ({ RenderComponent }) => {
  const [productData, setProductData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [errors, setErrors] = React.useState([]);
  const [resultsIndex, setResultsIndex] = React.useState(0);
  const token = useContext(AtlasContext);
  React.useEffect(() => {
    const fetchData = async () => {
      const query = {
        // "operationName": "Query",
        query: `query{
                  paginationResolver(input:{limit:${resultsPerQuery}, offset:${resultsIndex}}){
                      _id
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

      return graphQLQuery(token, query)
        .then((d) => {
          setResultsIndex((pv) => pv + resultsPerQuery);
          setProductData(d.paginationResolver);
          console.log(d.paginationResolver);
        })
        .catch((err) => {
          console.log(err);
          setErrors((pv) => [...pv, err]);
        });
    };
    fetchData().then(d=>setLoading(false))
      .catch((err) => {
        console.log(err);
        setErrors((pv) => [...pv, err]);
      });
  }, []);
  if(loading) console.log("loading..")
  if(errors.length) console.log({errors})
  if (loading) 
    return (<View><Text>{"Loading..."}</Text></View>);
  if (errors.length) 
    return (<View><Text>Error :( {errors}</Text></View>);

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
    reviews,
  } = productData;
  return React.createElement(RenderComponent, {data: productData})

};
