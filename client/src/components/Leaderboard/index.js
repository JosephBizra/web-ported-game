import React, { Component} from "react";
import "./style.css";
import Nav from "../Nav";
import API from "../../utils/API";

class Leaderboard extends Component {
    state = {
        data: []
    };


    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUsers()
        .then(res => this.setState({ name: res.data.name, lap_time: res.data.best_lap, wins: res.data.wins, losses: res.data.lossess }))
        .catch(err => console.log(err));
    };



    render() {
        return (
            <div>
                <Nav />
                <div className="container-2">
                    <p className="select-title">Racing Leaderboards</p>
                    <div>
                        {this.state.data.map(user => (
                            <strong>
                            {user.name} maybe {user.wins}
                            </strong>
                        ))}
                    </div>
                    <table className="leaderBoard">
                        <tr>
                            <th>Username</th>
                            <th>wins</th>
                            <th>Losses</th>
                            <th>Best Lap Time</th>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
};

export default Leaderboard;