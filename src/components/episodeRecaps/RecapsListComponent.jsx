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
    <div className="flex flex-col justify-between gap-4">
      <div className="h-screen">
        {currentRecaps.map((recap, index) => (
          <div key={index} className="mb-10  max-h-80 flex flex-row justify-evenly">
            <div className="flex space-x-4 ">
              <img src={recap.image} alt={recap.title} className="object-cover rounded-md" />
              <div className="flex flex-col max-w-3xl">
                <p className="text-sm self-end text-gray-500">{recap.date}</p>
                <h3 className="text-xl font-bold mb-1">{recap.title}</h3>
                <h4 className="text-l font-bold mb-1">{recap.episodes}</h4>
                <p className="text-gray-700 mt-4 text-clip">{recap.description}</p>
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
              className={`px-4 py-2 mx-1 ${
                currentPage === number ? "text-black border-b-4 border-purple-700" : "text-gray-500"
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            className="px-4 py-2 mx-1 text-xs text-gray-500"
          >
            next
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecapsListComponent
