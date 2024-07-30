/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      let response = await fetch("https://dev.to/api/articles");
      let data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

    const loadmore = async () => {
        let response = await fetch(`https://dev.to/api/articles?page=${posts.length / 30 + 1}`);
        let data = await response.json();
        setPosts([...posts, ...data]);
    }

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}

        {/* Load More */}
        <button className="bg-blue-600 text-white p-2 rounded-md" onClick={loadmore}>
            Load More
        </button>
    </div>
  );
}



const PostCard = ({ post }) => {
    return (
        <div className="bg-white p-4 shadow-md">
            <Link to={post.path}><h2 className="text-xl font-bold">{post.title}</h2></Link>
            <p className="text-gray-600">{post.description}</p>
            <div className="flex justify-between items-center mt-4">
            <a href={post.url} target="_blank" className="text-blue-600">Read more</a>
            <div className="flex items-center">
                <img src={post.user.profile_image_90} alt={post.user.name} className="w-8 h-8 rounded-full" />
                <p className="text-gray-600 ml-2">{post.user.name}</p>
            </div>
            </div>
        </div>
    );
    };
