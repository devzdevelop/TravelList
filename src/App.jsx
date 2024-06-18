import "./styles.css";
import Logo from "./components/Logo"
import Form from "./components/Form"
import PackagingList from "./components/PackagingList"
import Stats from "./components/Stats"

export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}
