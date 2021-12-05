import React from 'react';

const Navbar: React.FC= () => {
    return (


            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">React + Typescript</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Список дел</a></li>
                        <li><a href="badges.html">Информация</a></li>

                    </ul>
                </div>
            </nav>


    );
};

export default Navbar;