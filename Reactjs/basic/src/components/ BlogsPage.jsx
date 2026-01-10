import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    desc: "Learn how hooks simplify state management and side effects in React.",
    image: "https://via.placeholder.com/120",
  },
  {
    id: 2,
    title: "CSS Flexbox Deep Dive",
    desc: "Master modern layouts using Flexbox with practical examples.",
    image: "https://via.placeholder.com/120",
  },
  {
    id: 3,
    title: "JavaScript Performance Tips",
    desc: "Optimize your JS code for faster and smoother applications.",
    image: "https://via.placeholder.com/120",
  },
];

export default function BlogsPage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      {/* Header */}
      <header className="header">
        <h2 className="brand">Brand Name</h2>
        <i
          className={`fa ${
            theme === "light" ? "fa-moon-o" : "fa-sun-o"
          } theme-icon`}
          onClick={toggleTheme}
        />
      </header>

      {/* Blog List */}
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt="blog" className="blog-image" />

            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
            </div>

            <button className="like-btn">
              <i className="fa fa-heart-o" /> Like
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
