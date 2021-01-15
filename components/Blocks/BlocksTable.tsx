import * as React from "react"
import {gql, useQuery} from "@apollo/client"
import {DataTable} from "react-native-paper"

interface Block {
    time: string
    height: string
    hash: string
}
interface Props {
    blocks: Block[]
}

const headers = ['Hash', 'Height', 'Time']

function BlocksTable({blocks}: Props) {
    console.log(blocks, "blocks=======")
    return (
        <DataTable>
            <DataTable.Header>
            {
                headers.map((header)=> <DataTable.Title key={header}>{header}</DataTable.Title>)
            }
            </DataTable.Header>
            {
                blocks.map(({height, hash, time})=> {
                    return(
                        <DataTable.Row>
                            <DataTable.Cell>{hash}</DataTable.Cell>
                            <DataTable.Cell>{height}</DataTable.Cell>
                            <DataTable.Cell>{time}</DataTable.Cell>
                        </DataTable.Row>
                    )
                })
            }
        </DataTable>
    )
}

export default BlocksTable