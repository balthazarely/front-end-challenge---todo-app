import PageWrapper from "./components/PageWrapper";
import Todo from "./components/Todo";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Todo />
      </PageWrapper>
    </>
  );
}

export default App;
