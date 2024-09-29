import { useState, useEffect } from "react"
import slider0 from "../../assets/Rectangle 35.png"
import slider1 from "../../assets/Rectangle 35 (1).png"
import slider2 from "../../assets/Rectangle 35 (2).png"
import leftArrow from "../../assets/left-arrow.png"
import rightArrow from "../../assets/right-arrow.png"

const images = [
  {
    src: slider1,
    text: (
      <div>
        <h1 className="font-bold md:text-[40px] lg:text-[70px] md:leading-[55.33px] lg:leading-[95.33px]">
          Queen Of Tears
        </h1>
        <p className="md:w-[535.35px] italic md:leading-[21.79px] font-normal md:text-[16px] text-[8px]">
          The queen of department stores and the prince of supermarkets weather a marital
          crisis—until love miraculously begins to bloom again.
        </p>
      </div>
    ),
  },
  {
    src: slider2,
    text: (
      <div>
        <h1 className="font-bold md:text-[40px] lg:text-[70px] md:leading-[55.33px] lg:leading-[95.33px]">
          Doctor Slump
        </h1>
        <p className="md:w-[535.35px] italic md:leading-[21.79px] font-normal md:text-[16px] text-[8px]">
          Once rivals in school, two brilliant doctors reunite by chance — each facing life’s worst
          slump and unexpectedly finding solace in each other.
        </p>
      </div>
    ),
  },
  {
    src: slider0,
    text: (
      <div className="md:mt-[120px]">
        <h1 className="font-bold md:text-[40px] lg:text-[70px] md:leading-[55.33px] lg:leading-[95.33px]">
          The Escape of the Seven
        </h1>
        <p className="md:w-[535.35px] md:pl-4 italic md:leading-[21.79px] font-normal md:text-[16px] text-[8px]">
          The mysterious disappearance of a girl brings together seven people from all different
          walks of life. They all have an intertwined connection to her disappearance in the most
          horrific, unfathomable, and despicable way. As money drives them to their greed, lies, and
          delirium, they face divine retribution as they struggle for their lives in a picturesque
          revenge. How far will they go to claim their innocence, and will anyone make it out alive?
        </p>
      </div>
    ),
  },
  {
    src: slider2,
    text: (
      <div>
        <h1 className="font-bold md:text-[40px] lg:text-[70px] md:leading-[55.33px] lg:leading-[95.33px]">
          Doctor Slump
        </h1>
        <p className="md:w-[535.35px] italic md:leading-[21.79px] font-normal md:text-[16px] text-[8px]">
          Once rivals in school, two brilliant doctors reunite by chance — each facing life’s worst
          slump and unexpectedly finding solace in each other.
        </p>
      </div>
    ),
  },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationClass, setAnimationClass] = useState("slide-in")

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000) // Change image every 3 seconds
    return () => clearInterval(interval)
  }, [currentIndex])

  const nextSlide = () => {
    setAnimationClass("slide-out")
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
      setAnimationClass("slide-in")
    }, 50) // Duration of the slide-out animation
  }

  const prevSlide = () => {
    setAnimationClass("slide-out")
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length)
      setAnimationClass("slide-in")
    }, 500) // Duration of the slide-out animation
  }

  return (
    <div className="relative w-full md:h-[521px] h-[300px] overflow-hidden font-sans mt-20  bg-black bg-opacity-57">
      <div className="absolute inset-0 flex md:items-center md:justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 p-4 m-4 bg-opacity-50 rounded-full hover:bg-opacity-75 md:z-30 -z-10"
        >
          <img
            src={leftArrow}
            alt="Previous"
            className="md:md:w-[25.8px] md:h-[43.13px] lg:w-[45.8px] lg:h-[83.13px] w-3"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 p-4 m-4 bg-opacity-50 rounded-full hover:bg-opacity-75 md:z-30 -z-10"
        >
          <img
            src={rightArrow}
            alt="Next"
            className="md:w-[25.8px] md:h-[43.13px] lg:w-[45.8px] lg:h-[83.13px] w-3"
          />
        </button>
      </div>
      <div
        className={`relative w-full h-full flex items-center justify-center transition-transform duration-500 ${animationClass}`}
      >
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start md:pl-[140px] bg-black bg-opacity-25 p-4">
          <div className="text-white flex">{images[currentIndex].text}</div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
