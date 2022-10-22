import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../Styles/styles'
import { COLORS, icons } from '../../constants'
import { useProducts } from '../context/ProductsProvider'

const MyProductsPage = ({ navigation }) => {

    
    const {products, extras} = useProducts()
    const [menuSelected, setMenuSelected] = useState(0)

    function toCm(inches) {
        return (inches * 2.54).toFixed(0)
    }
    function toMXN(USD) {
        return USD * 21;
    }


    const ViewProducts = () => {
        const renderProduct = ({ item }) => {
            let Hcm = toCm(item.height)
            let Wcm = toCm(item.width)
            let MXN = toMXN(item.price)
            return (
                <TouchableOpacity style={styles.item}
                    onPress={()=>{navigation.navigate( 'CreateProduct', { item } ) }}
                    >
                    <View style={{ ...styles.row, height: 60 }}>
                        <View style={{ ...styles.expand, ...styles.container }}>
                            <Text>{item.width}" ({Wcm} cm)</Text>
                        </View>
                        <View style={{ ...styles.expand, ...styles.container }}>
                            <Text>{item.height}" ({Hcm} cm)</Text>
                        </View>
                        <View style={{ ...styles.expand, ...styles.container }}>
                            <Text>{item.price} USD</Text>
                            <Text>{MXN} MXN</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <>
                 <View style={{ ...styles.row, height: 35 }}>
                        <View style={{ ...styles.expand, ...styles.container }}>
                            <Text>Ancho</Text>
                        </View>
                        <View style={{ ...styles.expand, ...styles.container }}>
                            <Text>Altura</Text>
                        </View>
                        <View style={{ ...styles.expand, ...styles.container }}>
                            <Text>Precio</Text>
                        </View>
                    </View>
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                />

            </>
        )
    }

    const ViewExtras=()=>{
        const renderExtra = ({item:ext, index:i})=>{
            return(
                <TouchableOpacity
                        key={i}
                        onPress={() => navigation.navigate('CreateExtra', { item:ext })}
                        style={{ ...styles.item, padding: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{ textAlign: 'center', flex: 1 }}
                            >{ext.categoryName}
                            </Text>

                        </View>

                        {ext.articles.map((ite, j) =>
                            <View key={j} style={{ flexDirection: 'row', marginVertical: 2 }}>
                                <Text
                                    style={{ textAlign: 'center', flex: 5, }}
                                >{ite.name}
                                </Text>
                                <Text
                                    style={{ textAlign: 'center', flex: 4, }}
                                >{!ite.percentage ? '$'+ite?.price : ite?.price+'%'}
                                </Text>

                            </View>)}
                    </TouchableOpacity>
            )
        }

        return(
            <FlatList
                data={extras}
                renderItem={renderExtra}
            />
        )
    }

    return (
        <View style={styles.full}>
            <View style={{ ...styles.row, height: 45 }}>
                <TouchableOpacity
                    onPress={() => setMenuSelected(0)}
                    style={[
                        styles.container,
                        styles.expand,
                        menuSelected === 0 ? styles.selected : styles.unSelected
                    ]}>
                    <Text
                        sytle={{
                            textAlign: 'center',
                            color: menuSelected === 0 ? COLORS.white : COLORS.gray
                        }} >Productos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setMenuSelected(1)}
                    style={[
                        styles.container,
                        styles.expand,
                        menuSelected === 1 ? styles.selected : styles.unSelected
                    ]}>
                    <Text
                        sytle={{
                            textAlign: 'center',
                            color: menuSelected === 1 ? COLORS.white : COLORS.gray
                        }}>Extras</Text>
                </TouchableOpacity>
            </View>
            {menuSelected ? <ViewExtras /> : <ViewProducts />}
            <TouchableOpacity
                style={{ ...styles.fab, position: 'absolute', right: 10, bottom: 10, }}
                onPress={() => navigation.navigate( menuSelected?'CreateExtra' : 'CreateProduct' )} >
                <Image
                    source={icons.plus}
                    resizeMode='cover'
                    style={{ ...styles.container, tintColor: COLORS.white, height: 20, width: 20 }} />
            </TouchableOpacity>
        </View>
    )
}

export default MyProductsPage