IMBEE FRONTEND (off site) test

Tools Required:

- React
- Typescript
- Vite

How to run:

- npm install (if error, npm install legacy-peer-deps)
- npm run dev

Drawbacks / Issues:

- My network now got blacklisted for time being due to "too many request" to the API, which i am now short of time to simulate the data.
- When user load for the first time, it doesn't highlight the top 1 trending topic
- User search is applied after pressing the "Apply" button
- Not that responsive / mobile doesn't supported yet. Please use desktop for better experiences
- When user clicked the topic, it doesn't give a highlight to the button but it applies the question based on the pressed topic.
- I don't use Redux that i may thinking it would redundant alot of my current project. Because i don't see the usage for now
- No Animations
- No Spinner or Loader, it's just text based.

Key features:

- Infinite scroll questions with a limit 10 or 10 per new loads
- Question or Topic search by pressing "Apply" button next to the search
- Shows top 10 trending topics / tags
- Highlight answers, scores based on the test requirement
- When clicking questions, it will redirect to the original link of the question
- Hook based lifecycles
- Fully Typed language
