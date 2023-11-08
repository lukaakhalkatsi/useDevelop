import { useEffect, useState } from "react";
import axios from "axios";
import FormHeader from "./FormHeader";
import "../styling/api.css";

const ApiPage = () => {
  const userName = localStorage.getItem("userName");
  const selectedFile = localStorage.getItem("selectedPhoto");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Set loading to true while fetching data
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`
      );
      setPosts(response.data);
      setLoading(false); // Set loading to false when data is loaded
    };

    fetchPosts();
  }, [currentPage, postsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPosts = posts.map((post) => (
    <div key={post.id} className="card">
      <h2 className="title">{post.title}</h2>
      <p className="bodyStyle">{post.body}</p>
    </div>
  ));

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <FormHeader
          userName={userName || "Default Name"}
          selectedFile={selectedFile}
        />
      </div>
      <div className="post-list">
        {loading ? ( // Display loading indicator if loading is true
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          renderPosts
        )}
        <div className="pagination">
          {Array.from({ length: Math.ceil(100 / postsPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                style={
                  index + 1 === currentPage ? activeButtonStyle : buttonStyle
                }
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

const buttonStyle = {
  background: "#007bff",
  color: "#fff",
  border: "none",
  margin: "0 5px",
  cursor: "pointer",
  padding: "5px 10px",
  borderRadius: "5px",
};

const activeButtonStyle = {
  ...buttonStyle,
  background: "#0056b3",
};

export default ApiPage;
