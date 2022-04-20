import { Button, ThemeProvider, Box, defaultTheme } from "@husky-ui/react";
import { MdHome } from "react-icons/md";

export default function Web() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          width: "100px",
          height: 200,
          backgroundColor: "green",
        }}
      ></Box>
      hello
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <Button leftIcon={<MdHome />} size="small" color="primary">
            Button
          </Button>
          <Button size="small" color="secondary">
            Button
          </Button>
          <Button size="small" color="success">
            Button
          </Button>
          <Button size="small" color="info">
            Button
          </Button>
          <Button size="small" color="danger">
            Button
          </Button>
          <Button size="small" color="warning">
            Button
          </Button>
          <Button size="small" color="light">
            Button
          </Button>
          <Button size="small" color="dark">
            Button
          </Button>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button
            leftIcon={<MdHome />}
            rightIcon={<MdHome />}
            fullWidth
            variant="solid"
            color="primary"
          >
            Button
          </Button>
          <Button variant="solid" color="secondary">
            Button
          </Button>
          <Button variant="solid" color="success">
            Button
          </Button>
          <Button variant="solid" color="info">
            Button
          </Button>
          <Button variant="solid" color="danger">
            Button
          </Button>
          <Button variant="solid" color="warning">
            Button
          </Button>
          <Button variant="solid" color="light">
            Button
          </Button>
          <Button variant="solid" color="dark">
            Button
          </Button>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button leftIcon={<MdHome />} size="large" color="primary">
            Button
          </Button>
          <Button size="large" color="secondary">
            Button
          </Button>
          <Button size="large" color="success">
            Button
          </Button>
          <Button size="large" color="info">
            Button
          </Button>
          <Button size="large" color="danger">
            Button
          </Button>
          <Button size="large" color="warning">
            Button
          </Button>
          <Button size="large" color="light">
            Button
          </Button>
          <Button size="large" color="dark">
            Button
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
