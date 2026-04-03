import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { SectionContainer } from "../SectionContainer";

const validationSchema = yup.object({
  visit: yup.string().required("это поле очень важно для нас"),
});

export const Questions = () => {
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      vodka: false,
      visky: false,
      whiteVine: false,
      redVine: false,
      jin: false,
      visit: "",
      other: "",
      rom: false,
      bableVine: false,
      vermut: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log("err", errors);
      const data = { ...values, visit: values.visit === "true" };
      // console.log("SUBMIT!", data);
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Ошибка отправки");
      }

      return result;
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <SectionContainer>
        <Typography align="center" variant="h5">
          Пожалуйста, заполните анкету ниже - это поможет нам сделать праздник
          более уютным
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              gap: "8px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox value={values.vodka} onChange={handleChange} />
              }
              name="vodka"
              label="водка"
            />
            <FormControlLabel
              control={
                <Checkbox value={values.visky} onChange={handleChange} />
              }
              name="visky"
              label="виски"
            />
            <FormControlLabel
              control={<Checkbox value={values.rom} onChange={handleChange} />}
              name="rom"
              label="ром"
            />
            <FormControlLabel
              control={
                <Checkbox value={values.vermut} onChange={handleChange} />
              }
              name="vermut"
              label="вермут"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              gap: "8px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox value={values.whiteVine} onChange={handleChange} />
              }
              name="whiteVine"
              label="вино белое"
            />
            <FormControlLabel
              control={
                <Checkbox value={values.redVine} onChange={handleChange} />
              }
              name="redVine"
              label="вино красное"
            />
            <FormControlLabel
              control={<Checkbox value={values.jin} onChange={handleChange} />}
              name="jin"
              label="джин"
            />
            <FormControlLabel
              control={
                <Checkbox value={values.bableVine} onChange={handleChange} />
              }
              name="bableVine"
              label="вино игристое"
            />
          </Box>
        </Box>
        <Typography align="center" variant="h5">
          Планируете ли вы присутствовать?
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <RadioGroup
            name="visit"
            value={values.visit}
            onChange={handleChange}
            sx={{ gap: "8px" }}
          >
            <FormControlLabel
              control={<Radio />}
              label="да, мы обязательно будем!"
              value="true"
            />
            <FormControlLabel
              control={<Radio />}
              label="нет, к сожалению мы не сможем посетить мероприятие, но мысленно отпразднуем с вами этот день"
              value="false"
            />
            {errors.visit && <FormHelperText>{errors.visit}</FormHelperText>}
          </RadioGroup>
        </Box>
        <Typography align="center" variant="h5">
          На случай, если анкеты не хватило
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <TextField
            name="other"
            onChange={handleChange}
            value={values.other}
            multiline
            placeholder="Здесь вы можете оставить для нас послание или внести уточнения"
            rows={4}
          />
        </Box>
        <Button fullWidth variant="contained" type="submit">
          поделиться
        </Button>

        <Typography variant="h4" sx={{ paddingTop: "36px" }}>
          До встречи на празднике!
        </Typography>
      </SectionContainer>
    </form>
  );
};
