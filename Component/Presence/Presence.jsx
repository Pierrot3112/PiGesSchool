import React, { useState, useEffect } from "react";
import axios from 'axios';
import PresenceTable from './PresenceTable'; // Assurez-vous que le chemin du fichier est correct
import BarChart from './Barchart'; // Importer le nouveau composant BarChart

const Presence = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [classes, setClasses] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [activeContent, setActiveContent] = useState(null);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/classe');
      setClasses(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des classes', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTabClick = (classeId) => {
    setActiveTab(classeId);
    const selectedClass = classes.find(classe => classe.id === classeId);
    setActiveContent(selectedClass);
  };

  return (
    <>
      <section className="content-header">
        <h1>
          Presence
          <small>Controle de presence</small>
        </h1>
        <ol className="breadcrumb">
          <li><a href="#"><i></i>Suivi</a></li>
          <li><a href="#"><i></i>Présence</a></li>
        </ol>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-3">
            <div className="btn btn-primary btn-block margin-bottom">
              <h1>
                <b>
                  {currentDateTime.toLocaleDateString()} <br /> {currentDateTime.toLocaleTimeString()}
                </b>
              </h1>
            </div>
            <div className="box box-solid">
              <div className="box-header with-border">
                <h3 className="box-title">Classes</h3>
              </div>
              <div className="box-body no-padding">
                <ul className="nav nav-pills nav-stacked">
                  {classes.map(classe => (
                    <li key={classe.id} className={activeTab === classe.id ? 'active' : ''}>
                      <a href="#" onClick={() => handleTabClick(classe.id)}>
                        {classe.nom}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="box box-info">
              <div className="box-header with-border">
                <h3 className="box-title">
                  {activeContent ? `Présence sur la classe ${activeContent.nom}` : 'Taux d\'absence'}
                </h3>
              </div>
              <div className="box-body">
                {activeContent ? (
                  <PresenceTable classId={activeContent.id} />
                ) : (
                  <BarChart /> 
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Presence;
