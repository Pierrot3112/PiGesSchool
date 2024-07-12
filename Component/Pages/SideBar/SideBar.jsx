import React, { useState } from 'react';
import User from '../../../Page/dist/img/avatar2.png';

const SideBar = ({ setMenuSelectionne, setSousMenuSelectionne }) => {
    const [menuActif, setMenuActif] = useState('Tableau de bord');
    const [sousMenuSelectionne, setSousMenuLocal] = useState(null);

    const handleMenuClick = (menu) => {
        setMenuActif(menu);
        setMenuSelectionne(menu);
        setSousMenuSelectionne(null);
        setSousMenuLocal(null);
    };

    const handleSubMenuClick = (sousMenu) => {
        setSousMenuLocal(sousMenu);
        setSousMenuSelectionne(sousMenu);
    };

    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src={User} alt="User" className="img-circle" />
                    </div>
                    <div className="pull-left info">
                        <p>Administrateur</p>
                        <a href="#"><i className="fa fa-circle text-success"></i> Présent</a>
                    </div>
                </div>
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="" id="" className="form-control" placeholder='rechercher...' />
                        <span className="input-group-btn">
                            <button type="submit" id="search-btn" className="btn btn-flat">
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
                <ul className="sidebar-menu">
                    <li className="header">LISTE MENU</li>
                    <li className={menuActif === 'Tableau de bord' ? 'active' : ''}>
                        <a href="#" onClick={() => handleMenuClick('Tableau de bord')}>
                            <i className="fa fa-dashboard"></i>
                            <span>Tableau de bord</span>
                        </a>
                    </li>
                    <li className={`treeview ${menuActif === 'Classe' ? 'active menu-open' : ''}`}>
                        <a href="#" onClick={() => handleMenuClick('Classe')}>
                            <i className="fa"></i>
                            <span>Classe</span>
                            <span className="pull-right-container">
                                <i className={`fa fa-angle-left pull-right ${menuActif === 'Classe' ? 'rotate-icon' : ''}`}></i>
                            </span>
                        </a>
                        <ul className="treeview-menu" style={{ display: menuActif === 'Classe' ? 'block' : 'none' }}>
                            <li className={sousMenuSelectionne === 'Premiere' ? 'active' : ''}><a href="#" onClick={() => handleSubMenuClick('Premiere')}>Premiere</a></li>
                            <li className={sousMenuSelectionne === 'Terminal' ? 'active' : ''}><a href="#" onClick={() => handleSubMenuClick('Terminal')}>Terminal</a></li>
                            <li className={sousMenuSelectionne === 'Seconde' ? 'active' : ''}><a href="#" onClick={() => handleSubMenuClick('Seconde')}>Seconde</a></li>
                        </ul>
                    </li>
                    <li className={menuActif === 'Elèves' ? 'active' : ''}>
                        <a href="#" onClick={() => handleMenuClick('Elèves')}>
                            <i className="fa"></i>
                            <span>Elèves</span>
                        </a>
                    </li>
                    <li className={menuActif === 'Enseignants' ? 'active' : ''}>
                        <a href="#" onClick={() => handleMenuClick('Enseignants')}>
                            <i className="fa"></i>
                            <span>Enseignants</span>
                        </a>
                    </li>
                    <li className={menuActif === 'Emplois ddu temps' ? 'active' : ''}>
                        <a href="#" onClick={() => handleMenuClick('Emplois ddu temps')}>
                            <i className="fa"></i>
                            <span>Emplois ddu temps</span>
                        </a>
                    </li>
                    <li className={menuActif === 'Notes' ? 'active' : ''}>
                        <a href="#" onClick={() => handleMenuClick('Notes')}>
                            <i className="fa"></i>
                            <span>Notes</span>
                        </a>
                    </li>
                    <li className={menuActif === 'Presence' ? 'active' : ''}>
                        <a href="#" onClick={() => handleMenuClick('Presence')}>
                            <i className="fa"></i>
                            <span>Presence</span>
                        </a>
                    </li>
                    <li className={menuActif === 'Calendrier Scolaire' ? 'active' : ''}>
                        <a href="#" onClick={() => handleMenuClick('Calendrier Scolaire')}>
                            <i className="fa"></i>
                            <span>Calendrier Scolaire</span>
                        </a>
                    </li>
                </ul>
            </section>
        </aside>
    );
}

export default SideBar;
