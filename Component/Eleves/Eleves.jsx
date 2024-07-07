import React, { useState, useEffect } from 'react';
import EleveForm from './EleveForm';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTimes, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Eleves.css'; // Assurez-vous d'importer votre fichier CSS
import axios from 'axios'; // Importez axios pour effectuer des requêtes HTTP

const Eleves = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingEleve, setEditingEleve] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteEleveId, setDeleteEleveId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [eleves, setEleves] = useState([]); // Utilisez l'état pour stocker les élèves récupérés
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        // Fonction pour récupérer les élèves depuis votre API
        const fetchEleves = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/eleves'); // Remplacez par votre URL d'API
                setEleves(response.data); // Mettez à jour l'état avec les données reçues
            } catch (error) {
                console.error('Erreur lors de la récupération des élèves : ', error);
            }
        };

        fetchEleves(); // Appelez la fonction de récupération des élèves
    }, []); // Le tableau vide [] indique que ce useEffect s'exécute une seule fois après le premier rendu

    const handleOpenForm = () => {
        setShowForm(true);
        setEditingEleve(null);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingEleve(null);
    };

    const handleEdit = (eleve) => {
        setEditingEleve(eleve);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setDeleteEleveId(id);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/eleves/${deleteEleveId}`);
            setShowDeleteConfirm(false);
            setDeleteEleveId(null);
            toast.success("Suppression réussie");
            // Mettre à jour la liste des élèves après la suppression si nécessaire
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'élève : ', error);
            toast.error("Erreur lors de la suppression de l'élève");
        }
    };

    // Filtrage des élèves en fonction du terme de recherche
    const filteredEleves = eleves.filter(
        (eleve) =>
        eleve.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eleve.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eleve.classe.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eleve.ecoleOrigine.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eleve.matricule.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eleve.sexe.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eleve.dateNaissance.toLowerCase().includes(searchTerm.toLowerCase()) ||
        eleve.adresse.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
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
                                            <th>Date de Naissance</th>
                                            <th>Adresse</th>
                                            <th>Genre</th>
                                            <th>Ecole D'origine</th>
                                            <th>Classe</th>
                                            <th>Matricule</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.map((eleve) => (
                                            <tr key={eleve.id}>
                                                <td style={{ width: '10px' }}>{eleve.id}.</td>
                                                <td>{eleve.nom} {eleve.prenom}</td>
                                                <td>{eleve.dateNaissance}</td>
                                                <td>{eleve.adresse}</td>
                                                <td>{eleve.sexe}</td>
                                                <td>{eleve.ecoleOrigine}</td>
                                                <td>{eleve.classe}</td>
                                                <td>{eleve.matricule}</td>
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
};

export default Eleves;
