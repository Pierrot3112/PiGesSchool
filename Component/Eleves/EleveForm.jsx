import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EleveForm = ({ onSave, initialData }) => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        date_naissance: '',
        adresse: '',
        informations_medicales: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                nom: initialData.nom || '',
                prenom: initialData.prenom || '',
                date_naissance: initialData.date_naissance || '',
                adresse: initialData.adresse || '',
                informations_medicales: initialData.informations_medicales || '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (initialData) {
            // await axios.put(`/api/eleves/${initialData.id}`, formData);
        } else {
            // await axios.post('/api/eleves', formData);
        }
        onSave();
        console.log(formData);
    };

    return (
        <div>
            <div>
                <h1 className="box-title">
                    {initialData ? "Modifier l'élève" : "Ajouter un élève"}
                </h1>
            </div>
            <div className="box-body">
                <div className="form-group">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Nom"
                            required
                        />
                        <input
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            placeholder="Prénom"
                            required
                        />
                        <input
                            type="date"
                            name="date_naissance"
                            value={formData.date_naissance}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="adresse"
                            value={formData.adresse}
                            onChange={handleChange}
                            placeholder="Adresse"
                            required
                        />
                        <textarea
                            name="informations_medicales"
                            value={formData.informations_medicales}
                            onChange={handleChange}
                            placeholder="Informations médicales"
                        />
                        <button type="submit">{initialData ? "Modifier" : "Ajouter"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EleveForm;
