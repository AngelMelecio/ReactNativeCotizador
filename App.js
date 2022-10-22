import { StatusBar } from 'react-native';
import AppBar from './src/components/AppBar';
import CreateProductPage from './src/pages/CreateProductPage'
import CreateExtraPage from './src/pages/CreateExtraPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ProductsProvider} from './src/context/ProductsProvider'

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <ProductsProvider>  
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={AppBar} />
          <Stack.Screen name="CreateProduct" component={CreateProductPage} />
          <Stack.Screen name="CreateExtra" component={CreateExtraPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsProvider>

  );
}
