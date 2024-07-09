import React, { useState, useEffect } from "react";
import Footer from "../Pages/Footer/Footer";
import axios from 'axios';

const CreateEdt = () => {
    const heures = ["08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00", "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"];
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const [matieres, setMatieres] = useState([]);
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [emploiDuTemps, setEmploiDuTemps] = useState(
        Array.from({ length: heures.length }, () =>
            Array.from({ length: jours.length }, () => ({ emploiDuTemps: '', classe: { id: null } }))
        )
    );

    const handleSelectChange = (heureIndex, jourIndex, event) => {
        const newEmploiDuTemps = emploiDuTemps.map((row, i) =>
            row.map((cell, j) => {
                if (i === heureIndex && j === jourIndex) {
                    return { ...cell, emploiDuTemps: event.target.value };
                } else {
                    return cell;
                }
            })
        );
        setEmploiDuTemps(newEmploiDuTemps);
    };

    const handleClasseChange = (heureIndex, event) => {
        const newEmploiDuTemps = emploiDuTemps.map((row, i) =>
            row.map((cell, j) => {
                if (i === heureIndex) {
                    return { ...cell, classe: { id: event.target.value } };
                } else {
                    return cell;
                }
            })
        );
        setEmploiDuTemps(newEmploiDuTemps);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = emploiDuTemps.flat().filter(item => item.emploiDuTemps !== '' && item.classe.id !== null);
        axios.post('http://localhost:8080/api/edt', dataToSend)
            .then(response => {
                console.log('Emploi du temps enregistré avec succès:', response.data);
            })
            .catch(error => {
                console.error('Erreur lors de l\'enregistrement de l\'emploi du temps:', error);
            });
    };

    useEffect(() => {
        axios.get('http://localhost:8080/api/matiere')
            .then(response => {
                setMatieres(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError("Erreur lors de la récupération des matières !");
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/classe');
                setClasses(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des classes:', error);
            }
        };

        fetchClasses();
    }, []);

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
                                    <select name="classe" id="classe" className="form-control" onChange={(e) => handleClasseChange(0, e)}>
                                        <option value="">Sélectionnez une classe</option>
                                        {classes.map(classe => (
                                            <option key={classe.id} value={classe.id}>{classe.nom}</option>
                                        ))}
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
                                                        {loading ? (
                                                            <p>Loading...</p>
                                                        ) : error ? (
                                                            <p>{error}</p>
                                                        ) : (
                                                            emploiDuTemps[heureIndex] && emploiDuTemps[heureIndex][jourIndex] && (
                                                                <select
                                                                    value={emploiDuTemps[heureIndex][jourIndex].emploiDuTemps}
                                                                    onChange={(event) => handleSelectChange(heureIndex, jourIndex, event)}
                                                                    className="form-control"
                                                                >
                                                                    <option value="">---</option>
                                                                    {matieres.map(matiere => (
                                                                        <option key={matiere.id} value={matiere.id}>{matiere.nom}</option>
                                                                    ))}
                                                                </select>
                                                            )
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="box-footer clearfix">
                                <button type="submit" className="btn btn-primary btn-block">Valider l'emploi du temps</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CreateEdt;
