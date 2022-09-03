import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cashier from './pages/cashier'
import Table from './pages/table'
import Setting from './pages/setting'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          animation: 'none'
        }}>
          <Stack.Screen name="cashier" component={Cashier} />
          <Stack.Screen name="table" component={Table} />
          <Stack.Screen name="setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

