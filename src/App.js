import './App.css';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-800">Kamaleshwar Parnandhi</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-500">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-500">About</a>
              <a href="#Hobbits" className="text-gray-600 hover:text-blue-500">Hobbits</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-500">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-500">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 pt-16">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">నమస్తే, Welcome My Friends <span className="text-yellow-300"><br></br>I'm Kamaleshwar Parnandhi</span></h1>
          <p className="text-xl md:text-2xl mb-8"> Python Full Stack Developer</p>
        </div>
      </section>

      {/* About Section */}
<section 
  id="about" 
  className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500 py-20"
>
  <div className="text-center text-white max-w-4xl px-6">
    <h2 className="text-4xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
      About Me
    </h2>
    
    <p className="text-lg md:text-xl mb-6 leading-relaxed">
      My name is <span className="font-semibold text-yellow-300">P. Kamaleshwar</span>, and I’m from Anantapur.  
      I completed my graduation at <span className="font-semibold">Sri Venkateswara Degree & PG College</span>, Anantapur (affiliated with Sri Krishnadevaraya University).  
      In 2022, I joined <span className="font-semibold">Hetero Pharmaceuticals Ltd</span> as an Admin in the Preparation Team, Oncology Dept.  
      After one year, I decided to switch my career to <span className="text-yellow-300 font-semibold">Web Development</span> because of my passion for coding and problem-solving.
    </p>

    <p className="text-lg md:text-xl mb-6 leading-relaxed">
      I’m deeply interested in <span className="text-yellow-300">mythological stories, science, and sci-fi</span>.  
      I also enjoy exploring mysteries and playing games—especially racing (cars & bikes) and strategy-based ones.
    </p>

    <p className="text-lg md:text-xl italic mb-8 leading-relaxed">
      “My short-term goal is to get a job, learn as much as I can, and grow through experience.  
      My long-term dream is to build my own empire—whether it happens or not, I’ll keep trying until my last breath.”
    </p>

    <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
      More About Me
    </button>
  </div>
</section>


      {/* Hobbits Section */}
<section id="Hobbits" className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-500 to-gray-700 pt-16">
  <div className="text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-8">My Hobbits</h1>
    
    <p className="text-xl md:text-2xl mb-6">📖 Reading – I love mythological stories and science fiction.  
      They let me escape reality and explore new worlds.</p>

    <p className="text-xl md:text-2xl mb-6">🎮 Gaming – I enjoy racing and strategy games.  
      They challenge my reflexes and strategic thinking.</p>

    <p className="text-xl md:text-2xl mb-6">🕵️ Exploring Mysteries – I’m fascinated by unsolved cases  
      and enigmatic phenomena.</p>

    <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
      Know More
    </button>
  </div>
</section>


      {/* Skills Section */}
<section 
  id="skills" 
  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16"
>
  <div className="container mx-auto px-6">
    <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      My Skills
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
      
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-500 border border-white/20">
        <h3 className="font-bold text-xl text-white">Python</h3>
        <p className="text-sm text-gray-300">Advanced</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-500 border border-white/20">
        <h3 className="font-bold text-xl text-white">HTML / CSS</h3>
        <p className="text-sm text-gray-300">Advanced</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-500 border border-white/20">
        <h3 className="font-bold text-xl text-white">Django / DRF / CRUD</h3>
        <p className="text-sm text-gray-300">Advanced</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-500 border border-white/20">
        <h3 className="font-bold text-xl text-white">MySQL</h3>
        <p className="text-sm text-gray-300">Intermediate</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-500 border border-white/20">
        <h3 className="font-bold text-xl text-white">Git & GitHub</h3>
        <p className="text-sm text-gray-300">Intermediate</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-500 border border-white/20">
        <h3 className="font-bold text-xl text-white">Azure</h3>
        <p className="text-sm text-gray-300">Beginner</p>
      </div>
    </div>
  </div>
</section>

      
      {/* Projects Section */}
