import Avatar from '../../../components/Avatar';
import Dropdown from './Dropdown';
import PostResponse from './PostResponse';

export default function PostItem() {
  return (
    <div className="bg-white rounded-lg px-4 pt-3">
      <div className="flex mb-3 items-center">
        <div className="flex flex-1">
          <Avatar />
          <div className="pl-2">
            <h5 className="text-sm font-medium">Ken Doe</h5>
            <small className="text-xs text-gray-500 block">1h</small>
          </div>
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
      <div>
        <span className="text-sm">Test content</span>
        <div className="-mx-4 mt-3">
          <img
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
            alt="post"
          />
        </div>
      </div>

      <PostResponse />
    </div>
  );
}
