import { useState, useEffect, useRef } from "react"
import slider0 from "../assets/episode_shot.svg"
import slider1 from "../assets/episode_shot2.svg"
import slider2 from "../assets/episode_shot3.svg"
import leftArrow from "../assets/left-arrow.png"
import rightArrow from "../assets/right-arrow.png"

const images = [
  {
    src: slider0,
    title: "Hierarchy: Episodes 1-2",
    date: "Jun 07, 2024",
    text: "Hierarchy opens, as an edgy teen drama is wont to do, with a gruesome incident. High school student KANG IN-HAN (Kim Min-chul) stalks down an alleyway, ranting over the phone that he’ll expose the insanity that takes place on school grounds. Predictably, In-han is hit by a car, and no one comes to his aid as he bleeds out. Kang Ha enters Jooshin High and quickly ruffles some feathers. He soon attends a rowdy part and partakes in a provocative game of truth or dare. After Kang Ha’s daring stunt at the party, he faces the vengeful Kim Ri an at school. Later, at a retreat, Kang Ha and Jung Jae-i begin to get closer.",
  },
  {
    src: slider1,
    title: "Only Me",
    date: "Jun 07, 2024",
    text: "Once rivals in school, two brilliant doctors reunite by chance — each facing life’s worst slump and unexpectedly finding solace in each other.",
  },
  {
    src: slider2,
    title: "Love Birds",
    date: "Jun 07, 2024",
    text: "The mysterious disappearance of a girl brings together seven people from all different walks of life. They all have an intertwined connection to her disappearance in the most horrific, unfathomable, and despicable way. As money drives them to their greed, lies, and delirium, they face divine retribution as they struggle for their lives in a picturesque revenge. How far will they go to claim their innocence, and will anyone make it out alive?",
  },
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = currentIndex * carouselRef.current.clientWidth
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative font-sans mt-1 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-opacity-50 rounded-full md:z-30 absolute md:flex 
           hidden left-0 top-1/3 transform -translate-y-1/2"
        >
          <img
            src={leftArrow}
            alt="Previous"
            className="md:md:w-[25.8px] md:h-[43.13px] lg:w-[45.8px] lg:h-[83.13px] w-3"
          />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-opacity-50 rounded-full md:z-30 hidden md:flex absolute right-0 top-1/3 transform -translate-y-1/2"
        >
          <img
            src={rightArrow}
            alt="Next"
            className="md:md:w-[25.8px] md:h-[43.13px] lg:w-[45.8px] lg:h-[83.13px] w-3"
          />
        </button>
      </div>
      <div
        ref={carouselRef}
        className="flex gap-3  overflow-x-auto whitespace-nowrap scroll-smooth"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`inline-block w-full transition-transform duration-500 ${
              currentIndex === index ? "opacity-100" : "opacity-50"
            }`}
            style={{
              minWidth: "90%",
              maxWidth: "500px",
              opacity: currentIndex === index ? 1 : 0.5,
            }}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full md:w-[1100px] object-cover "
            />
          </div>
        ))}
      </div>
      <div className="mt-4 text-left">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">{images[currentIndex].title}</h2>
          <p className="text-sm text-gray-500">{images[currentIndex].date}</p>
        </div>
        <p className="mt-2 text-left italic md:leading-[21.79px] mb-9 font-normal md:text-[16px] text-[12px]">
          {images[currentIndex].text}
        </p>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <hr className="h-[1px] w-full bg-[#000000]" />
        <button className="w-[136px] text-[#000000] h-[38px] border rounded-full p-1 text-[11px] md:text-[16px]">
          More Recaps
        </button>
      </div>
    </div>
  )
}

export default Carousel
