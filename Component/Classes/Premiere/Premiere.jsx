import React from 'react';

const Premiere = () => {
    return (
        <>
            <section className="content-header">
                <h1>Classe de Première</h1>
            </section>
            <section className="content">
               
                <div className="row">
                    <div className="col-md-3">
                        <div className="box box-solid">
                            <div className="box-header with-border">
                                <h4 className="box-title">
                                    Séries
                                </h4>
                            </div>
                            <div className="box-body">
                                <div className="external-events">
                                    <div className="external-event bg-green">
                                        Litetraire
                                    </div>
                                    <div className="external-event bg-aqua">
                                        Scientifiques
                                    </div>
                                    <div className="external-event bg-yellow">
                                        OSE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="box box-info">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="box-header">
                                        <h3 className="box-title">
                                            Test
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="box box-default">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">
                                                Statistique
                                            </h3>
                                        </div>
                                        <div className="box-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p className="text-center">
                                                        <strong>Goal Completion</strong>
                                                    </p>
                                                    <div className="progress-group">
                                                        <span className="progress-text">Add Products to Cart</span>
                                                        <span className="progress-number"><b>160</b>/200</span>
                                                        <div className="progress sm">
                                                            <div className="progress-bar progress-bar-aqua" style={{ width: '80%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-group">
                                                        <span className="progress-text">Complete Purchase</span>
                                                        <span className="progress-number"><b>310</b>/400</span>
                                                        <div className="progress sm">
                                                            <div className="progress-bar progress-bar-red" style={{ width: '80%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-group">
                                                        <span className="progress-text">Visit Premium Page</span>
                                                        <span className="progress-number"><b>480</b>/800</span>
                                                        <div className="progress sm">
                                                            <div className="progress-bar progress-bar-green" style={{ width: '80%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-group">
                                                        <span className="progress-text">Send Inquiries</span>
                                                        <span className="progress-number"><b>250</b>/500</span>
                                                        <div className="progress sm">
                                                            <div className="progress-bar progress-bar-yellow" style={{ width: '80%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Premiere;

<BarChart width={500} height={300} data={data2} margin={{ top: 5, right: 30, left: 20,
                                    bottom: 5, }}>
                                    <CartesianGrid strokeDasharray="3 2" />
                                    <XAxis dataKey="name" />
                                    <YAxis tickFormatter={(tick)=> `${tick}`} // Formater les étiquettes de l'axe des
                                        ordonnées
                                        domain={[0, 'dataMax']} // Ajuster le domaine des valeurs de l'axe des ordonnées
                                        />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="Garçon" fill="#8884d8" background={{ fill: '#eee' }} />
                                        <Bar dataKey="fille" fill="#82ca9d" />
                                </BarChart>