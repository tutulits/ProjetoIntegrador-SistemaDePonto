// App.jsx
import '../styles/dashboard.css';
import React from 'react';

const StatCard = ({ label, value, color }) => {
  return (
    <div className={`stat-card ${color}`}>
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
};

function App() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Administrador</h1>
      </header>

      <div className="stats">
        <StatCard label="Messages" value="52" color="red" />
        <StatCard label="Views" value="99" color="blue" />
        <StatCard label="Shares" value="23" color="green" />
        <StatCard label="Users" value="50" color="orange" />
      </div>

      <div className="main">
        <div className="box">
          <h2>Regions</h2>
          <div className="map-placeholder">[Map Placeholder]</div>
        </div>

        <div className="box">
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

        <div className="box">
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

        <div className="box">
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

        <div className="box">
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

        <div className="box">
          <h2>General Stats</h2>
          <div className="progress-group">
            <p>New Visitors</p>
            <div className="progress-bar gray"><div className="progress green" style={{ width: '25%' }} /></div>
          </div>
          <div className="progress-group">
            <p>New Users</p>
            <div className="progress-bar gray"><div className="progress orange" style={{ width: '50%' }} /></div>
          </div>
          <div className="progress-group">
            <p>Bounce Rate</p>
            <div className="progress-bar gray"><div className="progress red" style={{ width: '75%' }} /></div>
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
Rodape
      </footer>
    </div>
  );
}

export default App;
