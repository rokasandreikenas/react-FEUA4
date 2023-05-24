import { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => {
        // Kai yra atnaujinamas state, kodas rerenderinas ir nuskaitomas iš naujo
        setPosts(response);
      })
      .catch((error) => console.error(error));
    // useEffect hooksas, be dependency array kviečiamas kiekvieną render ciklą
    // useEffect hooksas, su tuščiu dependency array yra paleidžiamas tik vieną kartą
  }, []);

  return (
    <div className="posts">
      <Post title="Test" body="Hello world" />
      <Post title={posts[0].title} body={posts[0].body} />
      <Post title={posts[1].title} body={posts[1].body} />
    </div>
  );
};

export default Posts;
