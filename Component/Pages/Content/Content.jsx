import React, { useState } from 'react';

import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'
import Dashboard from '../../Dashboard/Dashboard'
import Classe from '../../Classes/Classe'

const Content = () => {
    const [menuSelectionne, setMenuSelectionne] = useState('Tableau de bord');

    return (
        <div className="wrapper">
            <header className="main-header">
                <NavBar />
            </header>
            <aside className="main-sidebar">
                <SideBar setMenuSelectionne={setMenuSelectionne} />
            </aside>
            <div className="content-wrapper">
                {/* Contenu dynamique en fonction du menu sélectionné */}
                {menuSelectionne === 'Tableau de bord' && <Dashboard />}
                {menuSelectionne === 'Classe' && <Classe />}
                {/*{menuSelectionne === 'Elèves' && <Eleves />}
                {menuSelectionne === 'Enseignants' && <Enseignants />}
                {menuSelectionne === 'Emplois ddu temps' && <EmploisDuTemps />}
                {menuSelectionne === 'Notes' && <Notes />}
                {menuSelectionne === 'Calendrier Scolaire' && <CalendrierScolaire />} */}
            </div>
            <footer className="main-footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Content;
