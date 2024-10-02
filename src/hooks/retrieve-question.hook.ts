import { QuestionResponse, TQuestions } from "@@/@types/question.types";
import axios from "axios";
import { useEffect, useState } from "react";

const useRetrieveQuestion = () => {
  const [questionData, setQuestionData] = useState<TQuestions[]>();
  const [steps, setSteps] = useState<number>(20);
  const [isFetchEnd, setIsFetchEnd] = useState(false);

  async function setQuestionSteps(paramSteps: number, topic: string) {
    const step = steps + 10;
    try {
      const data = await axios.get(
        `https://api.stackexchange.com/2.3/questions?pagesize=${step || 10}&order=desc&sort=activity&tagged=${topic || "js"}&site=stackoverflow`
      );
      const response = data.data as QuestionResponse;
      if (response) {
        const data = response.items;
        if (data.length > 0) {
          setQuestionData(data);
          setSteps(step);
        }
        if (paramSteps) {
          setIsFetchEnd(true);
        }
      }
    } catch (error) {
      console.log(`Error when retrieve questions ${JSON.stringify(error)}`);
    }
  }

  async function getQuestions(paramSteps: number, topic: string) {
    try {
      const data = await axios.get(
        `https://api.stackexchange.com/2.3/questions?pagesize=${paramSteps || 10}&order=desc&sort=activity&tagged=${topic || "js"}&site=stackoverflow`
      );
      const response = data.data as QuestionResponse;

      if (response) {
        const data = response.items;
        if (data.length > 0) {
          setQuestionData(data);
        }
      }
    } catch (error) {
      console.log(`Error when retrieve questions ${JSON.stringify(error)}`);
      return;
    }
  }

  useEffect(() => {
    getQuestions(10, "js");
  }, []);

  return {
    questionData,
    setQuestionSteps,
    isFetchEnd,
    getQuestions,
  };
};

export default useRetrieveQuestion;
