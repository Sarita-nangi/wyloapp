// src/components/PostList.js
import React from 'react';
import Post from './Post';

const PostList = ({ posts, onEdit }) => {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default PostList;

