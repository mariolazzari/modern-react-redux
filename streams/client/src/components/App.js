import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Fragment>
          <Header />
          <Route path="/" component={StreamList} exact />
          <Route path="/new" component={StreamCreate} />
          <Route path="/edit" component={StreamEdit} />
          <Route path="/delete" component={StreamDelete} />
          <Route path="/show" component={StreamShow} />
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
