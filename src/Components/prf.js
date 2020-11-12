import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../Hassen.jpg';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: "Knani Hassen",
            bio: "Resourceful developer, very familar with C++, C#.NET and LabVIEW. Enjoying problem solving and mastering the necessary tools of design, programming and creating embedded systems including robotics.",
            profession: "Web Developper",
            open: false, image: Image1, interval:""
        }
    }

    componentDidMount() {
        let T=new Date();
        this.setState({interval:T})
    }


render() {
    return (
        <div>
            { this.state.open ? (
                <div>
                    <h1>{this.state.fullname} </h1>
                    <img src={this.state.image} style={{ width: "10%", height: "10%" }} alt="hassen" />
                    <h2>{this.state.profession}</h2>
                    <h5>{this.state.bio}</h5>
                    <h1>{this.state.interval.toLocaleTimeString()}</h1>
                    <Button variant="success" onClick={(e) => { e.preventDefault(); this.setState({ open: false }) }}>Hide</Button>
                </div>
            ) : (
                    <Button variant="success" onClick={(e) => { e.preventDefault(); this.setState({ open: true }) }}>Show</Button>
                )
            }
        </div>
    )
}
}

export default Profile;