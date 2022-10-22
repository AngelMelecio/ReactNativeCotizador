import { View, Text } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'

const ProductsContext = React.createContext()

const dummyExtras = [
    {
        id:0,
        categoryname: 'Motor',
        articles: [
            {
                name: 'Guardian',
                price: 2000,
                percentage: false,
            },
            {
                name: 'SEG',
                price: 1500,
                percentage: false,
            }
        ]
    },
    {
        id:1,
        categoryName: 'Acabado',
        articles: [
            {
                name: 'Madera',
                price: 20,
                percentage: true,
            },
            {
                name: 'Crema',
                price: 25,
                percentage: true,
            }
        ]
    },
    {
        id:2,
        categoryName: 'Ventanas',
        articles: [
            {
                name: 'x3',
                price: 3000,
                percentage: false,
            },
            {
                name: 'x4',
                price: 4000,
                percentage: false,
            },
            {
                name: 'x5',
                price: 5000,
                percentage: false,
            }
        ]
    },
    {
        id:3,
        categoryName: '',
        articles: [
            {
                name: '',
                price: 0,
                percentage: false,
            },

        ]
    }
]

const dummyProducts = [
    {
        id: 0,
        height: 33,
        width: 56,
        price: 123,
    },
    {
        id: 1,
        height: 39,
        width: 56,
        price: 222,
    }
]

export function useProducts() {
    return useContext(ProductsContext)
}

export function ProductsProvider({ children }) {

    const [extras, setExtras] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        setExtras(dummyExtras)
        setProducts(dummyProducts)
    }, [])


    function addProduct(width, height, price, id) {
        setProducts(prev => [
            ...prev, { width: width, height: height, price: price, id: id }
        ])
    }
    function deleteProduct(id) {
        setProducts(prev =>
            prev.filter(product => product.id !== id)
        )
    }
    function updateProduct(width, height, price, id) {
        setProducts(prev =>
            prev.map(product => {
                if (product.id !== id) return product
                return { width: width, height: height, price: price, id: id }
            })
        )
    }

    function addExtra( id, categoryName, articles ){
        setExtras( prev => [
            ...prev, { id:id, categoryName:categoryName, articles:articles}
        ] )
    }
    function updateExtra(id, categoryName, articles) {
        setExtras(prev =>
            prev.map(product => {
                if (product.id !== id) return product
                return { id: id, categoryName:categoryName, articles:articles }
            })
        )
    }
    function deleteExtra(id){
        setExtras(prev =>
            prev.filter(extra => extra.id !== id)
        )
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                addProduct,
                deleteProduct,
                updateProduct,

                extras,
                addExtra,
                updateExtra,
                deleteExtra,
            }}>
            {children}
        </ProductsContext.Provider>
    )
}
