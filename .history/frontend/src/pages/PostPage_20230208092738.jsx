import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const params = useParams;
  const { slug } = params;
  return (
    <div>Post</div>
  )
}

export default PostPage;