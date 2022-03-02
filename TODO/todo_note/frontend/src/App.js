import React from 'react';
import axios from "axios";
import logo from './logo.svg';
import * as url from "url";
import './App.css';
import UserList from "./components/User.js";
import Todoauthor from "./components/Footer.js"
import Menu from "./components/Menu.js";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        // const users = [
        //
        //     {
        //         'first_name': 'Федор',
        //         'last_name': 'Достаевский',
        //         'birthday_year': 1821
        //
        //     },
        //     {
        //         'first_name': 'Александр',
        //         'last_name': 'Грин',
        //         'birthday_year': 1880
        //     }
        // ]

        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            this.setState(
                {
                    'users': response.data
                }
            )
        }).catch(error => console.log(error))

    }

    render() {
        return (
            <div>
                <Menu/>
                <br/>
                <UserList users={this.state.users}/>
                <Todoauthor/>
            </div>
        )
    }
}

export default App;