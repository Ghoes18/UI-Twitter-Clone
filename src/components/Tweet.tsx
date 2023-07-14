import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";

import "./Tweet.css";

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/ghoes18.png" alt="Gonçalo Guimarães" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Gonçalo Guimarães</strong>
          <span>@goncalogui</span>
        </div>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button>
            <ChatCircle />
            20
          </button>
          <button>
            <ArrowsClockwise />
            20
          </button>
          <button>
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
