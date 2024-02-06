import { useState } from 'react';
import { createContext } from 'react';

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileUser, setProfileUser] = useState({
    id: 5,
    firstName: 'Jim',
    lastName: 'Ryan',
    profileImage:
      'https://images.pexels.com/photos/105808/pexels-photo-105808.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage:
      'https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  });

  const [profileUserFriends, setProfileUserFriends] = useState([
    {
      id: 6,
      firstName: 'Jo',
      lastName: 'Nemeth',
      profileImage:
        'https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&w=600',
      coverImage: null
    },
    {
      id: 7,
      firstName: 'Bob',
      lastName: 'Smith',
      profileImage:
        'https://images.pexels.com/photos/5967959/pexels-photo-5967959.jpeg?auto=compress&cs=tinysrgb&w=600',
      coverImage: null
    }
  ]);

  const [relationshipToAuthUser, setRelationshipToAuthUser] = useState('ME');

  return (
    <ProfileContext.Provider
      value={{ profileUser, profileUserFriends, relationshipToAuthUser }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
