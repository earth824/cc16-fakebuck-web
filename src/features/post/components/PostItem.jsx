import { Link } from 'react-router-dom';
import Avatar from '../../../components/Avatar';
import Dropdown from './Dropdown';
import PostResponse from './PostResponse';

export default function PostItem() {
  return (
    <div className="bg-white rounded-lg px-4 pt-3 shadow">
      <div className="flex items-center">
        <div className="flex-1 flex gap-2 items-center">
          <Link to="/">
            <Avatar />
          </Link>
          <div>
            <Link to="/" className="text-sm font-medium hover:underline">
              Tom Jerry
            </Link>
            <small className="block text-xs text-gray-500">1h</small>
          </div>
        </div>
        <Dropdown />
      </div>

      <div className="mt-3">
        <span className="text-sm">Post title</span>
        <div className="-mx-4 mt-3">
          <img
            src="https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg"
            alt="post"
          />
        </div>
      </div>

      <PostResponse />
    </div>
  );
}
