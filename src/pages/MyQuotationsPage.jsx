import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from '../Styles/styles'
import { icons, COLORS } from '../../constants'
import { useProducts } from '../context/ProductsProvider'

const MyQuotationsPage = () => {

  const { products } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)


  const MyModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>

        <View style={{ position: 'absolute', bottom: 0, width: '100%', height: '80%', backgroundColor: COLORS.light }}>
          <ScrollView>
            {products.map( (product, i) =>
              <TouchableOpacity 
                onPress={()=> {setSelectedProduct(product), setModalVisible(false) } }
                key={i} style={styles.item}>
                <Text>{product.height}</Text>
                <Text>{product.width}</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>

      </Modal>
    )
  }

  return (
    <View style={styles.full}>
      
      <MyModal />
      {selectedProduct!==null && <View style={styles.item}>
        <Text>{selectedProduct.height}</Text>
        <Text>{selectedProduct.width}</Text>
      </View>}
      <TouchableOpacity
        style={{ ...styles.fab, position: 'absolute', right: 10, bottom: 10, }}
        onPress={() => setModalVisible(true)} >
        <Image
          source={icons.plus}
          resizeMode='cover'
          style={{ ...styles.container, tintColor: COLORS.white, height: 20, width: 20 }} />
      </TouchableOpacity>
      {modalVisible && <View style={{ position:'absolute', width:'100%', height:'100%', backgroundColor: "rgba(0,0,0,0.3)" }}></View>}
    </View>
  )
}

export default MyQuotationsPage