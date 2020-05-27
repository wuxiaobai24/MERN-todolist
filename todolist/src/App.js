import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import TodoList from "./components/TodoList";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://codeand.fun">
      wuxiaobai24
    </Link>
    {" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          MERN-Todo List
        </Typography>
				<TodoList />
        <Copyright />
      </Box>
    </Container>
  );
}
