"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Profile from "@components/Profile";

const UserProfile = () => {
  const { id } = useParams();
  const searchParams = useSearchParams(); // used because there is no endpoint that gives username
  const username = searchParams.get("username"); // used because there is no endpoint that gives username

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, [id]);

  return (
    <Profile
      name={`${username}'s`}
      desc={`Welcome to ${username}'s profile page`}
      data={posts}
    />
  );
};

export default UserProfile;
