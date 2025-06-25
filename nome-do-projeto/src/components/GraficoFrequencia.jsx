import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement, ArcElement, } from 'chart.js';
import Button from 'react-bootstrap/Button';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement, ArcElement);

const GraficoFrequencia = ({ labels, data }) => {
  const [tipo, setTipo] = useState('bar');

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Frequência',
        data,
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: tipo === 'horizontal' ? 'y' : 'x',
  };

  const Componente = tipo === 'pie' ? Pie : tipo === 'line' ? Line : Bar

  return (
    <>
      {tipo === 'pie' ? (
        <div style={{ height: '400px' }}>
          <Pie data={chartData} options={{ ...options, maintainAspectRatio: false }} />
        </div>
      ) : tipo === 'line' ? (
        <Line data={chartData} options={options} />
      ) : tipo === 'horizontal' ? (
        <Bar data={chartData} options={{ ...options, indexAxis: 'y' }} />
      ) : (
        <Bar data={chartData} options={options} />
      )}

      <div style={{  marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap'}}>
        <Button variant="outline-dark" onClick={() => setTipo('bar')} style={{marginRight: 5}}>Barras</Button>
        <Button variant="outline-dark" onClick={() => setTipo('horizontal')} style={{marginRight: 5}}>Horizontal</Button>
        <Button variant="outline-dark" onClick={() => setTipo('line')} style={{marginRight: 5}}>Linha</Button>
        <Button variant="outline-dark" onClick={() => setTipo('pie')} style={{marginRight: 5}}>Pizza</Button>
      </div>
    </>
  );

};

export default GraficoFrequencia;
