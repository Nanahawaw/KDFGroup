import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
function RecapsListComponent({ recaps }) {
  const [currentPage, setCurrentPage] = useState(1)
  const recapsPerPage = 4

  // This would be replaced by API call later
  useEffect(() => {
    // Example API call placeholder (replace later)
    // fetchRecapsFromAPI()
    //     .then(response => setRecaps(response.data));
  }, [])

  // Pagination logic
  const indexOfLastRecap = currentPage * recapsPerPage
  const indexOfFirstRecap = indexOfLastRecap - recapsPerPage
  // eslint-disable-next-line react/prop-types
  const currentRecaps = recaps.slice(indexOfFirstRecap, indexOfLastRecap)

  // Handling page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:w-3/4">
        {currentRecaps.map((recap, index) => (
          <div key={index} className="mb-6">
            <div className="flex space-x-4">
              <img
                src={recap.image}
                alt={recap.title}
                className="w-48 h-32 object-cover rounded-md"
              />
              <div>
                <h3 className="text-xl font-bold mb-1">{recap.title}</h3>
                <p className="text-sm text-gray-500">{recap.date}</p>
                <p className="text-gray-700">{recap.description}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {[1, 2, 3, 4, 5].map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 mx-1 rounded-lg ${
                currentPage === number ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecapsListComponent
