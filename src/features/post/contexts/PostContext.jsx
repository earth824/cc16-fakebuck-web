import { createContext } from 'react';
import * as postApi from '../../../api/post';

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const createPost = async formData => {
    await postApi.createPost(formData);
  };

  return (
    <PostContext.Provider value={{ createPost }}>
      {children}
    </PostContext.Provider>
  );
}
