import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <section className='bg-base-200'>
            <nav className='navbar align-element'>
                <div className="navbar-start">
                    {/*TITLE*/}
                    <NavLink
                        to='/'
                        className='hidden lg:flex btn btn-primary text-3xl items-center'
                    >
                        C
                    </NavLink>
                </div>
                <div className="navbar-centet hidden lg:flex">
                    <ul className="menu menu-horizontal">nav link</ul>
                </div>
                <div className="navbar-end"></div>

            </nav>
            Navbar
        </section>
    );
};

export default Navbar;