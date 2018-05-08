import React, { Component } from 'react';

import './navigation_bar.css';
import '../search_bar/search_bar.css';

import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  DropdownItem } from 'reactstrap';

import {
  Route,
  HashRouter
} from "react-router-dom";

import SearchBar from '../search_bar/search_bar';
import SignOut from '../logon/SignOut'

const TMDB_API_KEY = 'f32b6b18b2054226bbfb00dfeda586c7';
let Query = "https://api.themoviedb.org/3/genre/tv/list?api_key="+TMDB_API_KEY;

function refreshPage(props){
  props.resetPage();
}

let parentProps;

class NavigationBar extends React.Component {
      constructor(props) {
        super(props);

        parentProps = props;
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

  render(){
    return(
      <HashRouter>
        <div>
          <div style={{borderBottom: "2px solid #cc0411"}}>
            <div className="header">

              <Navbar color="dark" dark expand="md">

                <NavbarBrand className="active" id="logo"></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar style={{width: '100%'}} >


                  <Nav className="m1-auto" navbar style={{width:'100%'}}>
                    <NavItem><NavLink onClick={()=>refreshPage(parentProps)}>Strong Głowna</NavLink></NavItem>
                    <NavItem><NavLink>Twój profil</NavLink></NavItem>
                    <NavItem><NavLink className="active" id="search">
                      <SearchBar pickShow={parentProps.pickShow}
                        searchSeries={parentProps.searchSeries}/>
                    </NavLink></NavItem>
                    <NavItem className="logoutBtn"><NavLink><SignOut /></NavLink></NavItem>

                  </Nav>

                </Collapse>
              </Navbar>

            </div>
          </div>
        </div>
      </HashRouter>

    );
  }

}

export default NavigationBar;
