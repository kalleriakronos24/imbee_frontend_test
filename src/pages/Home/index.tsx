import BookSidebarRecommendations from "../../components/NetworkSites";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useRetrieveQuestion from "../../hooks/retrieve-question.hook";
import useRetrieveTopics from "../../hooks/retrieve-topic.hook";
import { TTopic } from "@@/@types/topic.types";

const Home = () => {
  const { isFetchEnd, questionData, setQuestionSteps, getQuestions } =
    useRetrieveQuestion();
  let { topicData } = useRetrieveTopics();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const moreQuestions = async () => {
    setTimeout(() => {
      setQuestionSteps(0, selectedTopic);
    }, 1500);
  };

  const handleSearch = async (txt: string) => {
    getQuestions(10, txt);
  };

  const setSelectedTopicParam = (topic: string): TTopic[] => {
    if (topicData.length > 0) {
      topicData = topicData.map(tpc => {
        if (tpc.name === topic) {
          return {
            ...tpc,
            isSelected: true,
          };
        } else {
          return tpc;
        }
      });
      getQuestions(10, topic);
      setSelectedTopic(topic);
      return topicData;
    }
    return topicData;
  };

  useEffect(() => {
    if (topicData.length > 0) {
      topicData = topicData.map((v, i) => {
        if (i === 0) {
          return {
            ...v,
            isSelected: true,
          };
        } else {
          return v;
        }
      });
    }
  }, []);

  // trending topic
  // https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&site=stackoverflow

  // questions
  // https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=activity&tagged=js&site=stackoverflow
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col px-8 py-8">
          <span className="text-3xl font-semibold leading-4 tracking-wide text-center">
            Imbee Exchange
          </span>
          <div className="hidden flex-row py-16 min-[1024px]:flex">
            <BookSidebarRecommendations />
            <div className="flex flex-col w-[80%]">
              <div className="px-8 py-16">
                <div className="flex flex-row justify-between items-center">
                  <span className="font-bold">Trending Topics</span>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      onChange={val => setSearchQuery(val.target.value)}
                      className="border-2 rounded-2xl mr-4 px-6"
                      placeholder="Search questions, topics..."
                    />
                    <button
                      onClick={() => handleSearch(searchQuery)}
                      className="py-2 text-center px-6 bg-[#131921] rounded-3xl text-white"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className="flex flex-row w-full mt-6">
                  {topicData.length > 0 &&
                    topicData.map(topic => {
                      return (
                        <span
                          onClick={() => setSelectedTopicParam(topic.name)}
                          key={topic.name}
                          className={`cursor-pointer mr-4 px-6 py-2 rounded-full ${topic.isSelected && "border-blue-300"} border-2`}
                        >
                          {topic.name}
                        </span>
                      );
                    })}
                </div>
                {questionData && questionData.length > 0 ? (
                  <InfiniteScroll
                    dataLength={questionData.length}
                    next={moreQuestions}
                    hasMore={!isFetchEnd ? true : false}
                    endMessage={
                      <>
                        <span>Showing {questionData.length} Questions.</span>
                      </>
                    }
                    loader={
                      <h4>{searchQuery ? "" : "scroll to view more..."}</h4>
                    }
                  >
                    <div className="py-8 flex flex-col px-6">
                      {questionData.map(question => {
                        return (
                          <div
                            key={question.title}
                            onClick={() =>
                              (window.location.href = question.link)
                            }
                            className="flex flex-row mb-6 justify-between items-center w-full"
                          >
                            <div className="w-[50%] flex flex-col cursor-pointer">
                              <span className="font-medium text-lg">
                                {question.title.length >= 63
                                  ? question.title.slice(0, 63) + "..."
                                  : question.title}
                              </span>
                              <div className="flex flex-row my-4 justify-between">
                                <div className="flex flex-col">
                                  <span className="text-green-500">Score</span>
                                  <span
                                    className={`text-center ${question.score < 0 ? "text-red-500" : "text-black"}`}
                                  >
                                    {question.score}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-green-500">
                                    Answers
                                  </span>
                                  <span
                                    className={`text-center  ${question.is_answered ? "bg-green-500 text-white" : question.answer_count > 0 ? "text-green-500 border-2 border-green-500" : "text-black"}`}
                                  >
                                    {question.answer_count}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-green-500">Viewed</span>
                                  <span className="text-center">
                                    {question.view_count}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              onClick={() =>
                                (window.location.href = question.owner.link)
                              }
                              className="flex flex-col items-center mt-4 cursor-pointer"
                            >
                              <img
                                id={`imgid-${question.title}`}
                                src={question.owner.profile_image}
                                className="h-[70px] w-[70px] rounded-full"
                                alt="img"
                              />
                              <span className="text-center mt-4">
                                {question.owner.display_name}
                              </span>
                            </div>
                            <hr className="mt-2" />
                          </div>
                        );
                      })}
                    </div>
                  </InfiniteScroll>
                ) : (
                  <span>No Questions at the moment.</span>
                )}
              </div>
            </div>
          </div>
          {/** MOBILE */}
          <div className="flex flex-row py-16 min-[1024px]:hidden">
            <div className="px-2 py-16 flex flex-col">
              <span className="font-bold">Trending Topics</span>
              {questionData && questionData.length > 0 ? (
                <InfiniteScroll
                  dataLength={questionData.length}
                  next={moreQuestions}
                  hasMore={!isFetchEnd ? true : false}
                  endMessage={
                    <>
                      <span>Showing {questionData.length} Books.</span>
                    </>
                  }
                  loader={<h4>Retrieving more Books...</h4>}
                >
                  <div className="py-8 grid grid-cols-2 gap-2">
                    {questionData.map(question => {
                      return (
                        <div
                          className={`p-4 rounded-2xl border-2 flex flex-col items-center px-6 py-6`}
                        >
                          <span>{question.is_answered}</span>
                        </div>
                      );
                    })}
                  </div>
                </InfiniteScroll>
              ) : (
                <span className="mt-4">Failed to load topics.</span>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
