import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";


export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "I love react",
    "LOL",
    "I'm learning React too!",
    "Nice 😁",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.code === "Enter" && event.ctrlKey || event.metaKey) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est obcaecati, quisquam dolores aut quas, animi ad pariatur minima perferendis natus explicabo rerum. Qui, inventore! Quas unde earum harum quaerat!" />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/ghoes18.png" alt="Gonçalo Guimarães" />
          <textarea 
          id="tweet"
          value={newAnswer}
          placeholder="Tweet your answer"
          onKeyDown={handleHotkeySubmit}
          onChange={(event) => {
            setNewAnswer(event.target.value);
          }} />
        </label>
        <button type="submit">Answer</button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
