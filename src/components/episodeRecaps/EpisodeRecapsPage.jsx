import image1 from "../../assets/EpisodeRecap/Group 1326.png"
import image2 from "../../assets/EpisodeRecap/IMG_6345 1.png"
import image3 from "../../assets/EpisodeRecap/IMG_6347 1.png"
import image4 from "../../assets/EpisodeRecap/IMG_6348 1.png"
import CommentsDiscussions from "../comments&discussions/CommentsDiscussions"
const locations = [
  {
    image: image1,
    text: "In this institution for the aristocratic cream of the crop, privilege is the power wielded by the upper class. Yet on the lofty pedestal stands a shattered visage decaying from within, wrecked by its own hubris. All that glisters is not gold, and rot festers within the ivory towers of this gilded cage, waiting to be unearthed by those who seek to dismantle the pecking order.",
  },
  {
    image: image2,
    text: "Hierarchy opens, as an edgy teen drama is wont to do, with a gruesome incident. High school student KANG IN-HAN (Kim Min-chul) stalks down an alleyway, ranting over the phone that he’ll expose the insanity that takes place on school grounds. Predictably, In-han is hit by a car, and no one comes to his aid as he bleeds out.  Said school is Jooshin High, an elite private institution with decades of prestigious history. From fencing to ballet, from the harp to Lord Byron’s Sardanapalus, an endless array of extracurricular activities are available to the privileged students — but only those who can afford it. Jooshin High extols noblesse oblige as its school creed, which means they welcome a select few scholarship students into their fold. This year, the exclusive spot belongs to KANG HA (Lee Chae-min), but it soon becomes apparent that the scholarship kids are belittled for being on a lower social rung. Not only are their neckties a different color, effectively singling them out, but they’re also denied access to certain amenities.-",
  },
  {
    image: image4,
    text: "At the apex of this hierarchy sits a quartet of the most popular — and powerful — people in this school. Only one shows any sign of disdain towards the status quo, and that’s the aloof JUNG JAE-YI (Noh Jung-eui), eldest daughter to Jaeyul Group. Not only does she put distance between herself and her fellow elites, but she also breaks up with her childhood friend KIM RI-AHN (Kim Jae-won) — through an adrenaline-filled racing bet, no less — after three months of ghosting him while abroad. As for the rest, they’re content to sit comfortably atop their throne, but each of them have their own demons. Jooshin heir Ri-ahn has everything he could ever ask for, except his mother’s love. YOON HE-RA (Ji Hye-won) craves attention, especially from Ri-ahn; now that his relationship with Jae-yi has soured, she’s swooping in and seducing him. As for flower boy LEE WOO-JIN (Lee Won-jung), he’s secretly dating — and sleeping with — their homeroom teacher HAN JI-SOO (Chae Seo-ahn). It isn’t long before we see Jae-yi’s facade begin to crack, too. Nitpicked in every aspect by her overbearing father JUNG KI-YOUNG (Choi Won-young), Jae-yi struggles with being the black sheep to the golden child that is her half-brother. Ki-young cares for appearances above all, and he doesn’t hesitate to degrade Jae-yi’s late mother in favor of his current wife. Sick of her father’s condescending spiels, Jae-yi breaks away from a family gathering to take a vape break, which is how she first meets Ha. He’s there to play the piano as a part-time gig, and there’s instant intrigue — perhaps even attraction — on his part. That interest only grows when Jae-yi asks to borrow his shirt off his back, then walks off without even a word of thanks.",
  },
  {
    image: image3,
    text: "After that encounter, life mostly returns to normal for Ha — though his “normal” consists of being singled out, getting ignored by his peers, and sticking out like a sore thumb with his unwavering amiability. When the shrewd He-ra organizes a fancy poolside party under the guise of helping Ri-ahn get back in Jae-yi’s good graces, Ha winds up dared to French kiss a girl for three minutes.Taking the bull by its horns, Ha heads straight for Jae-yi and kisses her — right in front of Ri-ahn, who’d been attempting to repair their relationship. And after just a moment, Jae-yi kisses Ha back. Needless to say, Ri-ahn develops a mean grudge, but Ha simply lets the bullying roll off his back with a side of sassy retorts. Jae-yi even offers a word of advice as thanks for his shirt — he should drop out — but Ha simply tells her he enjoyed their kiss.ae-yi clearly chafes at being treated like a possession, which not only explains her aversion to the jealous and obsessive Ri-ahn, but also provides the impetus to the burgeoning attraction between her and Ha. With him, she can take a rare breather away from the confines of social status, and escape into a moment of blissful freedom.When they get caught in a sudden rain shower during a school retreat, Jae-yi tells Ha to dry off in her suite, and he ends up nodding off on her shoulder. Quietly, she admits she didn’t dislike their kiss either, and the air between them grows charged — but as Ha leans in, Jae-yi recognizes In-han’s bracelet on his wrist.",
  },
]

function EpisodeRecapsPage() {
  return (
    <div className="mt-20">
      <div className="flex justify-between md:px-[70px] pt-4 font-sans px-4">
        <p className="font-semibold md:text-[35px] md:leading-[47.66px] text-[#000000] text-[14px]">
          Hierachy Episodes 1-2 Recap
        </p>
        <p className="font-semibold text-[#7F56DA] md:leading-[24.51px] md:text-[18px] text-[14px]">
          June 9th, 2024
        </p>
      </div>
      <div className="pt-9">
        {locations.map((location, index) => (
          //  <div key={index} position={[location.lat, location.lon]}> *** We had an error on the position property.
          // Also location would be an item of locations(above array), but the location item obj does not have lat or lon properties
          <div key={index}>
            <div>
              <div className="text-center px-4 md:px-[70px]">
                <img src={location.image} alt={location.text} className="w-full  object-cover" />
                <div className="">
                  {" "}
                  <h4 className=" pt-4 pb-4 font-normal text-justify md:leading-[30.8px] leading-[20.8px] md:text-[22px] text-[14px] text-[#000000]">
                    {location.text}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <CommentsDiscussions />
      </div>
    </div>
  )
}

export default EpisodeRecapsPage
