import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import EleveStatistique from '../Statistique/Eleves/EleveStatistique';

const data1 = [
{
name: 'Séconde',
fille: 40,
Garçon: 24,
amt: 24,
},
{
name: 'Première',
fille: 30,
Garçon: 13,
amt: 22,
},
{
name: 'Terminal',
fille: 20,
Garçon: 98,
amt: 22,
}
];

const data2 = [
{
name: 'Séconde',
fille: 40,
Garçon: 24,
amt: 24,
},
{
name: 'Première',
fille: 30,
Garçon: 13,
amt: 22,
},
{
name: 'Terminal',
fille: 20,
Garçon: 98,
amt: 22,
}
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
return (
<div>
    <section className="content-header">
        <h1>
            Tableau de bord
            <small>Panneau de contrôle</small>
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
                        <p>Nombres des élèves</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-green">
                    <div className="inner">
                        <h3>50</h3>
                        <p>Nombres des Enseiignants</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-red">
                    <div className="inner">
                        <h3>3</h3>
                        <p>Classes</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-blue">
                    <div className="inner">
                        <h3>150</h3>
                        <p></p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">
                        Rapports statistiques:
                    </h3>
                </div>
                <div class="box-body">
                    <div class="row">
                        <div className='col-md-4'>
                            <p class="text-center">
                                <strong>
                                    Nombre des élèves par classe:
                                </strong>
                            </p>
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
                        </div>
                        <div className='col-md-8'>
                            <p class="text-center">
                                <strong>Nombres des élèves:</strong>
                            </p>
                            <EleveStatistique />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</div>
);
}

export default Dashboard;