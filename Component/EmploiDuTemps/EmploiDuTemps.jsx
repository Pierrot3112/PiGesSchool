import React, { useState } from 'react';

const EmploiDuTemps = () => {
    const [activeClass, setActiveClass] = useState('Terminale');
    const [isCreating, setIsCreating] = useState(false);
    const [emploisDuTemps, setEmploisDuTemps] = useState([]);

    const handleClassClick = (classe) => {
        setActiveClass(classe);
    };

    const handleCreateClick = () => {
        setIsCreating(true);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newEmploi = event.target.elements.emploi.value;
        setEmploisDuTemps([...emploisDuTemps, newEmploi]);
        setIsCreating(false);
    };

    return (
        <>
            <section className="content-header">
                <h1>
                    EMPLOI DU TEMPS
                    <small></small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa">Emploi du temps</i></a></li>
                    <li><a href="#">Première S</a></li>
                    <li className="active">Section 1</li>
                </ol>
            </section>
            <br />
            <section className="content">
                <div className="row">
                    <div className="col-md-3">
                        <button onClick={handleCreateClick} className="btn btn-primary btn-block margin-bottom">
                            Créer emploi du temps
                        </button>
                        <div className="box box-solid">
                            <div className="box-header with-border">
                                <h3 className="box-title">
                                    Classe
                                </h3>
                            </div>
                            <div className="box-body no-padding">
                                {isCreating ? (
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="emploi">Nom de l'emploi du temps :</label>
                                            <input type="text" id="emploi" name="emploi" className="form-control" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Valider</button>
                                    </form>
                                ) : (
                                    <ul className="nav nav-pills nav-stacked">
                                        <li className={activeClass === 'Terminale' ? 'active' : ''}>
                                            <a href="#" onClick={() => handleClassClick('Terminale')}>Terminale</a>
                                        </li>
                                        <li className={activeClass === 'Première' ? 'active' : ''}>
                                            <a href="#" onClick={() => handleClassClick('Première')}>Première</a>
                                        </li>
                                        <li className={activeClass === 'Seconde' ? 'active' : ''}>
                                            <a href="#" onClick={() => handleClassClick('Seconde')}>
                                                <i className="fa fa-filter"></i> Seconde
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Liste des emplois du temps</h3>
                            </div>
                            <div className="box-body">
                                {emploisDuTemps.length === 0 ? (
                                    <p>Aucun emploi du temps créé pour l'instant.</p>
                                ) : (
                                    <ul>
                                        {emploisDuTemps.map((emploi, index) => (
                                            <li key={index}>{emploi}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EmploiDuTemps;
