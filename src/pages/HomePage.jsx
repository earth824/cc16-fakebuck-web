import CreatePostContainer from '../features/post/components/CreatePostContainer';
import PostContainer from '../features/post/components/PostContainer';

export default function HomePage() {
  return (
    <div className="max-w-[44rem] mx-auto px-4 py-6">
      <div className="flex flex-col gap-4">
        <CreatePostContainer />
        <PostContainer />
      </div>
    </div>
  );
}
