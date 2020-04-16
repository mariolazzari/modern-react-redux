import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions";

const PostList = () => {
  const { posts } = useSelector((state) => ({
    posts: state.posts,
  }));

  const dispatch = useDispatch();

  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return <div>Posts: {posts.length} </div>;
};

export default PostList;
