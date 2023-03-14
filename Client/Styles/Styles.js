import { StyleSheet } from "react-native";

 const globalStyles = StyleSheet.create({
  global: {
    backgroundColor: "#111111",
    color: "#ffffff",
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  accentText: {
    fontSize: 32,
    color: "#E3C3FF",
  },
  body: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#111111",
  },
  scroll: {
    height: "100%",
    marginTop: 70,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF3C3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 50,
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    fontSize: 24,
    fontWeight: 700,
    color: "white",
  },
  text2: {
    color: "white",
    textDecorationLine: "underline",
    marginRight: 10,
  },
  iconsText: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  items: {},

  brand: {
    color: "white",
  },
  brandNameText: {
    color: "white",
    fontWeight: 700,
    fontSize: 18,
    paddingBottom: 3,
  },
  accessibility: {
    color: "black",
    backgroundColor: "#FFF3C3",
    alignSelf: "flex-start",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 3,
  },
  buyItAgain: {
    color: "white",
  },
  textContainer: {
    width: 200,
    marginLeft: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#434343",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

 const modalStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
    backgroundColor: "cyan",
  },

  texts: {
    marginTop: 50,
    padding: 40,
    fontSize: 32,
    fontFamily: "Nunito-Black",
    color: "red",
  },
  paragraph: {
    marginTop: 50,
    padding: 40,
    fontSize: 32,
    color: "green",
    marginVertical: 8,
    lineHeight: 18,
  },
  lableText:{

  },
  input:{
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    height: 40,
    borderRadius:4,
  },
  formField:{
    marginVertical: 8
  },
  button:{},
  container2: {
    flex: 1,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});

export {
  globalStyles, modalStyles

}