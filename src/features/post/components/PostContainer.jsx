import PostItem from './PostItem';

export default function PostContainer() {
  return (
    <div className="flex flex-col gap-4">
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}
