import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#939393',
        padding: 10,
        backgroundColor: '#FFF',
        marginBottom: 20
      },
      card_content: {
        marginTop: 10,
      },
      card_content_txt: {
        color: '#939393',
        marginBottom: 10,
        display: 'block'
      },
      
})

export default style;