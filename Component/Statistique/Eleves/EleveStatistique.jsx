import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Couleurs pour chaque segment du PieChart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Données statiques
const data = [
  { name: 'Seconde', value: 50 },
  { name: 'Première', value: 400 },
  { name: 'Terminale', value: 100 }
];

const EleveStatistique = () => {
  return (
    <ResponsiveContainer width="70%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EleveStatistique;
