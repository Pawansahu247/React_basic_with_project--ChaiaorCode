import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://www.b3net.com/wp-content/uploads/2022/05/on-page-seo-2022.png"
                            alt="My coding setup"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Hey! I'm Pawan — a Web Developer who loves building things with React
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I'm a passionate and self-driven web developer currently pursuing my college education. I specialize in building responsive and modern web applications using technologies like <strong>React.js</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, and <strong>Vite</strong>. 
                        </p>
                        <p className="mt-4 text-gray-600">
                            I started my development journey by building small projects, and now I love creating real-world apps that solve problems and offer great user experiences. Every day I aim to improve my coding skills, learn best practices, and stay updated with the latest tools in frontend development.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Apart from coding, I'm always exploring new areas like <strong>Cloud Computing (GCP)</strong>, working on virtual internships, and expanding my technical knowledge through hands-on practice and online labs.
                        </p>
                        <p className="mt-4 text-gray-600">
                            I'm currently focusing on mastering React and building full-fledged applications using tools like React Router, APIs, custom hooks, and state management. My goal is to become a strong frontend developer who can create clean, maintainable, and scalable UI components.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Thanks for checking out my portfolio! Feel free to explore my projects and get in touch if you'd like to collaborate or just chat about code.
                        </p>
                        <h3 className="text-xl font-semibold mt-8 text-gray-900">Education</h3>
<p className="mt-2 text-gray-600">
🎓 B.Tech in Computer Science (2022–2026)<br />
XYZ Engineering College, India
</p>

<h3 className="text-xl font-semibold mt-6 text-gray-900">Certifications</h3>
<ul className="list-disc list-inside mt-2 text-gray-600">
  <li>
    <a href="https://www.credly.com/badges/abc123" target="_blank" className="text-blue-600 underline">
      Google Cloud: Creating and Alerting on Logs-based Metrics (GSP091)
    </a>
  </li>
  <li>
    <a href="https://www.theforage.com/" target="_blank" className="text-blue-600 underline">
      Deloitte Technology Virtual Internship – Forage
    </a>
  </li>
</ul>

                    </div>
                </div>
            </div>
        </div>
    );
}
