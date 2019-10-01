import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovelCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovelCard>
        <CommentDetail
          author="Mario"
          time="Today 5:00"
          content="Nide blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovelCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
