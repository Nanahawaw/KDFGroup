import image1 from "../../assets/EpisodeRecap/Frame1.png"
import image2 from "../../assets/EpisodeRecap/Frame2.png"
import image3 from "../../assets/EpisodeRecap/Frame3.png"

const cardData = [
  {
    id: 1,
    image: image1,
    title: "Frankly Speaking (Episodes 11-12 Final)",
    description:
      "The tense final moments of last week’s episodes are further exaggerated in our finale’s opening scenes, as we follow Ki-baek’s mother in the hours leading up to the car accident. The whole montage feels emotionally manipulative, like a Hallmark commercial trying to boost card and porcelain figurine sales before Mother’s Day, and even though there is no actual PPL to be seen, the vibe is morbid and very “show your mother you love her… before she dies.” So, for those of you thinking the screeching breaks and flashing headlights were a fake-out, sorry. Ki-baek’s family was very much hit by a dreaded Truck of Doom.",
  },
  {
    id: 2,
    image: image2,
    title: "Connection (Episodes 5-6)",
    description:
      "Retracing the possible routes around the store, Jae-kyung narrows the culprit down to a taxi driver. Said taxi driver, Yoon-ho, is currently tracking down NOH GYU-MIN, Joon-seo’s taxi driver on the night of his murder. Jae-kyung is searching for him too, having checked the CCTV tapes the owner gave him, but Gyu-min has gone into hiding.Later, Yoon-jin visits Jae-kyung at the station with homemade lunch boxes, claiming it’s 51% to pry information out of him, 49% because she’s worried. Hee. When he shows her the Doctor’s text, she shares her own information too — she’s received a tip off from that same number, signed off with “Audiophile.”",
  },
  {
    id: 3,
    image: image3,
    title: "A Typical Family (Episodes 9-10)",
    description:
      "Our lottery ticket continues its journey from Soon-goo to the blackmailer, and it eventually ends up with Sauna Mom — who orchestrated the whole thing! You’d think she’d be satisfied with the money, but no. Sauna Mom still sends pictures of Soon-goo and his lady friend to Man-heum — who feels betrayed that her husband started clubbing after she stopped dreaming. I understand Soon-goo’s relief at finally being able to have hobbies without walking on eggshells around his all-seeing wife; unfortunately, this hobby gets him kicked out of the house.",
  },
]

function OtherRecaps() {
  return (
    <div className="flex flex-col justify-between pt-5 font-sans text-[#000000]  pb-2">
      <div className="flex items-center justify-center ">
        <div>
          <p className="w-[228px] font-semibold text-[33px]">other Recaps</p>
        </div>
        <div className="border-t w-full"></div>
      </div>
      {cardData.map((card) => (
        <div key={card.id} className="pt-4 pb-4 md:flex border-b ">
          <img
            src={card.image}
            alt={card.title}
            className="md:w-[196px] md:h-[196px] w-[100%] object-cover rounded-t-lg "
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">{card.title}</h2>
            <p className="flex text-justify">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OtherRecaps
