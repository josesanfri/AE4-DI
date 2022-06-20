import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const nombre = nombreRecibido => {
    return <Text>{nombreRecibido}</Text>
}

const datos = (textoLabel) => {
    return (
        <View style={estilo === 'florida' ? styles.florida : styles.upv}>
            <TextInput
                label={textoLabel}
                placeholder='placeholder'
                placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
                left={<TextInput.Icon name='eye' />}
            />
            <TextInput
                label={textoLabel}
                placeholder='placeholder'
                placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
                left={<TextInput.Icon name='eye' />}
            />
        </View>
    )
}

const mostrarBotonInformes = () => {
    return (
        <Button
            icon="format-list-bulleted"
            mode="contained"
        >
            INFORMES
        </Button>
    )
}

const estilo = 'florida';
const isAdmin = true;
const modulos2Dam = [
    { nombre: 'DIN', profesor: 'Manel', horas: 120 },
    { nombre: 'ADA', profesor: 'Roberto', horas: 120 },
    { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
    { nombre: 'PSP', profesor: 'Roberto', horas: 60 },
    { nombre: 'SGE', profesor: 'Belén', horas: 100 },
    { nombre: 'Anglés', profesor: 'Caterina', horas: 40 },
    { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
    { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
    { nombre: 'PSP', profesor: 'Roberto', horas: 60 },
    { nombre: 'SGE', profesor: 'Belén', horas: 100 },
    { nombre: 'Anglés', profesor: 'Caterina', horas: 40 },
    { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
];

class App extends Component {
    render() {
        return (
            <>
                {nombre('Jose María Sánchez')}
                {datos('Introduce tus datos')}
                {isAdmin && mostrarBotonInformes()}
                <ScrollView>
                    {modulos2Dam.map((item, pos) => {
                        return (
                            <View
                                style={pos % 2 === 0 ? styles.pares : styles.impares}
                                key={pos}
                            >
                                <Text>{pos + 1}</Text>
                                <Text>{item.nombre}</Text>
                                <Text>{item.profesor}</Text>
                                <Text>{item.horas} horas</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </>
        );
    }
}
const styles = StyleSheet.create({
    upv: {
        backgroundColor: 'purple',
        fontSize: 10,
        fontWeight: '600',
        padding: 4,
        paddingLeft: 12,
        textAlign: 'left',
        color: 'grey',
    },
    florida: {
        backgroundColor: 'red',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    impares: {
        backgroundColor: '#F8BBD0',
    },
    pares: {
        backgroundColor: '#F48FB1',
    },
});

export default App;