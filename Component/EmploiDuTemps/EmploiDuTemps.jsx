import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import CreateEdt from './CreateEdt';


function ScheduleApp() {
  const [activeTab, setActiveTab] = useState('Créer emploi du temps');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
              Creer emploi du temps
            </Link>
            <div className="box box-solid">
              <div className="box-header with-border">
                <h3 className="box-title">Classes</h3>
              </div>
              <div className="box-body no-padding">
                <ul className="nav nav-pills nav-stacked">
                  <li className={activeTab === 'Terminal' ? 'active' : ''}>
                    <a href="#" onClick={() => handleTabClick('Terminal')}>
                      Terminal
                    </a>
                  </li>
                  <li className={activeTab === 'Première' ? 'active' : ''}>
                    <a href="#" onClick={() => handleTabClick('Première')}>
                      Première
                    </a>
                  </li>
                  <li className={activeTab === 'Seconde' ? 'active' : ''}>
                    <a href="#" onClick={() => handleTabClick('Seconde')}>
                      Seconde
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="box box-info">
              {activeTab === 'Créer emploi du temps' && (
                <>
                  <h2>Créer emploi du temps</h2>
                  <p>
                    Cliquez sur le bouton "Créer emploi du temps" pour accéder au formulaire
                    de création.
                  </p>
                </>
              )}
              {activeTab === 'Terminal' && (
                <>
                  <h2>Terminal</h2>
                  {renderTimeTable()}
                </>
              )}
              {activeTab === 'Première' && (
                <>
                  <h2>Première</h2>
                  {renderTimeTable()}
                </>
              )}
              {activeTab === 'Seconde' && (
                <>
                  <h2>Seconde</h2>
                  {renderTimeTable()}
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