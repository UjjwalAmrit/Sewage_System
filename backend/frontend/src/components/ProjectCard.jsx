import { FaCheckCircle, FaClock, FaMapMarkerAlt } from "react-icons/fa"

const ProjectCard = ({ project }) => {
  const getStatusIcon = (status) => {
    return status === "Completed" ? (
      <FaCheckCircle className="text-green-600 drop-shadow" />
    ) : (
      <FaClock className="text-yellow-600 drop-shadow" />
    )
  }

  const getStatusColor = (status) => {
    return status === "Completed"
      ? "bg-green-700/30 text-green-500 border border-green-500/30"
      : "bg-yellow-700/30 text-yellow-500 border border-yellow-500/30"
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-purple-300 hover:scale-[1.02] transition-all">
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.name}</h3>

      {/* Location */}
      <div className="flex items-center space-x-2 text-gray-600 mb-3">
        <FaMapMarkerAlt className="text-purple-400" />
        <span>{project.location}</span>
      </div>

      {/* Capacity */}
      <div className="mb-4">
        <span className="text-sm text-gray-500">Capacity: </span>
        <span className="font-medium text-gray-900">{project.capacity}</span>
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
