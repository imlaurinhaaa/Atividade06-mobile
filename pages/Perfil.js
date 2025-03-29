import { Image } from 'expo-image';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {
    return (

        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.title} >Conheça Laura Violla 🌷</Text>
                <Image style={styles.img} source={require('../img/laura.jpg')} />
                <Text style={styles.text} >Laura é apaixonada por capivaras, e sua fiel companheira, Luna, está sempre ao seu lado. Todos os dias, elas passeiam pelo parque e relaxam à beira do lago próximo à sua casa, aproveitando momentos de tranquilidade juntas. 🤍</Text>
                <TouchableOpacity style={styles.menuItem}>
                        <Ionicons name="location-outline" size={24} color="#900020" />
                        <Text style={styles.menuText}>Valinhos- SP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Ionicons name="person-outline" size={24} color="#900020" />
                        <Text style={styles.menuText}>@imlaurinhaaa</Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        gap: 20,
        backgroundColor: "#F6EEE0",
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },

    scroll: {
        width: '100%',
    },

    img: {
        width: 200,
        height: 200,
        borderRadius: 150,
        alignSelf: "center",
        margin: 12,
    },

    text: {
        fontSize: 12,
        textAlign: "center",
        margin: 12,
    },

    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#FFF",
        backgroundColor: "#FFF",
        margin: 5,
        borderRadius: 30,
    },
    
    menuText: {
        fontSize: 16,
        marginLeft: 10,
        color: "#900020",
    },
});