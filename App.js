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
            title: this.state.todoInput,
            done: false,
        })

        this.setState({
            todos,
            todoInput: '',
        })
    }

    toggleDone(item) {
        let todos = this.state.todos
        todos = todos.map(todo => {
            if (todo.id == item.id) {
                todo.done = !todo.done
            }
            return todo
        })

        this.setState({ todos })
    }

    removeTodo(item) {
        let todos = this.state.todos

        todos = todos.filter(todo => todo.id !== item.id)

        this.setState({ todos })
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
                <Header title="Habits App" />
                <InputBar
                    textChange={todoInput => this.setState({ todoInput })}
                    addNewTodo={() => this.addNewTodo()}
                />
                <FlatList
                    data={this.state.todos}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <TodoItem
                                todoItem={item}
                                toggleDone={() => this.toggleDone(item)}
                                removeTodo={() => this.removeTodo(item)}
                            />
                        )
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
        backgroundColor: '#FFCE00',
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
