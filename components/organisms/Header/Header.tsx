import Logo from "@/components/molecules/logo/Logo";
import { AppBar, Toolbar, Container } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(65, 65, 65, 0.308)",
        backdropFilter: "blur(9px)",
      }}
    >
      <Toolbar disableGutters>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          maxWidth="xl"
        >
          <Logo />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
