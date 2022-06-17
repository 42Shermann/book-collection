import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import { TopBar } from "./components";
import { Home } from "./routes/Home/home";
import BookPage from "./routes/BookPage/BookPage";
import './App.css'
import { COLOURS } from "./constants";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Container from "react-bootstrap/esm/Container";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App pb-4">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":bookListName" element={<BookPage />} />
      </Routes>
      </div>
      <footer style={{padding: '3px', backgroundColor: COLOURS.burlywood, color: 'white'}}>
        <Container>
          <NavbarBrand style={{color:COLOURS.dimgray}}>Powered by React</NavbarBrand>
        </Container>
      </footer>
    </QueryClientProvider>
  );
}

export default App;
