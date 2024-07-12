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
                        <div className="small-box bg-red">
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
                        <div className="small-box bg-blue">
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
                <div className="row">
                    <div className="col-md-12">
                        <div className="box">
                            <div className="box-header with-border">
                                <h4 className="box-title">
                                    Rapports Statistiques
                                </h4>
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="box">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p className="text-center">
                                                    <strong>taux d'absences</strong>
                                                </p>
                                                    <BarChart
                                                        width={500}
                                                        height={300}
                                                        data={data2}
                                                        margin={{
                                                            top: 5,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 2" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis
                                                            tickFormatter={(tick) => `${tick}`} // Formater les étiquettes de l'axe des ordonnées
                                                            domain={[0, 'dataMax']} // Ajuster le domaine des valeurs de l'axe des ordonnées
                                                        />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Bar dataKey="Garçon" fill="#8884d8" background={{ fill: '#eee' }} />
                                                        <Bar dataKey="fille" fill="#82ca9d" />
                                                    </BarChart>
                                            </div>
                                            <div className="col-md-8">
                                                <EleveStatistique />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                <strong>taux d'absences</strong>
                                            </p>
                                        </div>
                                        <div className="col-md-8">
                                        </div>
                                    </div>
                                    <div className="col-md-4"></div>
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
