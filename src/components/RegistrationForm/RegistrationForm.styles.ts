import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  input: {
    borderWidth: 1,
    borderColor: "#07BFF",
    borderRadius: 10,
    width: "80%",
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    width: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#0056b3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  registerText: {
    marginTop: 5,
    color: "blue",
    textDecorationLine: "underline",
    textAlign: 'center'
  },
  promptText: {
    marginTop: 20,
    color: 'grey', 
    
  }
});
