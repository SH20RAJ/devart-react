import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostCard } from "./Posts";

export default function UserPage() {
  const { userId } = useParams();
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dev.to/api/articles/latest/?username=${userId}&per_page=110&page=${page}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [page, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts) {
    return <div>No posts found.</div>;
  }

  return (
    <div className="flex flex-col ">
      <h1>{userId}</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

        {/* Load More */}
      </div>
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
}
