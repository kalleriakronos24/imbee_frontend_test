export type QuestionResponse = {
  items: {
    title: string;
    link: string;
    tags: string[];
    owner: {
      profile_image: string;
      display_name: string;
      link: string;
    };
    is_answered: boolean;
    answer_count: number;
    view_count: number;
    score: number;
  }[];
};

export type TQuestions = {
  title: string;
  link: string;
  tags: string[];
  owner: {
    profile_image: string;
    display_name: string;
    link: string;
  };
  is_answered: boolean;
  answer_count: number;
  view_count: number;
  score: number;
};
