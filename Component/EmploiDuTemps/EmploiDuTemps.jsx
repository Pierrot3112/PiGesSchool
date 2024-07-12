import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ScheduleApp() {
  const [activeTab, setActiveTab] = useState('Créer emploi du temps');
  const [emploiDuTemps, setEmploiDuTemps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/classe');
      setClasses(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des classes', error);
    }
  };

  const handleTabClick = (classeId) => {
    setActiveTab(classeId);
    if (classeId !== 'Créer emploi du temps') {
      fetchEmploiDuTemps(classeId);
    }
  };

  const fetchEmploiDuTemps = async (classeId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/edt/${classeId}`);
      setEmploiDuTemps(response.data);
      setLoading(false);
      response.data.map(d => console.log(d.id))
    } catch (error) {
      setError("Erreur lors de la récupération de l'emploi du temps !");
      setLoading(false);
    }
  };

  return (
    <>
      <section className="content-header">
        <h1>
          Emploi du temps
          <small>Les emploi du temps</small>
        </h1>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-3">
            <Link to="/edt" className="btn btn-primary btn-block margin-bottom">
              Créer emploi du temps
            </Link>
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
              {activeTab === 'Créer emploi du temps' && (
                <h2>Créer emploi du temps</h2>
              )}
              {activeTab !== 'Créer emploi du temps' && (
                <>
                  <h2>{activeTab}</h2>
                  {loading ? (
                    <p>Chargement en cours...</p>
                  ) : error ? (
                    <p>{error}</p>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Heure</th>
                            <th>Lundi</th>
                            <th>Mardi</th>
                            <th>Mercredi</th>
                            <th>Jeudi</th>
                            <th>Vendredi</th>
                            <th>Samedi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {emploiDuTemps.map(row => (
                            <tr key={row.id}>
                              <td>{row.heure}</td>
                              <td>{row.lundi}</td>
                              <td>{row.mardi}</td>
                              <td>{row.mercredi}</td>
                              <td>{row.jeudi}</td>
                              <td>{row.vendredi}</td>
                              <td>{row.samedi}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScheduleApp;
