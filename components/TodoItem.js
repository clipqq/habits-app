import React from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native'

export default class TodoItem extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        const todoItem = this.props.todoItem
        return (
            <TouchableOpacity style={StyleSheet.todoItem}>
                <Text
                    style={
                        todoItem.done
                            ? { color: '#AAAAAA' }
                            : { color: '#313131' }
                    }
                >{todoItem.title}</Text>
            </TouchableOpacity>
        )
    }
}
