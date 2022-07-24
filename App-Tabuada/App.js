import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import TelaInicio from "./src/screens/TelaInicio"
import TelaTabuada from "./src/screens/TelaTabuada"
import TelaRespostaCorreta from "./src/screens/TelaRespostaCorreta"
import TelaRespostaErrada from "./src/screens/TelaRespostaErrada"

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={TelaInicio} />
      <Stack.Screen name="Tabuada" component={TelaTabuada} />
      <Stack.Screen name="RespostaCorreta" component={TelaRespostaCorreta} />
      <Stack.Screen name="RespostaErrada" component={TelaRespostaErrada} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
