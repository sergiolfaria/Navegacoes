import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import BemVindo from './src/screens/tela';
import UsuarioTela from './src/screens/UsuarioTela';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>    
      <Drawer.Navigator>
        <Drawer.Screen name='bemVindo' component={BemVindo}/>
        <Drawer.Screen name='UsuarioTela' component={UsuarioTela}/>
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

