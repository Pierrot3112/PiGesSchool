import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const EleveForm = ({ onSave, initialData }) => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        date_naissance: '',
        adresse: '',
        sexe: '',
        ecole_origine: '',
        classe: '',
        matricule: '',
        nom_pere: '',
        profession_pere: '',
        nom_mere: '',
        profession_mere: '',
        contact_parent: '',
        adresse_parent: '',
        image_eleve: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                nom: initialData.nom || '',
                prenom: initialData.prenom || '',
                date_naissance: initialData.date_naissance || '',
                adresse: initialData.adresse || '',
                sexe: initialData.sexe || '',
                ecole_origine: initialData.ecole_origine || '',
                classe: initialData.classe || '',
                matricule: initialData.matricule || '',
                nom_pere: initialData.nom_pere || '',
                profession_pere: initialData.profession_pere || '',
                nom_mere: initialData.nom_mere || '',
                profession_mere: initialData.profession_mere || '',
                contact_parent: initialData.contact_parent || '',
                adresse_parent: initialData.adresse_parent || '',
                image_eleve: initialData.image_eleve || '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (initialData) {
                // await axios.put(`/api/eleves/${initialData.id}`, formData);
                toast.success("Modification avec succès");
            } else {
                // await axios.post('/api/eleves', formData);
                toast.success("Enregistrement avec succès");
            }
            onSave();
            console.log(formData);
        } catch (error) {
            toast.error("Erreur lors de l'enregistrement");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1 className="text-center mb-4">
                        {initialData ? "Modifier l'élève" : "Ajouter un élève"}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                placeholder="Nom"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}
                                placeholder="Prénom"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control"
                                name="date_naissance"
                                value={formData.date_naissance}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="adresse"
                                value={formData.adresse}
                                onChange={handleChange}
                                placeholder="Adresse"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="sexe"
                                value={formData.sexe}
                                onChange={handleChange}
                                placeholder="Sexe"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="ecole_origine"
                                value={formData.ecole_origine}
                                onChange={handleChange}
                                placeholder="École d'origine"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="classe"
                                value={formData.classe}
                                onChange={handleChange}
                                placeholder="Classe"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="matricule"
                                value={formData.matricule}
                                onChange={handleChange}
                                placeholder="Matricule"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="nom_pere"
                                value={formData.nom_pere}
                                onChange={handleChange}
                                placeholder="Nom du père"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="profession_pere"
                                value={formData.profession_pere}
                                onChange={handleChange}
                                placeholder="Profession du père"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="nom_mere"
                                value={formData.nom_mere}
                                onChange={handleChange}
                                placeholder="Nom de la mère"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="profession_mere"
                                value={formData.profession_mere}
                                onChange={handleChange}
                                placeholder="Profession de la mère"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="contact_parent"
                                value={formData.contact_parent}
                                onChange={handleChange}
                                placeholder="Contact du parent"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="adresse_parent"
                                value={formData.adresse_parent}
                                onChange={handleChange}
                                placeholder="Adresse du parent"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="fiile"
                                className="form-control"
                                name="image_eleve"
                                value={formData.image_eleve}
                                onChange={handleChange}
                                placeholder="URL de l'image de l'élève"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {initialData ? "Modifier" : "Ajouter"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EleveForm;
