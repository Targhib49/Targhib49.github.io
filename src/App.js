import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // CHANGE THIS TO YOUR GITHUB USERNAME
  const GITHUB_USERNAME = 'Targhib49';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userResponse.ok) throw new Error('User not found');
        const user = await userResponse.json();
        setUserData(user);

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        setRepos(reposData);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading GitHub data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error: {error}</h2>
        <p>Please check if the username is correct in App.js</p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <img 
            src={userData.avatar_url} 
            alt={userData.name} 
            className="avatar"
          />
          <h1>{userData.name || userData.login}</h1>
          <p className="bio">{userData.bio || 'No bio available'}</p>
          
          <div className="stats">
            <div className="stat">
              <span className="stat-number">{userData.public_repos}</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat">
              <span className="stat-number">{userData.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-number">{userData.following}</span>
              <span className="stat-label">Following</span>
            </div>
          </div>

          <div className="links">
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
            >
              View GitHub Profile
            </a>
            {userData.blog && (
              <a 
                href={userData.blog} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Repositories Section */}
      <main className="main">
        <div className="container">
          <h2 className="section-title">Latest Repositories</h2>
          <div className="repos-grid">
            {repos.map((repo) => (
              <div key={repo.id} className="repo-card">
                <h3 className="repo-name">{repo.name}</h3>
                <p className="repo-description">
                  {repo.description || 'No description available'}
                </p>
                
                <div className="repo-stats">
                  {repo.language && (
                    <span className="language">
                      <span className="language-dot"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="stars">⭐ {repo.stargazers_count}</span>
                  <span className="forks">🔀 {repo.forks_count}</span>
                </div>

                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  View Repository →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {userData.name || userData.login}</p>
          <p>Built with React & GitHub API</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
