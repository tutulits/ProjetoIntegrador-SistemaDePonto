import React, { useEffect, useState } from 'react';
import GraficoFrequencia from '../components/GraficoFrequencia';
import '../styles/dashboard.css';

const StatCard = ({ label, value, color }) => (
  <div className={`stat-card ${color}`}>
    <h2>{value}</h2>
    <p>{label}</p>
  </div>
);

function App() {
  const [labels, setLabels] = useState([]);
  const [valores, setValores] = useState([]);

  const mockLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
  const mockValores = [10, 20, 15, 5, 30];

  useEffect(() => {
    fetch('/api/clarice')
      .then(res => res.json())
      .then(dados => {
        if (Array.isArray(dados?.dias) && Array.isArray(dados?.valores)) {
          setLabels(dados.dias.length ? dados.dias : mockLabels);
          setValores(dados.valores.length ? dados.valores : mockValores);
          console.log('✅ Dados carregados da API:', dados);
        } else {
          console.warn('❌ API inválida. Usando mock.');
          setLabels(mockLabels);
          setValores(mockValores);
        }
      })
      .catch(err => {
        console.error('❌ Erro ao buscar dados. Usando mock:', err);
        setLabels(mockLabels);
        setValores(mockValores);
      });
  }, []);

  const dadosProntos = labels.length && valores.length;

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Sistema de Ponto</h1>
      </header>

      <div className="stats">
        <StatCard label="Turmas" value="12" color="red" />
        <StatCard label="Notificações" value="+99" color="blue" />
        <StatCard label="Pontos Batidos" value="23" color="green" />
        <StatCard label="Ausências Compensadas" value="50" color="orange" />
      </div>

      <div className="main">
        <div className="box">
          <h2>Regions</h2>
          <div style={{ width: '600px', margin: '0 auto' }}>
            {dadosProntos ? (
              <GraficoFrequencia labels={labels} data={valores} />
            ) : (
              <p>Carregando gráfico...</p>
            )}
          </div>
        </div>

        <div className="box">
          <h2>Feeds</h2>
          <div style={{ width: '600px', margin: '0 auto' }}>
            {dadosProntos ? (
              <GraficoFrequencia labels={labels} data={valores} />
            ) : (
              <p>Carregando gráfico...</p>
            )}
          </div>
        </div>

        {[1, 2, 3].map((_, i) => (
          <div className="box" key={i}>
            <h2>Feeds</h2>
            <ul className="feeds">
              <li>New record, over 99 views (10 mins)</li>
              <li>Database error (15 mins)</li>
              <li>New record, over 40 users (17 mins)</li>
              <li>New comments (25 mins)</li>
              <li>Check transactions (28 mins)</li>
              <li>CPU overload (35 mins)</li>
              <li>New shares (39 mins)</li>
            </ul>
          </div>
        ))}

        <div className="box">
          <h2>General Stats</h2>
          <div className="progress-group">
            <p>New Visitors</p>
            <div className="progress-bar gray">
              <div className="progress green" style={{ width: '25%' }} />
            </div>
          </div>
          <div className="progress-group">
            <p>New Users</p>
            <div className="progress-bar gray">
              <div className="progress orange" style={{ width: '50%' }} />
            </div>
          </div>
          <div className="progress-group">
            <p>Bounce Rate</p>
            <div className="progress-bar gray">
              <div className="progress red" style={{ width: '75%' }} />
            </div>
          </div>
        </div>

        <div className="box">
          <h2>Countries</h2>
          <ul className="country-list">
            <li>United States - 65%</li>
            <li>UK - 15.7%</li>
            <li>Russia - 5.6%</li>
            <li>Spain - 2.1%</li>
            <li>India - 1.9%</li>
            <li>France - 1.5%</li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        Rodapé
      </footer>
    </div>
  );
}

export default App;
