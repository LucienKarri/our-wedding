import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from "react";
import { useSearchParams } from "react-router";

const UserInfoContext = createContext<string | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useUserInfo = () => {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw new Error(`Can not "useUserInfo" outside of the "UserInfoProvider"`);
  }

  return context;
};

export const UserInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchParams] = useSearchParams({ guestName: "Карина и Дима" });

  const guestName = searchParams.get("guestName");

  return (
    <UserInfoContext.Provider value={guestName}>
      {children}
    </UserInfoContext.Provider>
  );
};
