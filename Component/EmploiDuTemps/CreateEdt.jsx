import React, { useState } from "react";
import Footer from "../Pages/Footer/Footer";
import axios from 'axios';

const CreateEdt = () => {
    const heures = ["08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00", "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"];
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    const [emploiDuTemps, setEmploiDuTemps] = useState(
        Array(heures.length).fill().map(() => Array(jours.length).fill(''))
    );

    const handleSelectChange = (heureIndex, jourIndex, event) => {
        const newEmploiDuTemps = emploiDuTemps.map((row, i) =>
            row.map((cell, j) =>
                (i === heureIndex && j === jourIndex) ? event.target.value : cell
            )
        );
        setEmploiDuTemps(newEmploiDuTemps);
    };

    const handleSubmit = () => {
        axios.post('http://localhost:8080/api/edt/add', emploiDuTemps)
            .then(response => {
                console.log('Emploi du temps enregistré avec succès:', response.data);
            })
            .catch(error => {
                console.error('Erreur lors de l\'enregistrement de l\'emploi du temps:', error);
            });
    };

    return (
        <>
            <section className="content-header">
                <h1>
                    CREATION DE L'EMPLOI DU TEMPS:
                    <small>Classe de Première</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="/*">↞</a></li>
                </ol>
            </section>
            <br />
            <section className="content">
                <div className="col-md-12">
                    <div className="box box-info">
                        <form onSubmit={handleSubmit}>
                            <div className="box-body">
                                <div className="form-group">
                                    <label htmlFor="classe">Choisir la classe:</label>
                                    <select name="classe" id="classe" className="form-control">
                                        <option value="Terminale">Terminale</option>
                                        <option value="Premiere">Premiere</option>
                                        <option value="Seconde">Seconde</option>
                                    </select>
                                </div>
                                <br />
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Heure</th>
                                            {jours.map(jour => <th key={jour}>{jour}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {heures.map((heure, heureIndex) => (
                                            <tr key={heure}>
                                                <td>{heure}</td>
                                                {jours.map((jour, jourIndex) => (
                                                    <td key={jour}>
                                                        <select value={emploiDuTemps[heureIndex][jourIndex]} 
                                                        onChange={(event) =>
                                                         handleSelectChange(heureIndex, jourIndex, event)}
                                                         className="form-control">
                                                            <option value="">---</option>
                                                            <option value="Mathématiques">Mathématiques</option>
                                                            <option value="Physique">Physique</option>
                                                            <option value="Chimie">Chimie</option>
                                                            <option value="Histoire">Histoire</option>
                                                            <option value="Géographie">Géographie</option>
                                                        </select>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="box-footer clearfix">
                                <button onClick={handleSubmit} className="btn btn-primary btn-block">Valider l'emploi du temps</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CreateEdt