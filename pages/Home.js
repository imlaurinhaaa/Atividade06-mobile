import { Image } from 'expo-image';
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";

const pessoal = ['2 Anos', 'Data de Nascimento: 20/02/2023', 'Signo: Peixes ♓'];

export default function Home() {
    return (

        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.title} >Conheça Luna Capivarelli 🎀</Text>
                <Image style={styles.img} source={require('../img/LunaCapivara.jpg')} />
                <Text style={styles.text} >Luna é uma capivara muito carinhosa, adoro brincar ao ar livre, nadar em seu pequeno lago perto de sua casa e comer um prato cheio de cenouras deliciosas! 🩷</Text>

                <Text style={styles.subtitle}>Informações Pessoais</Text>
                <FlatList
                    data={pessoal}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        gap: 20,
        backgroundColor: "#F6E6E8",
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

    subtitle: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#ffb4c1',
        borderRadius: 30,
        marginBottom: 16,
        marginTop: 13,
        width: '56%',
        marginVertical: 10,
        alignSelf: 'center',
    },

    item: {
        padding: 10,
        fontSize: 14,
        height: 44,
        textAlign: 'center',
    },
});