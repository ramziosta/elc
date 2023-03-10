import { Text, View } from 'react-native'
import React, { Component, useContext, useEffect, useState } from 'react'
import { AtlasContext } from '../App'
import { async } from '@firebase/util';
import { ScrollView } from 'react-native-gesture-handler';

export default function Favorite() {
  const atlasToken = useContext(AtlasContext);
  const [data, setData] = useState([])
  useEffect(() => {
    const query = async() => {
      const endpoint = "https://us-central1.gcp.realm.mongodb.com/api/client/v2.0/app/elc-makeup-app-kerwc/graphql";
      const headers = {
        "content-type": "application/json",
        "Authorization": `Bearer ${atlasToken}`,
      };
      const graphqlQuery = {
          // "operationName": "Query",
          "query": `query {
            products(limit: 999999) {
              name
              id
            }
          }`,
          // "variables": {}
      };

      const options = {
          "method": "POST",
          "headers": headers,
          "body": JSON.stringify(graphqlQuery)
      };
      const response = await fetch(endpoint, options);
      console.log(JSON.stringify(response));
      const json = await response.json()
      setData(json?.data);
      // console.log(json?.data?.products);
    }
    query();
  }, [atlasToken])
  if(!data){
    return (<></>)
  }
  return (
      <ScrollView>
        <Text>Access Token: {atlasToken}</Text>
        <Text>Data:</Text>
        {!data.products ? null : data?.products.map((p)=><Text key={p.id}>{p.name}</Text>)}
      </ScrollView>
    )
}