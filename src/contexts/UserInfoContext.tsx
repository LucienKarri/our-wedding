import { Box, CircularProgress } from "@mui/material";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import { useSearchParams } from "react-router";

const UserInfoContext = createContext<{
  name: string;
  sex: string | null;
  family: string;
  pozivnoy: string;
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

  const [data, setData] = useState<{
    name: string;
    sex: string | null;
    family: string;
    pozivnoy: string;
  } | null>(null);

  useEffect(() => {
    async function loadGuest() {
      const res = await fetch(
        `/api/guest?pozivnoy=${searchParams.get("pozivnoy")}`,
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ошибка загрузки");
      }

      setData({ ...data.guest, pozivnoy: searchParams.get("pozivnoy") });
      return data.guest;
    }
    loadGuest();
  }, [searchParams]);

  if (!data) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <UserInfoContext.Provider value={data}>{children}</UserInfoContext.Provider>
  );
};
