import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            showProfile: false
        }
        this.showProfile = this.showProfile.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showProfile(e) {
        e.preventDefault();
        this.setState({showProfile: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    closeMenu(e) {
        if (!this.drawdowmMenu.contains(e.target)) {
            this.setState({showProfile: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            })
        }
    }
    render() {
        return (
            <header className="nav-bar">
                <h1>Menu</h1>
                <nav>
                    <li>Bag</li>
                    <li><button onClick={this.showProfile}>Profile</button></li>
                    {this.state.showProfile ? (
                        <div 
                            className="profile"
                            ref={(ele) => {
                                this.drawdowmMenu = ele;
                            }}
                        >
                        <li><button> Login </button></li>
                        <li><button> Signup </button></li>
                        </div>
                    ) : (
                        null
                    )}
                    </nav>     
            </header>
        )
    }
}

export default Navbar;