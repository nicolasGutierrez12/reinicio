import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LogoUni from "../assets/img/LogoUni.png";

import "../style/LoginStyle.css";

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const EndAdorment = () => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  };
  return (
    <form>
      <img src={LogoUni} className="logouni" />
      <Grid
        container
        spacing={2}
        direction="column"
        style={{
          padding: "30px",
          backgroundColor: "rgb(243, 243, 243)",
          width: "40ch",
          boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Grid item sx={6} className="botones">
          <TextField
            name="email"
            label="Correo electrónico"
            variant="standard"
            autoComplete="off"
            sx={{ width: "30ch" }}
          />
        </Grid>
        <Grid item sx={6} className="botones">
          <TextField
            name="password"
            label="Contraseña"
            variant="standard"
            type={visible ? "text" : "password"}
            InputProps={{
              endAdornment: <EndAdorment />,
            }}
            autoComplete="off"
            sx={{ width: "30ch" }}
          />
        </Grid>
        <Grid item sx={6} className="botones">
          <Button variant="contained" type="submit" sx={{ width: "30ch" }}>
            Iniciar sesión
          </Button>
        </Grid>
        <Grid item sx={6} className="botones">
          <Button variant="contained" type="submit" sx={{ width: "30ch" }}>
            ¿olvido su contraseña?
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
