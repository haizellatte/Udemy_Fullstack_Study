import { createContext, useContext, useState } from "react";

const initalValue = {
  nickname: "",
  setNickname: () => {},
  likedMovies: [],
  setLikedMovies: () => {},
  likedMoviesId: new Set(),
  setLikedMoviesId: () => {},
};

const ProfileContext = createContext(initalValue);

export function ProfileProvider({ children }) {
  const [nickname, setNickname] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);
  const [likedMoviesId, setLikedMoviesId] = useState(new Set());

  const value = {
    nickname,
    setNickname,
    likedMovies,
    setLikedMovies,
    likedMoviesId,
    setLikedMoviesId,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
