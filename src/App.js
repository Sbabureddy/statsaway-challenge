import React, { Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader";

import { fetchData } from "./shared/API";

const resource = fetchData();

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ProfileData />
    </Suspense>
  );
}

const ProfileData = () => {
  const posts = resource.read();

  return (
    <div className="card card-body my-3">
      {posts.map(post => (
        <ul key={post.id} className="list-unstyled">
          <li>
            <h3>{post.title}</h3>
          </li>
          <li>
            <h4>{post.body}</h4>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;
