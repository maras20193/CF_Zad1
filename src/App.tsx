import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { About, Article, Blog, Main } from "./pages";
import { GlobalStyle, theme } from "./styles";
import { Layout } from "./template";
import { routes } from "./utils/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={routes.main} element={<Main />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.blog} element={<Blog />} />
            <Route path={`${routes.blog}/:articleSlug`} element={<Article />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
