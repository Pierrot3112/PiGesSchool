import React from 'react'

const Dashboard = () =>{
    return(
        <div>
            <section className="content-header">
                <h1>
                    Tableau de bord
                    <small>Panneau d contrôle</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-home"></i> Accueil</a></li>
                    <li className="active">Tableau de bord</li>
                </ol>
            </section>
            <section className="content">
               <div className="row">
                    <div className="col-lg-3 col-xs-6">
                        <div className="small-box bg-aqua">
                            <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-bag"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6">
                        <div className="small-box bg-aqua">
                            <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-bag"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6">
                        <div className="small-box bg-aqua">
                            <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-bag"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xs-6">
                        <div className="small-box bg-aqua">
                            <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-bag"></i>
                            </div>
                            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    )
}

export default Dashboard