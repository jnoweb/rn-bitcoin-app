import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Blocks from "../components/Blocks"
import Transactions from "../components/Transactions"

const Tab = createBottomTabNavigator()

function Nav() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 18, marginBottom: 12}}}>
                <Tab.Screen name="Blocks" component={Blocks} />
                <Tab.Screen name="Transactions" component={Transactions}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Nav

