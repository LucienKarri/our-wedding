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
import { useUserInfo } from "../../contexts";

const validationSchema = yup.object({
  visit: yup.string().required("это поле очень важно для нас"),
});

export const Questions = () => {
  const guest = useUserInfo();
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
      const data = {
        ...values,
        visit: values.visit === "true",
        guest: guest.name,
        pozivnoy: guest.pozivnoy,
      };
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
          {`Пожалуйста, ${guest.family === "true" ? "заполните" : guest.sex === "male" ? "заполни" : "заполни"} анкету ниже - это поможет нам сделать праздник
          более уютным`}
        </Typography>
        <Typography align="center" variant="h5">
          Какой алкоголь предпочитаете?
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
          {`${guest.family === "true" ? "Планируете" : guest.sex === "male" ? "Планируешь" : "Планируешь"} ли ${guest.family === "true" ? "вы" : guest.sex === "male" ? "ты" : "ты"} присутствовать?`}
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
              label={`да, ${guest.family === "true" ? "мы" : guest.sex === "male" ? "я" : "я"} обязательно ${guest.family === "true" ? "будем" : guest.sex === "male" ? "буду" : "буду"}!`}
              value="true"
            />
            <FormControlLabel
              control={<Radio />}
              label={`нет, к сожалению ${guest.family === "true" ? "мы" : guest.sex === "male" ? "я" : "я"} не ${guest.family === "true" ? "сможем" : guest.sex === "male" ? "смогу" : "смогу"} посетить мероприятие, но мысленно ${guest.family === "true" ? "отпразднуем" : guest.sex === "male" ? "отпраздную" : "отпраздную"} с вами этот день`}
              value="false"
            />
            {errors.visit && <FormHelperText>{errors.visit}</FormHelperText>}
          </RadioGroup>
        </Box>
        <Typography align="center" variant="h5">
          {`${guest.family === "true" ? "Расскажите" : guest.sex === "male" ? "Расскажи" : "Расскажи"} нам, если вдруг ${guest.family === "true" ? "кто-то из вас будет отсутствовать" : guest.sex === "male" ? "ты будешь не один" : "ты будешь не одна"}, или просто ${guest.family === "true" ? "добавьте" : guest.sex === "male" ? "добавь" : "добавь"} чего не хватило в анкете`}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <TextField
            name="other"
            onChange={handleChange}
            value={values.other}
            multiline
            placeholder="Рассказывать сюда!"
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
