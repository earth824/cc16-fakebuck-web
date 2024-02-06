import ProfileContainer from '../features/profile/components/ProfileContainer';
import ProfileContextProvider from '../features/profile/contexts/ProfileContext';

export default function ProfilePage() {
  return (
    <ProfileContextProvider>
      <ProfileContainer />
    </ProfileContextProvider>
  );
}
