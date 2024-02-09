import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from '../../../icons';

export default function PostResponse() {
  return (
    <div>
      <div className="flex justify-between items-center py-2">
        <div className="flex gap-1">
          <div className="bg-blue-500 h-5 w-5 rounded-full flex items-center justify-center">
            <ThumbsUpIcon />
          </div>
          <span className="text-sm">25</span>
        </div>
        <div className="text-sm text-gray-500 hover:underline" role="button">
          190 comments
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className="grid grid-cols-2 py-1 gap-1">
        <button className="hover:bg-gray-200 text-sm py-1.5 rounded-md font-medium text-blue-500">
          <div className="flex gap-1 justify-center items-center">
            <ThumbsUpAltIcon className="fill-blue-500" />
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
