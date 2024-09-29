// eslint-disable-next-line react/prop-types
const HighestRated = ({ titles }) => {
  return (
    <div>
      <h2 className="md:mb-4 font-bold text-[27px] md:text-[37px w-full leading-[47.66px]">
        Highest Rated
      </h2>
      <p className="md:mb-8 md:text-lg text-[14px] mb-2">
        The most popular dramas based on user ratings
      </p>
      <div className=" grid grid-cols-2 md:flex  md:flex-row w-full gap-2">
        {titles.map((title, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={title.image} alt={title.name} className="md:w-48 md:h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HighestRated
