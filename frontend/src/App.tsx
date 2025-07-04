import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <HomePage />
    </MantineProvider>
  );
}

export default App;
