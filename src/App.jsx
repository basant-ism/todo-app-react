import styles from "./App.module.css";
import Container from "./components/Container";
import TodoApp from "./components/TodoApp";

function App() {
  
  return (
    <div className={styles.container}>
       <Container>
        <TodoApp></TodoApp>
       </Container>
    </div>
  )
}

export default App
