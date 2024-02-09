import { ThumbsUpIcon } from '../../../icons';

export default function PostResponse() {
  return (
    <div>
      <div className="py-2 flex justify-between items-center">
        <div className="flex gap-1">
          <div className="h-5 w-5 flex items-center justify-center bg-blue-500 rounded-full">
            <ThumbsUpIcon />
          </div>
          <small>3</small>
        </div>
        <div className="text-sm text-gray-500" role="button">
          8 comments
        </div>
      </div>
      <hr />
      <div className="py-1 grid grid-cols-2 gap-1">
        <button className="hover:bg-gray-200 py-1.5 text-sm rounded text-blue-500 font-medium">
          Like
        </button>
        <button className="hover:bg-gray-200 py-1.5 text-sm rounded text-blue-500 font-medium">
          Comment
        </button>
      </div>
    </div>
  );
}
