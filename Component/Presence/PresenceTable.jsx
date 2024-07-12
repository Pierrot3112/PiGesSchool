import React, { useState, useEffect } from "react";
import axios from 'axios';

const PresenceTable = ({ classId }) => {
  const [eleves, setEleves] = useState([]);
  const [presences, setPresences] = useState([]);

  useEffect(() => {
    if (classId) {
      fetchEleves(classId);
      fetchPresences(classId);
    }
  }, [classId]);

  const fetchEleves = async (classId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/eleves/classe/${classId}`);
      setEleves(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des élèves', error);
    }
  };

  const fetchPresences = async (classId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/presences/classe/${classId}`);
      setPresences(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des présences', error);
    }
  };

  const getPresenceDates = () => {
    const dates = new Set();
    presences.forEach(presence => dates.add(presence.date));
    return Array.from(dates).sort();
  };

  const presenceByDate = (eleveId, date) => {
    return presences.find(presence => presence.eleve.id === eleveId && presence.date === date);
  };

  return (
    <div>
      <h3>Présence pour la classe {classId}</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Matricule</th>
            <th>Nom et Prénoms</th>
            {getPresenceDates().map(date => (
              <th key={date}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {eleves.map(eleve => (
            <tr key={eleve.id}>
              <td>{eleve.matricule}</td>
              <td>{eleve.nom} {eleve.prenoms}</td>
              {getPresenceDates().map(date => (
                <td key={date}>
                  {presenceByDate(eleve.id, date) ? 'Présent' : 'Absent'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PresenceTable;