<section id="projects" className="h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-light-700 pt-16">
  <div className="container mx-auto px-4">
    <h2 className="text-6xl font-bold text-center mb-12 text-white">My Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Project 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h3 className="text-xl font-bold mb-3 text-blue-600">Project 1: Digital Library Management System</h3>
        <p className="text-gray-700 leading-relaxed">
          Users can see a list of books available and explore various genres.  
          They can filter books based on authors or novelists.  
          <br />
          <span className="font-semibold">Gained knowledge:</span> Hands-on experience in building a real-time web application.  
          <br />
          <span className="text-indigo-600 font-semibold">Technologies:</span> Git, Python (Core), Django Framework.
        </p>
      </div>

      {/* Project 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h3 className="text-xl font-bold mb-3 text-blue-600">Project 2: Retail Management System</h3>
        <p className="text-gray-700 leading-relaxed">
          Developed a web application for retail management.  
          Features: Manage Products, Customers, Orders, and Users.  
          <br />
          <span className="font-semibold">Use Case:</span> Useful for library/e-library to identify customers and manage purchases.  
          <br />
          <span className="text-indigo-600 font-semibold">Technologies:</span> Express.js, Node.js.
        </p>
      </div>

      {/* Project 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h3 className="text-xl font-bold mb-3 text-blue-600">Project 3: AI Recruitment Management System</h3>
        <p className="text-gray-700 leading-relaxed">
          We are building an AI-powered system to automate the recruitment process. The system
	will:
		An AI-powered platform that automates hiring by analyzing job descriptions, ranking resumes, recommending top candidates, and even sourcing profiles from job portals with automated outreach.  
          <br />
          <span className="text-indigo-600 font-semibold">Technologies:</span> Backend: Python (Django)React, OpenAI API, and Azure for full-stack deployment
        </p>
      </div>

    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700">
  <div className="container mx-auto px-6 text-white">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">📬 Get in Touch</h2>

    {/* Side by Side Layout */}
    <div className="flex flex-col md:flex-row items-start justify-between gap-12">

      {/* Profile Image (Left Side - Rectangle Shape) */}
      <div className="w-full md:w-1/5 flex justify-center md:justify-start">
        <img 
          src={`${process.env.PUBLIC_URL}/profile.jpg`} 
          alt="Kamaleshwar" 
          className="w-64 h-80 object-cover border-4 border-yellow-300 shadow-lg rounded-lg -mt-10 md:-mt-20"
        />
      </div>

      {/* Contact Details (Middle Side) */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <p className="text-lg md:text-xl mb-4">
          I’m currently looking for new opportunities.  
          Whether you have a question or just want to say hi, my inbox is always open.  
          I’ll try my best to get back to you!
        </p>
        <p className="text-md text-gray-300 mb-6">
          You can also reach me at: 
          <a href="mailto:pkamallife@gmail.com" className="text-yellow-300 hover:underline ml-2">
            pkamallife@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-200 mb-8">
          Phone: <span className="text-yellow-200">+91 7989390757</span>
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="https://github.com/Gayathrieshwar99" 
             className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full shadow-lg hover:bg-black transition duration-300">
            <i className="fab fa-github"></i> GitHub
          </a>
          
          <a href="https://www.linkedin.com/in/gayathrieshwar99/" 
             className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          
          <a href="https://x.com/pkamal991107LG" 
             className="flex items-center gap-2 bg-sky-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-sky-700 transition duration-300">
            <i className="fab fa-twitter"></i> Twitter
          </a>

          <button
            onClick={() => window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank')}
            className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
          >
            View My Resume
          </button>
        </div>
      </div>

      {/* Right Side - Inbox Form */}
      <div className="w-full md:w-1/3 bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/10">
        <h3 className="text-xl font-bold mb-3 text-white">Say Hi 👋</h3>
        <form className="flex flex-col space-y-3">
          {/* Name input */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 
            focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Email input */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-100 text-gray-900
            focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Message box */}
          <textarea
            placeholder="Type your message here..."
            rows={4}
            className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 
            focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          
          {/* Submit button */}
<button
  type="button"
  onClick={() => window.location.href = "mailto:pkamallife@gmail.com?subject=Hello&body=Hi Kamal,"}
  className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
  py-3 px-6 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
>
  Send Message
</button>

        </form>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-800 text-white text-center py-8">
  <p>© {new Date().getFullYear()} Lakshmi Kamaleshwar Parnandhi. All rights reserved.</p>
</footer>
    </div>
  );
}

export default App;