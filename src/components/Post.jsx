import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import RelatedPosts from "./RelatedPosts";
import Footer from "./Footer";

const Post = () => {
  const { userId, id } = useParams();

  const [post, setPost] = useState({});
  useEffect(() => {
    async function fetchPost() {
      let response = await fetch(
        `https://dev.to/api/articles/${userId + "/" + id}`
      );
      let data = await response.json();
      setPost(data);
    }
    fetchPost();
  }, [id]);

  if (!post.title) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/SH20RAJ/ShowdownCSS@main/showdown.css"
      ></link>
      <div className="container  md:w-3/4 mx-auto">
        <div className="post shadow-sm">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-gray-600">{post.description}</p>
          <div className="flex justify-between items-center mt-4">
            <a href={post.url} target="_blank" className="text-blue-600">
              Read more
            </a>
            <Link to={`/${userId}`} className="text-blue-600">
              <div className="flex items-center">
                <img
                  src={post.user.profile_image_90}
                  alt={post.user.name}
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-gray-600 ml-2">{post.user.name}</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="postcontent showdowncontainer">
          <div
            dangerouslySetInnerHTML={{ __html: post.body_html }}
            className="mt-4"
          ></div>
        </div>
        <div className=" flex ">
          <a href="https://visitorbadge.io/status?path=DevArt">
            <img src="https://api.visitorbadge.io/api/combined?path=DevArt&countColor=%23263759" />
          </a>
          <a href="https://visitorbadge.io/status?path=/lazypro/when-to-consider-design-patterns-45np">
            <img
              loading="lazy"
              className="inline-block"
              src={"https://api.visitorbadge.io/api/visitors?path=" + post.path}
            />
          </a>
        </div>
      </div>

      <RelatedPosts username={userId} />
      <Footer />
    </>
  );
};

export default Post;
