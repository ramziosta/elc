import { Text, View } from 'react-native'
import React, { Component, useContext, useEffect, useState } from 'react'
import { AtlasContext } from '../App'
import { async } from '@firebase/util';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchAllProducts, initProductState, productReducer } from '../state/product';

export default function ProductsListTest() {
  const atlasToken = useContext(AtlasContext);
  const [productState, dispatch] = React.useReducer(productReducer, initProductState);
  // const allProducts = productState.allProducts;

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetchAllProducts(atlasToken, productState?.allProducts.resultsIndex).then(
      v=>{
        dispatch(v)
        setLoading(false);
      }
    ).catch(err=> console.log(err));
    
  }, [])
  if (loading) return (<><Text>Loading...</Text></>)
  else
    return (
      <ScrollView>
        <Text>products:</Text>
        {Object.values(productState.allProducts).map((p) => <Text key={p.id}>{p.name}</Text>)}
      </ScrollView>
    )
}
