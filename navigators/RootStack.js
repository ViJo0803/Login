import React from "react";

//colors
import { Colors } from "./../components/styles";
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import Welcome from "./../screens/Welcome";
import RegisterExntended from "../screens/RegisterExntended";

const Stack = createStackNavigator();

// credentials context
import { CredentialsContext } from "./../components/CredentialsContext";

// <--------------- ROOT Stack (contiene a LoginStack y MainStack ) --------------->
function RootStack() {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: "red" }}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginStack}
              options={{ headerShown: false }}
            />,
            {/* {storedCredentials ? (
              ((
                <Stack.Screen
                  options={{
                    headerTintColor: primary,
                  }}
                  name="Welcome"
                  component={Welcome}
                />
              ),
              (
                <Stack.Screen
                  name="RegisterExntended"
                  component={RegisterExntended}
                />
              ))
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            )} */}
            <Stack.Screen
              name="Main"
              component={MainStack}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
}
// <--------------- ROOT Stack (contiene a LoginStack y MainStack ) --------------->
// <--------------------- LOGIN Stack --------------------->
function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeRecharge"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterExntended"
        component={RegisterExntended}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
// <--------------------- LOGIN Stack --------------------->

// <--------------------- MAIN Stack --------------------->
function MainStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "indigo",
          shadowColor: "indigo",
          elevation: 0,
        },
        headerTitleStyle: { color: "white", fontSize: 16 },
        // headerRight: () => <Ionicons name='ios-log-out' color='white' size={30} style={{ marginHorizontal: 15 }}></Ionicons>,
        // headerLeft: () => <Ionicons name='ios-menu' color='white' size={30} style={{ marginHorizontal: 15 }} onPress={() => props.navigation.openDrawer()}></Ionicons>,
      }}
      lazy={true}
    >
      <Drawer.Screen name="Inicio" />
      <Drawer.Screen name="Estadisticas" />
      <Drawer.Screen name="SendMonyScreen" />
      <Drawer.Screen name="Ultimos Movimientos" options={{ title: "" }} />
      <Drawer.Screen name="FAQ" />
      <Drawer.Screen name="Recargar Dinero" />
      <Drawer.Screen name="Mis Datos" />
      {/* <Drawer.Screen name='Card' component={Card} /> */}

      <Stack.Screen name="SelectContact" options={{ title: "" }} />
      <Stack.Screen name="FinishSend" options={{ title: "" }} />
      <Stack.Screen name="ContactCard" />
      <Stack.Screen name="Contactos" />
      <Stack.Screen name="Card" />
      <Stack.Screen name="TransactionDetails" options={{ title: "" }} />
      <Stack.Screen name="Cuentas" />
    </Drawer.Navigator>
  );
}
// <--------------------- MAIN Stack --------------------->

//const RootStack = () => {
//return (
//   <CredentialsContext.Consumer>
//     {({ storedCredentials }) => (
//       <NavigationContainer style={{ backgroundColor: 'red' }}>
//         <Stack.Navigator
//           screenOptions={{
//             headerStyle: {
//               backgroundColor: 'transparent',
//             },
//             headerTintColor: tertiary,
//             headerTransparent: true,
//             headerTitle: '',
//             headerLeftContainerStyle: {
//               paddingLeft: 20,
//             },
//           }}
//         >
//           {storedCredentials ? (
//             <Stack.Screen
//               options={{
//                 headerTintColor: primary,
//               }}
//               name="Welcome"
//               component={Welcome}
//             />,
//             <Stack.Screen name="RegisterExntended" component={RegisterExntended} />
//             //* {/* <Stack.Screen name="Signup" component={Signup}/> */} */

//           ) : (
//             <>
//               <Stack.Screen name="Login" component={Login} />
//               <Stack.Screen name="Signup" component={Signup} />
//             </>
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     )}
//   </CredentialsContext.Consumer>
//   )
// };

export default RootStack;
