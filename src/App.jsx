import './App.css';

function App() {
  return (
    <div className="portfolio-root">
      {/* Home Section */}
      <section className="home-section">
        <div className="intro-content">
          <img
            src="/name.jpeg"
            alt="Profile"
            className="profile-pic"
          />
          <div>
            <h1>Hi, I'm Akshu Grewal</h1>
            <h2>Student & AI/ML Enthusiast</h2>
            <p>
              Passionate about building intelligent systems and exploring the world of Artificial Intelligence and Machine Learning.
            </p>
            <a href="#contact" className="cta-btn">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div>
            <h3>Education</h3>
            <p>B.Tech in Computer Science and Engineering (Artificial Intelligence), Gurugram University, Gurugram, Haryana (2023-2026)</p>
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>Python</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Multi Agent System</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h3>Interests</h3>
            <p>
              I love working on AI and ML projects, participating in hackathons (Vibe Coding Hackathons etc.), and sharing knowledge through social media and open-source contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/download.jpg" alt="Project 1" />
            <h3>Sentiment Analysis</h3>
            <p>Developed a sentiment analysis model using NLP techniques and deep learning models.</p>
            <a href="https://github.com/Akshu24Tech/Sentiment_Analysis.git" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <img src="/images.jpg" alt="Project 2" />
            <h3>Image Classifier</h3>
            <p>Built an image classification model with TensorFlow to recognize objects in real-time.</p>
            <a href="https://github.com/Akshu24Tech/Images-classifier.git" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <img src="/download (1).jpg" alt="Project 3" />
            <h3>AI Agent Research Assistant</h3>
            <p>Developed an AI agent using multi-agent system to solve a problem.</p>
            <a href="https://github.com/Akshu24Tech/AI_Agent_research.git" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="mailto:akshug2004@gmail.com">akshug2004@gmail.com</a>
          <a href="https://github.com/Akshu24Tech" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/akshu-grewal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default App;
