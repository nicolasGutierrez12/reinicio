import { Grid } from "@mui/material";
import "../style/LoginStyle.css";
import LoginInformation from "../components/LoginInformation";
import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <div className="contenedor">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            background: "#00023A",
          }}
        >
          <LoginInformation />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          className="centrarForm"
          style={{ height: "100vh" }}
        >
          <LoginForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
