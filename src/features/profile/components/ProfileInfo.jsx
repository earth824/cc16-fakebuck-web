import Avatar from '../../../components/Avatar';
import useProfile from '../hooks/use-profile';

export default function ProfileInfo() {
  const {
    profileUserFriends,
    profileUser: { firstName, lastName }
  } = useProfile();
  return (
    <div className="flex flex-col items-center gap-2 sm:items-start sm:mb-4">
      <h5 className="text-3xl font-semibold">
        {firstName} {lastName}
      </h5>
      <span className="text-gray-500 font-medium">
        {profileUserFriends.length} Friends
      </span>
      <div className="flex -space-x-2">
        {profileUserFriends.map(el => (
          <Avatar key={el.id} size={2} src={el.profileImage} />
        ))}
      </div>
    </div>
  );
}
