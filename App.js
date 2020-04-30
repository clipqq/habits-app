import React from 'react'
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native'
import Header from './components/Header'
import InputBar from './components/InputBar'
import TodoItem from './components/TodoItem'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todoInput: '',
            todos: [
                { id: 0, title: 'Go Swimming', done: false },
                { id: 1, title: 'Water Plants', done: false },
            ],
        }
    }

    addNewTodo() {
        let todos = this.state.todos
        todos.unshift({
            id: todos.length + 1,
            todo: this.state.todoInput,
            done: false,
        })

        this.setState({
            todos,
            todoInput: '',
        })
    }

    componentDidMount() {}
    render() {
        const iosStatusBar =
            Platform.OS == 'ios' ? (
                <View style={styles.iosStatusBar}></View>
            ) : (
                <View></View>
            )
        const androidStatusBar =
            Platform.OS == 'android' ? (
                <View style={styles.androidStatusBar}></View>
            ) : (
                <View></View>
            )

        return (
            <View style={styles.container}>
                {androidStatusBar}
                {iosStatusBar}
                <Header title="Habitzzz" />
                <InputBar
                    textChange={todoInput => this.setState({ todoInput })}
                    addNewTodo={() => this.addNewTodo}
                />
                <FlatList
                    data={this.state.todos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return <TodoItem todoItem={item} />
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    iosStatusBar: {
        height: 20,
        backgroundColor: '#333300',
    },
    titleText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
    },
    androidStatusBar: {
        height: 45,
        backgroundColor: '#FFCE00',
    },
})
