import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../Styles/styles'
import { COLORS, icons } from '../../constants'
import { useProducts } from '../context/ProductsProvider'


const CreateExtraPage = ({ navigation, route }) => {

    const { extras, addExtra, updateExtra, deleteExtra } = useProducts()

    const [id, setId] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [articles, setArticles] = useState([])

    useEffect(() => {

        if (!route.params) return
        let { item } = route.params
        setId(item.id)
        setCategoryName(item.categoryName)
        setArticles(item.articles)

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
            </View>

            <View style={{ ...styles.item, padding: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        placeholder='Categoria'
                        style={{ textAlign: 'center', ...styles.input, flex: 8 }}
                        value={categoryName}
                        onChangeText={(e) => setCategoryName(e)}>
                    </TextInput>
                </View>

                {articles?.map((ite, j) =>
                    <View key={j} style={{ flexDirection: 'row', marginVertical: 2, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => setArticles(prev => prev.filter((a, i) => i !== j))}
                            style={{
                                flex: 1,
                                ...styles.container,
                            }}>
                            <Image
                                source={
                                    icons.close
                                }
                                resizeMode='cover'
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: COLORS.primary
                                }}
                            />
                        </TouchableOpacity>
                        <TextInput
                            placeholder='Articulo'
                            style={{ textAlign: 'center', flex: 5, ...styles.input }}
                            value={ite.name}
                            onChangeText={(e) => setArticles(prev => [
                                ...prev.slice(0, j),
                                { ...prev[j], name: e },
                                ...prev.slice(j + 1)
                            ])}>
                        </TextInput>
                        <TextInput
                            placeholder='Precio'
                            style={{ textAlign: 'center', flex: 4, ...styles.input }}
                            value={`${ite?.price}`}
                            onChangeText={(e) => setArticles(prev => [
                                ...prev.slice(0, j),
                                { ...prev[j], price: e },
                                ...prev.slice(j + 1)]
                            )}
                            keyboardType="numeric">
                        </TextInput>
                        <TouchableOpacity
                            onPress={(e) => setArticles(prev => [
                                ...prev.slice(0, j),
                                { ...prev[j], percentage: !prev[j]?.percentage },
                                ...prev.slice(j + 1)]
                            )}
                            style={{
                                flex: 1,
                                marginRight: 10,
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                borderWidth: 1,
                                borderColor: COLORS.primary,
                                ...styles.container,
                                backgroundColor: ite.percentage ?
                                    COLORS.primary : COLORS.white
                            }}>
                            <Image
                                source={
                                    ite.percentage ?
                                        icons.percentage : icons.dollar
                                }
                                resizeMode='cover'
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: ite.percentage ?
                                        COLORS.white : COLORS.primary
                                }}
                            />
                        </TouchableOpacity>

                    </View>)}
                <View style={{ ...styles.row, ...styles.container, height: 45, marginTop: 10 }}>
                    <View style={{ flex: 8, height: 34, ...styles.inputContainer }}>
                        <TouchableOpacity
                            onPress={() => setArticles(prev => [...prev, { name: '', price: '', percentage: false }])}
                            style={{
                                width: 34,
                                height: 34,
                                ...styles.container,
                                borderColor: COLORS.primary,
                                borderWidth: 1,
                                borderRadius: 17,
                            }}>
                            <Image
                                source={icons.plus}
                                resizeMode='cover'
                                style={{ ...styles.container, tintColor: COLORS.primary, height: 15, width: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
            </View>
            <View style={{ ...styles.inputContainer, height: 40, marginTop: 10 }}>
                <TouchableOpacity
                    onPress={() => {
                        !route.params
                            ? addExtra(Date.now, categoryName, articles)
                            : updateExtra(id, categoryName, articles), navigation.goBack()
                    }
                    }
                    style={{
                        ...styles.expand, ...styles.container, ...styles.button,
                        backgroundColor: !route.params ? COLORS.primary : COLORS.secondary
                    }}>
                    <Text style={{ color: COLORS.white }}>{!route.params ? 'Crear' : 'Guardar'}</Text>
                </TouchableOpacity>

            </View>
            {route.params && <View style={{ ...styles.inputContainer, height: 40, marginTop: 10 }}>
                <TouchableOpacity
                    onPress={() => { deleteExtra(id, navigation.goBack()) }}
                    style={{
                        ...styles.expand, ...styles.container, ...styles.button,
                        backgroundColor: COLORS.gray3
                    }}>
                    <Text style={{ color: COLORS.white }}>Eliminar</Text>
                </TouchableOpacity>

            </View>}



        </View>
    )
}

export default CreateExtraPage