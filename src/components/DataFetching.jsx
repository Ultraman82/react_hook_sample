import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setpost] = useState([]);
  const [id, setid] = useState(1);
  const [idFromButton, setidFromButton] = useState(1);
  const handleClick = () => {
    setidFromButton(id);
  };
  //fetchdata on load
  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then(res => {
        setpost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idFromButton]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={e => {
          setid(e.target.value);
        }}
      />
      <button onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map(post => (
          <li key={post.id}> {post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
