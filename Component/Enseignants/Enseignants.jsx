import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTimes, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
const data = [
    { id: 1, nom: "Pierrot", prenom: "Torreip", genre: "homme", adresse: "bira", telephone: "0384235252", email: "pierrottorreip3112@gmail.com", specialite: "mathematique" },
    { id: 2, nom: "Lefevre", prenom: "Marie", genre: "femme", adresse: "marseille", telephone: "0384235233", email: "marielefevre3112@gmail.com", specialite: "physique" },
    { id: 3, nom: "Durand", prenom: "Luc", genre: "homme", adresse: "lyon", telephone: "0384235244", email: "lucdurand3112@gmail.com", specialite: "chimie" },
    { id: 4, nom: "Moreau", prenom: "Julie", genre: "femme", adresse: "paris", telephone: "0384235255", email: "juliemoreau3112@gmail.com", specialite: "informatique" },
    { id: 5, nom: "Simon", prenom: "Paul", genre: "homme", adresse: "nantes", telephone: "0384235266", email: "paulsimon3112@gmail.com", specialite: "biologie" },
    { id: 6, nom: "Michel", prenom: "Sophie", genre: "femme", adresse: "bordeaux", telephone: "0384235277", email: "sophiemichel3112@gmail.com", specialite: "geographie" },
    { id: 7, nom: "Garcia", prenom: "Antoine", genre: "homme", adresse: "strasbourg", telephone: "0384235288", email: "antoinegarcia3112@gmail.com", specialite: "histoire" },
    { id: 8, nom: "Martin", prenom: "Claire", genre: "femme", adresse: "lille", telephone: "0384235299", email: "clairemartin3112@gmail.com", specialite: "philosophie" },
    { id: 9, nom: "Bernard", prenom: "Hugo", genre: "homme", adresse: "rennes", telephone: "0384235300", email: "hugobernard3112@gmail.com", specialite: "litterature" },
    { id: 10, nom: "Dubois", prenom: "Elise", genre: "femme", adresse: "toulouse", telephone: "0384235311", email: "elisedubois3112@gmail.com", specialite: "arts plastiques" },
    { id: 11, nom: "Thomas", prenom: "Lucas", genre: "homme", adresse: "nice", telephone: "0384235322", email: "lucasthomas3112@gmail.com", specialite: "musique" },
    { id: 12, nom: "Robert", prenom: "Emma", genre: "femme", adresse: "toulon", telephone: "0384235333", email: "emmarobert3112@gmail.com", specialite: "education physique" },
    { id: 13, nom: "Petit", prenom: "Nathan", genre: "homme", adresse: "saint-etienne", telephone: "0384235344", email: "nathanpetit3112@gmail.com", specialite: "technologie" },
    { id: 14, nom: "Richard", prenom: "Alice", genre: "femme", adresse: "grenoble", telephone: "0384235355", email: "alicerichard3112@gmail.com", specialite: "sciences économiques" },
    { id: 15, nom: "Durant", prenom: "Leo", genre: "homme", adresse: "dijon", telephone: "0384235366", email: "leodurant3112@gmail.com", specialite: "sciences politiques" },
    { id: 16, nom: "Lemoine", prenom: "Chloe", genre: "femme", adresse: "clermont-ferrand", telephone: "0384235377", email: "chloelemoine3112@gmail.com", specialite: "sciences de la terre" },
    { id: 17, nom: "Roux", prenom: "Ethan", genre: "homme", adresse: "le havre", telephone: "0384235388", email: "ethanroux3112@gmail.com", specialite: "sciences sociales" },
    { id: 18, nom: "Blanc", prenom: "Manon", genre: "femme", adresse: "metz", telephone: "0384235399", email: "manonblanc3112@gmail.com", specialite: "psychologie" },
    { id: 19, nom: "Fournier", prenom: "Thomas", genre: "homme", adresse: "orleans", telephone: "0384235400", email: "thomasfournier3112@gmail.com", specialite: "philosophie" },
    { id: 20, nom: "Girard", prenom: "Camille", genre: "femme", adresse: "rouen", telephone: "0384235411", email: "camillegirard3112@gmail.com", specialite: "linguistique" }
];

const ITEMS_PER_PAGE = 10;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button onClick={handlePrevClick} disabled={currentPage === 1}>Précédent</button>
            <span>Page {currentPage} sur {totalPages}</span>
            <button onClick={handleNextClick} disabled={currentPage === totalPages}>Suivant</button>
        </div>
    );
};

const Enseignants = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const selectedPersons = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleEdit = (person) => {
        // Implémentez votre logique d'édition ici
        toast.info(`Edit: ${person.nom} ${person.prenom}`);
    };

    const handleDelete = (person) => {
        // Implémentez votre logique de suppression ici
        toast.error(`Delete: ${person.nom} ${person.prenom}`);
    };

    return (
        <>
            <section className="content-header">
                <h1>
                    GESTION DES ENSEIGNANTS
                    <small>Interfaces de gestions</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="/enseignants">Enseignant</a></li>
                    <li><a href="/enseignants/ajouter">Listes</a></li>
                </ol>
            </section>
            <section className="content">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Liste des enseignants</h3>
                                <div className="box-tools">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="table_search"
                                            style={{ width: '150px' }}
                                            placeholder="Rechercher..."
                                            className="form-control input-sm pull-right"
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-default mt-5">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="pull-right hidden-xs">
                                    <button className="btn btn-primary">
                                        <FontAwesomeIcon icon={faPlus} /> <b>Ajouter un Enseignant</b>
                                    </button>
                                </div>
                            </div>
                            <div className="box-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nom et prénoms</th>
                                            <th>Genre</th>
                                            <th>Adresse</th>
                                            <th>Téléphone</th>
                                            <th>Email</th>
                                            <th>Specialité</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedPersons.map((person, index) => (
                                            <tr
                                                key={person.id}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}
                                                className="person-item"
                                            >
                                                <td>{person.id}</td>
                                                <td>{person.nom} {person.prenom}</td>
                                                <td>{person.genre}</td>
                                                <td>{person.adresse}</td>
                                                <td>{person.telephone}</td>
                                                <td>{person.email}</td>
                                                <td>{person.specialite}</td>
                                                <td>
                                                    {hoveredIndex === index && (
                                                        <div className="buttons-b">
                                                            <button onClick={() => handleEdit(person)} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faEdit} />
                                                            </button>
                                                            <button onClick={() => handleDelete(person)} className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrashAlt} /> 
                                                            </button>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Enseignants;