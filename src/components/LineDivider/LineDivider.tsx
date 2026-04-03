import { Box } from "@mui/material";
import heartDividerImg from "../../assets/heart-divider-2.png";

export const LineDivider = () => {
  return (
    <Box sx={{ padding: "48px 0" }}>
      <img src={heartDividerImg} style={{ width: "100%" }} />
    </Box>
  );
};
