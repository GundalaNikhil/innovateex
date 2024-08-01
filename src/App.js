import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
