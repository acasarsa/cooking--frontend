import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import AuthContext from "../AuthContext"

import SearchBar from "./SearchBar";

class NavBar extends React.Component {

    static contextType = AuthContext;

    render() {
        return (
            <nav className="navbar is-fixed-top is-borderless" role="navigation" aria-label="main navigation">
                <div className="navbar-brand nav-cookbook-icon">
                    <Link to="/recipes">
                        <a className="navbar-item icon">
                            <span className="cookbook-title">C</span>
                            <FontAwesomeIcon icon={faCarrot} size='lg' />
                            <span className="cookbook-title">B</span>
                        </a>
                    </Link>                    
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            {this.context.user
                                ? <a className="button is-link is-inverted" href='/cookbook'>{this.context.user.name}</a>
                                : ""}

                            <a className="button is-primary is-inverted" href='/recipes/recipe_form/new'>
                                New Recipe
                            </a>

                            <a className="button is-success is-inverted" href='/recipes'>
                                Social Recipes
                            </a>

                            <a className="button is-info is-inverted" href='/cookbook'>
                                My Cookbook
                            </a>
                        </div>
                    </div>

                    <div className="navbar-middle">
                        <div className="navbar-item">
                            <SearchBar updateRecipesList={this.updateRecipesList} />
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            {this.context.user
                                ? <a className="button is-danger is-inverted" onClick={this.props.logout}><strong>Logout</strong></a>
                                : ""
                            }
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;
