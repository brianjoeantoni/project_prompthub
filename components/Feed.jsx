"use client";

import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import { useRouter } from "next/navigation"; // Ensure this is imported

// Debounce function to delay the search execution
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Feed = () => {
  const router = useRouter(); // Initialize useRouter
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Debounced search function
  const handleSearchChange = debounce((e) => {
    setSearchText(e.target.value);
  }, 300);

  const handleTagClick = (tag) => {
    setSearchText(tag);
  };

  const handleCardClick = ({ id, username }) => {
    router.push(`/profile/${id}?username=${username}`);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data); // Initialize filtered posts
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filterPosts = () => {
      const trimmedSearchText = searchText.trim().toLowerCase();

      if (!trimmedSearchText) {
        setFilteredPosts(posts);
        return;
      }

      const filtered = posts.filter(
        (post) =>
          post.prompt.toLowerCase().includes(trimmedSearchText) ||
          post.tag.toLowerCase().startsWith(trimmedSearchText) ||
          post.creator.email.toLowerCase().startsWith(trimmedSearchText) ||
          post.creator.username.toLowerCase().startsWith(trimmedSearchText)
      );
      setFilteredPosts(filtered);
    };

    filterPosts();
  }, [searchText, posts]);

return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username or email or prompts!"
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      <div className="mt-16 prompt_layout">
        {filteredPosts.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
            handleCardClick={handleCardClick} // Pass handleCardClick here
          />
        ))}
      </div>
    </section>
  );
};

export default Feed;
