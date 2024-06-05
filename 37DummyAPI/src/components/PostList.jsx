import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/posts-List-store";
import WelcomeMSG from "./WelcomeMSG";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMSG onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
