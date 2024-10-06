import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';




import pagina1 from './components/pagina1';
import registro from './components/registro';
import pagina2 from './components/pagina2';
import pagina3 from './components/pagina3';
import inicio_de_sesion from './components/inicio_de_sesion';
import OptionsScreen from './components/OptionsScreen';
import QuizScreen from './components/QuizScreen';
import pagina_resultados_de_busqueda from './components/pagina_resultados_de_busqueda';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'game-controller') {
            return <Entypo name="game-controller" />;
          } else if (route.name === 'Options') {
            iconName = 'cog';
          } else if (route.name === 'Quiz') {
            iconName = 'account-question';
          }

           else if (route.name === 'pagina1') {
return<EvilIcons name="image" size={24} color="red" />          }
           else if (route.name === 'pagina2') {
return <EvilIcons name="image" size={24} color="red" />          }
          else if (route.name === 'ejemplo') {
            return <Ionicons name="skull" size={24} color="black" />
          }
           else if (route.name === 'pagina3') {
return <EvilIcons name="image" size={24} color="red" />
          }
            else if (route.name === 'registro') {
          return <MaterialIcons name="app-registration" size={24} color="black" />
          }

            else if (route.name === 'inicio_sesion') {
          return <MaterialIcons name="account-circle" size={24} color="black" />
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="registro" component={registro} />
      <Tab.Screen name="inicio_sesion" component={inicio_de_sesion} />
      <Tab.Screen name="pagina1" component={pagina1} />
      <Tab.Screen name="pagina2" component={pagina2} />
      <Tab.Screen name="pagina3" component={pagina3} />
      <Tab.Screen name="ejemplo" component={pagina_resultados_de_busqueda} />



      <Tab.Screen name="Quiz" component={QuizScreen} />
      <Tab.Screen name="Options" component={OptionsScreen} />
    </Tab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen name="inicio_de_sesion" component={inicio_de_sesion} />
        <Stack.Screen name="registro" component={registro} />
        <Stack.Screen name="pagina1" component={pagina1} />
        <Stack.Screen name="pagina2" component={pagina2} />
        <Stack.Screen name="pagina3" component={pagina3} />
        <Stack.Screen name="pagina_resultados_de_busqueda" component={pagina_resultados_de_busqueda} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
