import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/"><b>Home</b></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-white" href="/venues"><b>Venues</b></a>
                </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;