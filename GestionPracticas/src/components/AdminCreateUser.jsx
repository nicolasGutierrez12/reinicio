import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Container,
  Card,
  CardMedia,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PhotoIcon from "@mui/icons-material/Photo";

const AdminCreateUser = () => {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const EndAdorment = () => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <form>
        <Grid
          container
          spacing={2}
          style={{
            padding: "30px",
            backgroundColor: "rgb(243, 243, 243)",
            boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              {selectedImage ? (
                <Card
                  sx={{
                    width: 130,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                  }}
                  onClick={() =>
                    document.getElementById("upload-photo").click()
                  }
                >
                  <CardMedia
                    component="img"
                    height="130"
                    image={selectedImage}
                  />
                </Card>
              ) : (
                <label htmlFor="upload-photo">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoIcon fontSize="large" />
                  </IconButton>
                </label>
              )}
              <input
                type="file"
                accept="image/*"
                id="upload-photo"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="user"
              label="Usuario"
              variant="standard"
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="password"
              label="Contraseña"
              variant="standard"
              type={visible ? "text" : "password"}
              InputProps={{
                endAdornment: <EndAdorment />,
              }}
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="fullName"
              label="Nombre completo"
              variant="standard"
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              label="Telefono"
              variant="standard"
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Correo electrónico"
              variant="standard"
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="address"
              label="Direccion"
              variant="standard"
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="profession"
              label="Profesion"
              variant="standard"
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="role"
              label="Rol"
              variant="standard"
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="practice"
              label="Tipo de practica"
              variant="standard"
              autoComplete="off"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" type="submit" sx={{ width: "100%" }}>
              Crear Usuario
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AdminCreateUser;
