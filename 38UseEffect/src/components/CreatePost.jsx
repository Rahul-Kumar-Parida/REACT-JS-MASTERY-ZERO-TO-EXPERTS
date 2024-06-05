import { useContext, useRef } from "react";
import { PostList } from "../store/posts-List-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = " ";
    postTitleElement.current.value = " ";
    postBodyElement.current.value = " ";
    reactionsElement.current.value = " ";
    tagsElement.current.value = " ";
    addPost(userId, postBody, postTitle, reactions, tags);
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          ENTER YOUR USER ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="Your User ID!!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          POST TITLE
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
          placeholder="How are You Feeling Today??"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          POST CONTENT
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          ref={postBodyElement}
          placeholder="Tell us more about it!!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          NUMBER OF REACTIONS
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
          placeholder="How Many People reacted To this Post??"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          ENTER YOUR HASHTAG HERE.
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please Enter tags using Space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        CREATE POST
      </button>
    </form>
  );
};

export default CreatePost;
