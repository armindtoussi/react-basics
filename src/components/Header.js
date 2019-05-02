import React from 'react';

export const Header = (props) =>  {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-header">
                <ul className="navbar-nav">
                    <li className="nav-item active"><a href="#" className="nav-link">{props.homeLink}</a></li>
                </ul>
            </div>
        </nav>
    );
}