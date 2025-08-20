import { FaCheckCircle, FaClock, FaMapMarkerAlt } from "react-icons/fa"

const ProjectCard = ({ project }) => {
  const getStatusIcon = (status) => {
    return status === "Completed" ? (
      <FaCheckCircle className="text-green-400 drop-shadow" />
    ) : (
      <FaClock className="text-yellow-400 drop-shadow" />
    )
  }

  const getStatusColor = (status) => {
    return status === "Completed"
      ? "bg-green-500/20 text-green-300 border border-green-400/30"
      : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-purple-500/30 hover:scale-[1.02] transition-all">
      {/* Title */}
      <h3 className="text-xl font-semibold text-purple-200 mb-3">{project.name}</h3>

      {/* Location */}
      <div className="flex items-center space-x-2 text-gray-300 mb-3">
        <FaMapMarkerAlt className="text-purple-400" />
        <span>{project.location}</span>
      </div>

      {/* Capacity */}
      <div className="mb-4">
        <span className="text-sm text-gray-400">Capacity: </span>
        <span className="font-medium text-white">{project.capacity}</span>
      </div>

      {/* Status */}
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            project.status
          )}`}
        >
          {getStatusIcon(project.status)}
          <span>{project.status}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
