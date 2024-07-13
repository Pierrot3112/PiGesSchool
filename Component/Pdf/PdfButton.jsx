import React from 'react';
import axios from 'axios';

const PdfButton = () => {
    const handlePrint = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/pdf/generate', {
                responseType: 'blob',
            });

            const file = new Blob([response.data], { type: 'application/pdf' });
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        } catch (error) {
            console.error('Erreur lors de la génération du PDF', error);
        }
    };

    return (
        <button onClick={handlePrint}>
            Imprimer
        </button>
    );
};

export default PdfButton;
