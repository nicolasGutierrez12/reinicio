import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LogoConsultoria from "../assets/img/LogoConsultoria.png";

const LoginInformation = () => {
  return (
    <Stack spacing={10} direction="column" style={{ margin: "60px" }}>
      <Typography variant="h4" className="centrarItems">
        TITULO DE PRUEBA
      </Typography>
      <Typography
        variant="h6"
        className="centrarItems"
        style={{ fontSize: "17px" }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Typography>
      <Typography variant="h6" className="centrarItems">
        link de consultoria
      </Typography>
      <img src={LogoConsultoria} className="logoConsultoria" />
    </Stack>
  );
};

export default LoginInformation;
