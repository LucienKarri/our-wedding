import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from "react";
import { useSearchParams } from "react-router";

const UserInfoContext = createContext<{
  name: string;
  sex: string | null;
  family: string;
} | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useUserInfo = () => {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw new Error(`Can not "useUserInfo" outside of the "UserInfoProvider"`);
  }

  return context;
};

export const UserInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchParams] = useSearchParams();

  const value: {
    name: string;
    sex: string | null;
    family: string;
  } = {
    name: searchParams.get("name") || "",
    sex: searchParams.get("sex") || null,
    family: searchParams.get("family") || "",
  };

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};
