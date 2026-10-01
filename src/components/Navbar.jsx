import {NavLink} from "react-router-dom";
import {FaBarsStaggered} from "react-icons/fa6";
import {BsCart3} from "react-icons/bs";

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
                    {/*DROPDOWN*/}
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className='btn btn-ghost lg:hidden'
                        >
                            <FaBarsStaggered className='h-6 w-6'/>
                        </label>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-200'
                            >
                                nav links

                            </ul>
                    </div>
                </div>
                <div className="navbar-centet hidden lg:flex">
                    <ul className="menu menu-horizontal">nav link</ul>
                </div>
                <div className="navbar-end">
                    {/*CART LINK*/}
                    <NavLink
                        to='/cart'
                        className='btn btn-ghost btn-circle btn-md ml-4'
                    >
                        <div className="indicator">
                            <BsCart3 className="h-6 w-6" />
                            <span className="badge badge-sm badge-primary indicator-item">
                                44
                            </span>
                        </div>
                    </NavLink>
                </div>

            </nav>

        </section>
    );
};

export default Navbar;