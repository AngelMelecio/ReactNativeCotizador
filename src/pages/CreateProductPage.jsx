import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../Styles/styles'
import { COLORS, icons } from '../../constants'
import { useProducts } from '../context/ProductsProvider'

const CreateProductPage = ({ navigation, route }) => {

    const { addProduct, deleteProduct, updateProduct } = useProducts()

    const [id, setId] = useState(null)
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [price, setPrice] = useState('')


    useEffect(() => {
        if (!route.params) return

        let { item } = route?.params
        setWidth(item?.width)
        setHeight(item?.height)
        setPrice(item?.price)
        setId(item?.id)
    }, [])

    return (
        <View style={styles.full}>
            <View style={{ ...styles.header }}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    style={{ ...styles.container, position: 'absolute', left: 15 }}>
                    <Image
                        source={icons.arrow}
                        resizeMode='cover'
                        style={{ height: 20, width: 20 }}
                    />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center' }}>{!route.params ? 'Nuevo Producto' : 'Editar Producto'}</Text>
            </View>


            <View style={{ flex: 1, paddingHorizontal: 10 }}>

                <View style={{ ...styles.inputContainer, height: 60 }}>
                    <View style={styles.expand}>
                        <Text style={{ marginLeft: 5, }}>Ancho (pulgadas)</Text>
                        <TextInput
                            value={`${width}`}
                            onChangeText={(e) => setWidth(e)}
                            style={styles.input}
                            keyboardType={'number-pad'}
                        >

                        </TextInput>
                    </View>
                    <View style={styles.expand}>
                        <Text style={{ marginLeft: 5, }}>Ancho (pulgadas)</Text>
                        <TextInput
                            value={`${height}`}
                            onChangeText={(e) => setHeight(e)}
                            style={styles.input}
                            keyboardType={'number-pad'}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={{ ...styles.inputContainer, height: 60 }}>
                    <View style={styles.expand}>
                        <Text style={{ marginLeft: 5, }}>Precio (dolares)</Text>
                        <TextInput
                            value={`${price}`}
                            onChangeText={(e) => setPrice(e)}
                            style={styles.input}
                            keyboardType={'number-pad'}
                        >

                        </TextInput>
                    </View>
                </View>
                <View style={{ ...styles.inputContainer, height: 40, marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            !route.params ?
                                addProduct(width, height, price, Date.now()) :
                                updateProduct(width, height, price, id),
                                navigation.goBack()
                        }}
                        style={{
                            ...styles.expand, ...styles.container, ...styles.button,
                            backgroundColor: !route.params ? COLORS.primary : COLORS.secondary
                        }}>
                        <Text style={{ color: COLORS.white }}>{!route.params ? 'Crear' : 'Guardar'}</Text>
                    </TouchableOpacity>

                </View>
                {route.params && <View style={{ ...styles.inputContainer, height: 40, marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => { deleteProduct(id), navigation.goBack() }}
                        style={{
                            ...styles.expand, ...styles.container, ...styles.button,
                            backgroundColor: COLORS.gray3
                        }}>
                        <Text style={{ color: COLORS.white }}>Eliminar</Text>
                    </TouchableOpacity>

                </View>}

            </View>

        </View>
    )
}

export default CreateProductPage