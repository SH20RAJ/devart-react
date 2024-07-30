/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { PostCard } from "./Posts";

export default function RelatedPosts({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      let response = await fetch(
        `https://dev.to/api/articles?username=${username}`
      );
      let data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [username]);

  if(posts.length === 0) return null;

  return <>
  <div className="container  mx-auto">
    <h2 className="text-2xl font-bold mt-8">Related Posts</h2>
    <hr />
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
        ))}
        </div>
  </div>
  </>;
}
