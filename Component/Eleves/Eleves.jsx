import React, { useState } from 'react';
import EleveForm from './EleveForm';

const Eleves = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingEleve, setEditingEleve] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteEleveId, setDeleteEleveId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleOpenForm = () => {
        setShowForm(true);
        setEditingEleve(null);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingEleve(null);
        console.log("modal closed")
    };

    const handleEdit = (eleve) => {
        setEditingEleve(eleve);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setDeleteEleveId(id);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        // Suppression de l'élève par ID
        // await axios.delete(`/api/eleves/${deleteEleveId}`);
        setShowDeleteConfirm(false);
        setDeleteEleveId(null);
        console.log(`Eleve with id ${deleteEleveId} deleted.`);
    };

    const eleves = [
        { id: 1, nom: "Dupont", prenom: "Jean", service: "Maths" },
        { id: 2, nom: "Durand", prenom: "Marie", service: "Sciences" },
        // Ajouter d'autres élèves ici...
    ];

    const filteredEleves = eleves.filter(
        (eleve) =>
            eleve.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            eleve.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            eleve.service.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <section className="content-header">
                <h1>
                    GESTION DES ELEVES:
                    <small>Panneau de contrôle/</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-note"></i>Listes</a></li>
                    <li><a href="#">Elèves</a></li>
                    <li className="active">Premières S</li>
                </ol>
            </section>
            <br />
            <section className="content">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="title">
                                    Tableau d'affichage d'une classe
                                </h3>
                                <div className="box-tools">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="table_search"
                                            style={{ width: '150px' }}
                                            placeholder="Rechercher..."
                                            className="form-control input-sm pull-right"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-default">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pull-right hidden-xs">
                                    <button className="btn btn-primary" onClick={handleOpenForm}><b>Ajouter une nouvelle élève</b></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '10px' }}>#</th>
                                            <th>Nom et prénoms</th>
                                            <th>Service</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredEleves.map((eleve) => (
                                            <tr key={eleve.id}>
                                                <td style={{ width: '10px' }}>{eleve.id}.</td>
                                                <td>{eleve.nom} {eleve.prenom}</td>
                                                <td>{eleve.service}</td>
                                                <td>
                                                    <button onClick={() => handleEdit(eleve)} title="Modifier">
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button onClick={() => handleDelete(eleve.id)} title="Supprimer">
                                                        <i className="fa fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </section>
            {showForm && (
                <div className="modal">
                    <div className="modal-content">
                        <div>
                            <button className="close-button" onClick={handleCloseForm} title="Fermer">
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                        <EleveForm onSave={handleCloseForm} initialData={editingEleve} />
                    </div>
                </div>
            )}
            {showDeleteConfirm && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Êtes-vous sûr de vouloir supprimer cet élève ?</p>
                        <button onClick={confirmDelete}>Oui</button>
                        <button onClick={() => setShowDeleteConfirm(false)}>Non</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Eleves;
