import { TopicResponse, TTopic } from "../@types/topic.types";
import axios from "axios";
import { useEffect, useState } from "react";

const useRetrieveTopics = () => {
  const [topicData, setTopicData] = useState<TTopic[]>([]);

  async function getTopics() {
    try {
      const data = await axios.get(
        `https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&site=stackoverflow`
      );
      const response = data.data as TopicResponse;
      if (response) {
        const data = response.items;
        if (data.length > 0) {
          setTopicData(data);
        }
      }
    } catch (error) {
      console.log(`Error when retrieve topics ${JSON.stringify(error)}`);
      return;
    }
  }

  useEffect(() => {
    getTopics();
  }, [topicData]);

  return {
    topicData,
    setTopicData,
  };
};

export default useRetrieveTopics;
