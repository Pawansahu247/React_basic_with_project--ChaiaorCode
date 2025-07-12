import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaCloud } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <Skill icon={<FaReact />} name="React" />
          <Skill icon={<FaJs />} name="JavaScript" />
          <Skill icon={<FaHtml5 />} name="HTML5" />
          <Skill icon={<FaCss3Alt />} name="CSS3" />
          <Skill icon={<FaGitAlt />} name="Git" />
          <Skill icon={<FaCloud />} name="GCP" />
        </div>
      </div>
    </div>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center text-2xl text-blue-600">
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-gray-700">{name}</p>
    </div>
  );
}
