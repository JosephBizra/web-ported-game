import React, { Component} from "react";
import "./style.css";
import Nav from "../Nav";
import API from "../../utils/API";

class Leaderboard extends Component {
    state = {
        user: []
    };


    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUsers()
        .then(res => this.setState({ user: res.data}))
        .catch(err => console.log(err));
    };



    render() {
        return (
            <div>
                <Nav />
                <div className="container-2">
                    <p className="select-title">Racing Leaderboards</p>
                    <table className="leaderBoard">
                        <tr>
                            <th>Username</th>
                            <th>wins</th>
                            <th>Losses</th>
                            <th>Best Lap Time</th>
                        </tr>
                        {this.state.user.map(user => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.wins}</td>
                                <td>{user.losses}</td>
                                <td>{user.best_lap}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        );
    }
};

export default Leaderboard;