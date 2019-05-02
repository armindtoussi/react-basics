import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge,
            homeLink: this.props.initialLinkName,
        }
        console.log("constructor");
    }

    /* Here we're just testing to see the lifecycle */
    componentWillMount() { //First method in the lifecycle hook that gets update.
        console.log("Component will mount"); //if you cann setState in here then new render will take it into account. 
    }

    componentDidMount() {
        console.log("Component did mount!");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component Will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update: ", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }    


    onMakeOlder() { 
        this.setState({
            age: this.state.age + 3,
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value,
        });
    }

    render() {
        return (
            <div className="container">
                <p className="lead">In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <hr/>
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>
                <hr/>
                <button className="btn btn-success" onClick={() => this.props.greet()}>Greet</button>
                <hr/>
                <input type="text" 
                       value={this.state.homeLink} 
                       onChange={(event) => this.onHandleChange(event)}/>
                <button className="btn btn-success" onClick={() => this.onChangeLink()}>Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string, 
    initialAge:  PropTypes.number,
    greet: PropTypes.func, 
    initialLinkName: PropTypes.string,
};