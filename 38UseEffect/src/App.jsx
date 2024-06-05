import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/posts-List-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="Div-Container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="Content">
          <HeaderBar></HeaderBar>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <FooterBar></FooterBar>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
