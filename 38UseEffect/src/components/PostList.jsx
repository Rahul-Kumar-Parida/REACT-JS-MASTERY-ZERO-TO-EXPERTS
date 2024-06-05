import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/posts-List-store";
import WelcomeMSG from "./WelcomeMSG";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  //😒 useState()
  // const [dataFetched, setDataFetched] = useState(false);
  // if (!dataFetched) {
  // fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => addInitialPosts(data.posts));
  //   setDataFetched(true);
  // }

  const [fetching, setFetching] = useState(false);

  //😇useEffect()
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("Cleaning");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMSG />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
