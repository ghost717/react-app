import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deciding';
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return <li><a>Logout</a></li>;
        }
    }

    render() {
        return (
            <nav className="blue">
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        <li>
                            <a>Login with Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default Header;
