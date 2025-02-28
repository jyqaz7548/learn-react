import React, { useState, useEffect } from 'react';

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection:"row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color:"black",
        fontsize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);


        this.state = {}; //state에 아무런 데이타도 가지고 있지 않다.
    }
        componentDidMount() {
            console.log(`${this.props.id} componentDidMount() called.`);
        }
        
        componentDidUpdate() {
            console.log(`${this.props.id} componentDidUpdate() called.`);
        }
    
        componentDidWillUnMount() {
            console.log(`${this.props.id} componentDidWillUnMount() called.`);
        }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}
export default Notification;