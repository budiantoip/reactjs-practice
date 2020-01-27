import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStatus: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState((state) => ({
            toggleStatus: !state.toggleStatus
        }));
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.toggleStatus ? 'ON' : 'OFF'}
                <p>Kondisi sekarang {this.state.toggleStatus ? 'menyala' : 'mati'}</p>
            </button>
        );
    }
}

export default Toggle;