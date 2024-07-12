import Img from '../../../Page/dist/img/avatar2.png'

const NavBar = () =>{
    return(
        <>
            <a href="#" className="logo">
                <b>PIGES'</b>School
            </a>
            <nav className="navbar navbar-static-top" role="button">
                <a href="#" data-toggle="offcanvas" role="button" className="sidebar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown messages-menu">
                            <a href="#" className="dropdown-toggle">
                                <i className="fa fa-envelope-o"></i>
                                <span className="label label-success">4</span>
                            </a>
                            {/* messages liste */}
                        </li>
                        <li className="dropdown notifications-menu">
                            <a href="#" className="dropdown-toggle">
                                <i className="fa fa-bell-o"></i>
                                <span className="lebel label-danger">4</span>
                            </a>
                        </li>
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle">
                                <img src={Img} alt="" className="user-image" />
                                <span className="hidden-xs">Administrateur</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar