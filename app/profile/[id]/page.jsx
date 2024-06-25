"use client";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Profile from "@components/profile";
import PromptCard from "@components/PromptCard";

const UserProfile = () => {
  const { id } = useParams();
  const router = useRouter();
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
