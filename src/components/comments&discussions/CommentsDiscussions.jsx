import { useState } from "react"
import Vector from "../../assets/EpisodeRecap/u.png"
import Vectors from "../../assets/EpisodeRecap/n.png"
import rateimage from "../../assets/EpisodeRecap/star2.png"
import Profile from "../../assets/EpisodeRecap/user.png"
import OtherRecaps from "../otherRecaps/OtherRecaps"

const CommentsDiscussions = () => {
  const [selected, setSelected] = useState("comments")
  const [showAll, setShowAll] = useState(false)
  const [replyText, setReplyText] = useState("")
  const [replyIndex, setReplyIndex] = useState(null)
  const [comments, setComments] = useState([
    {
      user: "Georgia Williams",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    {
      user: "Linda12_-",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    {
      user: "Jackson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    {
      user: "jan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    {
      user: "brad",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    {
      user: "kate",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    {
      user: "dav",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    {
      user: "ana",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    {
      user: "son",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    {
      user: "Jack",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      Rateimage: rateimage,
      Profile: Profile,
      replies: [],
    },
    // ... (rest of the comments)
  ])

  const [discussions, setDiscussions] = useState([
    {
      user: "Dave",
      text: "What are your thoughts on the new policy?",
      replies: [],
      Profile: Profile,
    },
    {
      user: "Eve",
      text: "I think it’s a step in the right direction.",
      replies: [],
      Profile: Profile,
    },
    { user: "Frank", text: "Could you elaborate more on that?", replies: [], Profile: Profile },
    { user: "Grace", text: "I have some concerns about it.", replies: [], Profile: Profile },
    { user: "Heidi", text: "Can we discuss the implications?", replies: [], Profile: Profile },
    { user: "Ivy", text: "How will this affect our community?", replies: [], Profile: Profile },
    { user: "Jack", text: "What changes can we expect?", replies: [], Profile: Profile },
    { user: "Kate", text: "Are there any drawbacks?", replies: [], Profile: Profile },
    { user: "Leo", text: "What’s the timeline for implementation?", replies: [], Profile: Profile },
    { user: "Mike", text: "Who will be impacted the most?", replies: [], Profile: Profile },
    { user: "Nina", text: "What are the benefits?", replies: [], Profile: Profile },
    { user: "Oscar", text: "How can we contribute?", replies: [], Profile: Profile },
    { user: "Paul", text: "Any additional details?", replies: [], Profile: Profile },
    { user: "Quinn", text: "What’s the budget for this?", replies: [], Profile: Profile },
    { user: "Rita", text: "How will success be measured?", replies: [], Profile: Profile },
    { user: "Sam", text: "Can we get more specifics?", replies: [], Profile: Profile },
    { user: "Tom", text: "What’s the overall goal?", replies: [], Profile: Profile },
    { user: "Uma", text: "How will it be enforced?", replies: [], Profile: Profile },
    { user: "Vera", text: "Any room for amendments?", replies: [], Profile: Profile },
    { user: "Walt", text: "What’s the next step?", replies: [], Profile: Profile },
  ])

  const handleClick = (type) => {
    setSelected(type)
    setShowAll(false) // Reset showAll when switching between comments and discussions
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const handleReplyChange = (e) => {
    setReplyText(e.target.value)
  }

  const handleReplySubmit = (index, type) => {
    if (replyText.trim()) {
      if (type === "comments") {
        const newComments = [...comments]
        newComments[index].replies.push({ user: "CurrentUser", text: replyText })
        setComments(newComments)
      } else {
        const newDiscussions = [...discussions]
        newDiscussions[index].replies.push({ user: "CurrentUser", text: replyText })
        setDiscussions(newDiscussions)
      }
      setReplyText("")
      setReplyIndex(null)
    }
  }

  const handleReplyClick = (index) => {
    setReplyIndex(index === replyIndex ? null : index)
  }

  const visibleComments = showAll ? comments : comments.slice(0, 3)
  const visibleDiscussions = showAll ? discussions : discussions.slice(0, 3)

  return (
    <div className="flex flex-col justify-between md:px-[70px] pt-4 font-sans px-4 pb-11">
      <div className="flex items-baseline justify-center w-[100%]">
        <div className="relative flex flex-col justify-center items-center">
          <button
            onClick={() => handleClick("comments")}
            className={`border md:w-[301px] w-[120px] md:mb-2 h-[40px] ${
              selected === "comments" ? "text-[#7F56DA]" : ""
            }`}
          >
            Comments
          </button>
          <hr
            className={`border-t-2 border-[#7F56DA] ${
              selected === "comments" ? "w-[50px] mt-1" : "opacity-0"
            }`}
          />
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <button
            onClick={() => handleClick("discussions")}
            className={`border w-[120px] md:w-[301px] md:mb-2 h-[40px] ${
              selected === "discussions" ? "text-[#7F56DA]" : ""
            }`}
          >
            Discussions
          </button>
          <hr
            className={`border-t-2 border-[#7F56DA] ${
              selected === "discussions" ? "w-[50px] mt-1" : "opacity-0"
            }`}
          />
        </div>
      </div>
      {selected === "comments" && (
        <div className="pt-5">
          <button className="bg-[#7F56DA] w-[100px] h-[30px] md:w-[127.68px] md:h-[50px] rounded-full">
            post
          </button>
        </div>
      )}
      <div className="mt-4">
        {selected === "comments" && (
          <div>
            <h2 className="font-semibold">Comments</h2>
            {visibleComments.map((comment, index) => (
              <div key={index} className="mt-2 p-2 border rounded">
                <div className="flex items-center">
                  <img src={comment.Profile} alt="Profile" className="rounded-full mr-3" />
                  <div className="flex-1">
                    <div className="items-center">
                      <p className="font-bold">{comment.user}</p>
                      <img src={comment.Rateimage} alt="Rate" className="" />
                    </div>
                    <p>{comment.text}</p>
                  </div>
                </div>
                <div className="ml-10 mt-2">
                  {comment.replies.map((reply, replyIndex) => (
                    <div key={replyIndex} className="mt-2 p-2 border-l-2">
                      <p className="font-bold">{reply.user}</p>
                      <p>{reply.text}</p>
                    </div>
                  ))}
                  <button
                    onClick={() => handleReplyClick(index)}
                    className="text-[#7F56DA] mt-2 pl-11 "
                  >
                    Reply
                  </button>
                  {replyIndex === index && (
                    <div className="mt-2">
                      <input
                        type="text"
                        value={replyText}
                        onChange={handleReplyChange}
                        placeholder="Reply..."
                        className="border rounded p-1 w-full"
                      />
                      <button
                        onClick={() => handleReplySubmit(index, "comments")}
                        className="bg-[#7F56DA] text-white rounded p-1 mt-1"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="flex justify-center m-10">
              <button
                onClick={toggleShowAll}
                className="mt-4 p-2 #784DD8 text-black bg-[#7F56DA] rounded-full w-[120px]"
              >
                {showAll ? "Show Less" : "View All"}
              </button>
            </div>
          </div>
        )}
        {selected === "discussions" && (
          <div>
            <h2 className="font-semibold">Discussions</h2>
            {visibleDiscussions.map((discussion, index) => (
              <div key={index} className="mt-2 p-2 border rounded">
                <div className="flex items-center">
                  <img src={discussion.Profile} alt="" />
                  <p className="font-bold">{discussion.user}</p>
                </div>
                <p className="pl-11">{discussion.text}</p>
                <div className="ml-10 mt-2">
                  {discussion.replies.map((reply, replyIndex) => (
                    <div key={replyIndex} className="mt-2 p-2 border-l-2">
                      <p className="font-bold">{reply.user}</p>
                      <p>{reply.text}</p>
                    </div>
                  ))}
                  <button onClick={() => handleReplyClick(index)} className="text-[#7F56DA] ">
                    Reply
                  </button>
                  {replyIndex === index && (
                    <div className="mt-2">
                      <input
                        type="text"
                        value={replyText}
                        onChange={handleReplyChange}
                        placeholder="Reply..."
                        className="border rounded p-1 w-full"
                      />
                      <button
                        onClick={() => handleReplySubmit(index, "discussions")}
                        className="bg-[#7F56DA] text-white rounded p-1 mt-1"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div>
              <div className="flex justify-center m-10">
                <button
                  onClick={toggleShowAll}
                  className="mt-4 p-2 #784DD8 text-black bg-[#7F56DA] rounded-full w-[120px]"
                >
                  {showAll ? "Show Less" : "View All"}
                </button>
              </div>
              <div className="bg-[#C4B1EE] mt-4 flex justify-center items-center h-[44px] gap-4 cursor-pointer">
                <input
                  className=" md:w-[826.41px] h-[30px] pl-4 rounded-full outline-none border-none"
                  type="text"
                  placeholder="Join Discussion..."
                />
                <img src={Vector} alt="" />
                <button type="submit">
                  <img src={Vectors} alt="" />
                </button>
              </div>
            </div>
            <div className="mt-11">
              <OtherRecaps />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentsDiscussions
