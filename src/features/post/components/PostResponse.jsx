import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from '../../../icons';
import useAuth from '../../../hooks/use-auth';
import usePost from '../hooks/use-post';
import { useState } from 'react';

export default function PostResponse({ post }) {
  const { totalComment, likes } = post;

  const { toggleLike } = usePost();
  const { authUser } = useAuth();

  const [totalLike, setTotalLike] = useState(post.totalLike);
  const [isLiked, setIsLiked] = useState(
    likes.find(like => like.userId === authUser.id)
  );

  const handleClickLikeButton = async () => {
    await toggleLike(post.id);
    setTotalLike(prev => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(prev => !prev);
  };

  return (
    <div>
      {!(totalComment === 0 && totalLike === 0) && (
        <div className="flex justify-between items-center py-2">
          {totalLike > 0 && (
            <div className="flex gap-1">
              <div className="bg-blue-500 h-5 w-5 rounded-full flex items-center justify-center">
                <ThumbsUpIcon />
              </div>
              <span className="text-sm">{totalLike}</span>
            </div>
          )}
          {totalComment > 0 && (
            <div
              className="text-sm text-gray-500 hover:underline"
              role="button"
            >
              {totalComment} comments
            </div>
          )}
        </div>
      )}
      <hr className="border-gray-200" />
      <div className="grid grid-cols-2 py-1 gap-1">
        <button
          onClick={handleClickLikeButton}
          className={`hover:bg-gray-200 text-sm py-1.5 rounded-md font-medium ${
            isLiked ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <div className="flex gap-1 justify-center items-center">
            <ThumbsUpAltIcon
              className={isLiked ? 'fill-blue-500' : 'fill-gray-500'}
            />
            <span>Like</span>
          </div>
        </button>
        <button className="hover:bg-gray-200 text-sm py-1.5 rounded-md font-medium text-gray-500">
          <div className="flex gap-1 justify-center items-center">
            <MessageIcon className="fill-gray-500" />
            <span>Comment</span>
          </div>
        </button>
      </div>
    </div>
  );
}
