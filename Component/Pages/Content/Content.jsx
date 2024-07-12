import React, { useState } from 'react';

import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import Dashboard from '../../Dashboard/Dashboard';
import Eleves from '../../Eleves/Eleves';
import Enseignants from '../../Enseignants/Enseignants';
import EmploisDuTemps from '../../EmploiDuTemps/EmploiDuTemps';
import Notes from '../../Notes/Notes';
import Presence from '../../Presence/Presence';
import Premiere from '../../Classes/Premiere/Premiere';
import Second from '../../Classes/Second/Second';
import Terminal from '../../Classes/Terminal/Terminal'; // Assurez-vous d'importer Terminal correctement

const Content = () => {
    const [menuSelectionne, setMenuSelectionne] = useState('Tableau de bord');
    const [sousMenuSelectionne, setSousMenuSelectionne] = useState(null);

    return (
        <div className="wrapper">
            <header className="main-header">
                <NavBar />
            </header>
            <aside className="main-sidebar">
                <SideBar setMenuSelectionne={setMenuSelectionne} setSousMenuSelectionne={setSousMenuSelectionne} />
            </aside>
            <div className="content-wrapper">
                {/* Contenu dynamique en fonction du menu sélectionné */}
                {menuSelectionne === 'Tableau de bord' && <Dashboard />}
                {menuSelectionne === 'Elèves' && <Eleves />}
                {menuSelectionne === 'Enseignants' && <Enseignants />}
                {menuSelectionne === 'Emplois ddu temps' && <EmploisDuTemps />}
                {menuSelectionne === 'Notes' && <Notes />}
                {menuSelectionne === 'Calendrier Scolaire' && <CalendrierScolaire />}
                {menuSelectionne === 'Presence' && <Presence />}
                {menuSelectionne === 'Classe' && sousMenuSelectionne === 'Premiere' && <Premiere />}
                {menuSelectionne === 'Classe' && sousMenuSelectionne === 'Terminal' && <Terminal />}
                {menuSelectionne === 'Classe' && sousMenuSelectionne === 'Seconde' && <Second />}
            </div>
            <footer className="main-footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Content;
