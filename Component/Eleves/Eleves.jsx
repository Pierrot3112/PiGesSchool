import React, { useState, useEffect } from 'react';
import EleveForm from './EleveForm';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTimes, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Eleves.css'; // Make sure to import your CSS file
import $ from 'jquery'; 


const Eleves = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingEleve, setEditingEleve] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteEleveId, setDeleteEleveId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    const handleOpenForm = () => {
        setShowForm(true);
        setEditingEleve(null);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingEleve(null);
        console.log(bouton)
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
        toast.success("suppression avec succès")
        console.log(`Eleve with id ${deleteEleveId} deleted.`);
    };

    const eleves = [
        { id: 1, nom: "Martin", prenom: "Jean", service: "Maths" },
        { id: 2, nom: "Pierrot", prenom: "Torreip", service: "DevWeb"},
        { id: 3, nom: "Robin", prenom: "Julie", service: "Sport" },
        { id: 4, nom: "Ange", prenom: "Voni", service: "Algorythm"},
        { id: 5, nom: "Faniry", prenom: "Niaina", service: "php"},
        { id: 6, nom: "Martin", prenom: "Jean", service: "Maths" },
        { id: 7, nom: "Pierrot", prenom: "Torreip", service: "DevWeb"},
        { id: 8, nom: "Robin", prenom: "Julie", service: "Sport" },
        { id: 9, nom: "Ange", prenom: "Voni", service: "Algorythm"},
        { id: 10, nom: "Faniry", prenom: "Niaina", service: "php"},
        { id: 11, nom: "Martin", prenom: "Jean", service: "Maths" },
        { id: 12, nom: "Pierrot", prenom: "Torreip", service: "DevWeb"},
        { id: 13, nom: "Robin", prenom: "Julie", service: "Sport" },
        { id: 14, nom: "Ange", prenom: "Voni", service: "Algorythm"},
        { id: 15, nom: "Faniry", prenom: "Niaina", service: "php"},
        { id: 16, nom: "Martin", prenom: "Jean", service: "Maths" },
        { id: 17, nom: "Pierrot", prenom: "Torreip", service: "DevWeb"},
        { id: 18, nom: "Robin", prenom: "Julie", service: "Sport" },
        { id: 19, nom: "Ange", prenom: "Voni", service: "Algorythm"},
        { id: 20, nom: "Faniry", prenom: "Niaina", service: "php"},
    ];
    
    const filteredEleves = eleves.filter(
        (eleve) =>
            eleve.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            eleve.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            eleve.service.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const itemsPerPage = 10;
    const pageCount = Math.ceil(filteredEleves.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredEleves.slice(offset, offset + itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

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
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pull-right hidden-xs">
                                    <button className="btn btn-primary" onClick={handleOpenForm}>
                                        <FontAwesomeIcon icon={faPlus} /> <b>Ajouter une nouvelle élève</b>
                                    </button>
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
                                        {currentItems.map((eleve) => (
                                            <tr key={eleve.id}>
                                                <td style={{ width: '10px' }}>{eleve.id}.</td>
                                                <td>{eleve.nom} {eleve.prenom}</td>
                                                <td>{eleve.service}</td>
                                                <td>
                                                    <button onClick={() => handleEdit(eleve)} title="Modifier">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                    <button onClick={() => handleDelete(eleve.id)} title="Supprimer">
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <ReactPaginate
                                    previousLabel={'Précédent'}
                                    nextLabel={'Suivant'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination'}
                                    subContainerClassName={'pages pagination'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </section>
            {showForm && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="close-button" onClick={handleCloseForm} title="Fermer">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <EleveForm initialData={editingEleve} />
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
