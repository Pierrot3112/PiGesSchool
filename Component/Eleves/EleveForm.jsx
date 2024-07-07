import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EleveForm = ({ onSave, initialData }) => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        dateNaissance: '',
        adresse: '',
        sexe: '',
        ecoleOrigine: '',
        classe: '',
        matricule: '',
        nomPere: '',
        professionPere: '',
        nomMere: '',
        professionMere: '',
        contactParent: '',
        adresseParent: '',
        // imageEleve: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                nom: initialData.nom || '',
                prenom: initialData.prenom || '',
                dateNaissance: initialData.dateNaissance || '',
                adresse: initialData.adresse || '',
                sexe: initialData.sexe || '',
                ecoleOrigine: initialData.ecoleOrigine || '',
                classe: initialData.classe || '',
                matricule: initialData.matricule || '',
                nomPere: initialData.nomPere || '',
                professionPere: initialData.professionPere || '',
                nomMere: initialData.nomMere || '',
                professionMere: initialData.professionMere || '',
                contactParent: initialData.contactParent || '',
                adresseParent: initialData.adresseParent || '',
                imageEleve: initialData.imageEleve || '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });

        console.log('Form data:', formData);

        try {
            let response;
            if (initialData && initialData.id) {
                const url = `http://localhost:8080/api/eleves/${initialData.id}`;
                response = await axios.put(url, formDataToSend, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            } else {
                const url = 'http://localhost:8080/api/eleves';
                response = await axios.post(url, formDataToSend, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }

            if (response.status === 200 || response.status === 201) {
                console.log('Response data:', response.data);
                toast.success("Opération réussie");
                onSave(); // Appeler la fonction onSave ici
            } else {
                console.error('Error:', response.statusText);
                toast.error("Erreur lors de l'enregistrement");
            }
        } catch (error) {
            console.error(error);
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
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                name="dateNaissance"
                                value={formData.dateNaissance}
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
                                name="ecoleOrigine"
                                value={formData.ecoleOrigine}
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
                                name="nomPere"
                                value={formData.nomPere}
                                onChange={handleChange}
                                placeholder="Nom du père"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="professionPere"
                                value={formData.professionPere}
                                onChange={handleChange}
                                placeholder="Profession du père"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="nomMere"
                                value={formData.nomMere}
                                onChange={handleChange}
                                placeholder="Nom de la mère"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="professionMere"
                                value={formData.professionMere}
                                onChange={handleChange}
                                placeholder="Profession de la mère"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="contactParent"
                                value={formData.contactParent}
                                onChange={handleChange}
                                placeholder="Contact du parent"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="adresseParent"
                                value={formData.adresseParent}
                                onChange={handleChange}
                                placeholder="Adresse du parent"
                            />
                        </div>
                        {/* <div className="form-group">
                            <input
                                type="file"
                                className="form-control"
                                name="imageEleve"
                                onChange={handleChange}
                                placeholder="URL de l'image de l'élève"
                            />
                        </div> */}
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
