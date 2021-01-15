import * as React from "react"
import {StyleSheet, View} from "react-native"
import {useQuery} from "@apollo/client"

import {GET_BLOCKS} from "./query"
import Screen from "../Common/Screen"
import BlocksTable from "./BlocksTable"
import {formatDateTime} from "../../utils"

const styles = StyleSheet.create({
    container: {
        padding: 30,
    }, 
})

const buildBlockList = (data) => {
    if(!data) return []
    const  {blocks} = data.bitcoin
    console.log(blocks)
    return blocks.map(({blockHash, timestamp, height})=> {
        return {
            hash: blockHash,
            height,
            time: formatDateTime(timestamp.iso8601)
        }
    })
}

function Blocks() {
    const {loading, error, data} = useQuery(GET_BLOCKS)

    return (
        <Screen title="Blocks">
          
            <View style={styles.container}>
                <BlocksTable blocks={buildBlockList(data)} />
            </View>
        </Screen>
    )
}

export default Blocks