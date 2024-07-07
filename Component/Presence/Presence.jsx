import React, { useState, useEffect } from "react";

const Presence = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
               <div className="row">
                <div style={{height: '100%', width: '30%'}}>
                    <i className="fa fa-clock-o"></i> 
                    </div>
                    <div style={{height: '100%', width: '70%'}}>
                        {currentDateTime.toLocaleDateString()} <br /> {currentDateTime.toLocaleTimeString()}
                    </div>
               </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">Classe de Première :</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Presence;
