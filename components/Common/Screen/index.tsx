import * as React from "react"
import {SafeAreaView, Text, StyleSheet, View} from "react-native"

interface Props {
    title: string
    children: React.ReactNode
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
    }, 
    header: {
        fontSize: 25,
        width: "100%",
        textAlign: "center"
    }
})

function Screen({title, children, ...props}: Props) {
    return (
        <SafeAreaView >
            <View style={styles.container} {...props}>
                <Text style={styles.header}>{title}</Text>
            </View>
            {children}
        </SafeAreaView>
    )
}

export default Screen