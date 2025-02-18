import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ButtonComp from "./components/ButtonComp";
import ImageComp from "./components/ImageComp";

function App() {
  return (
    <>
      <ImageComp url="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" />
      <ButtonComp nameButton="Google" url="https://google.com" />
      <ImageComp url="https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000" />
      <ButtonComp nameButton="Vite" url="https://vite.dev/" />
      <ImageComp url="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" />
      <ButtonComp nameButton="My GitHub" url="https://github.com/xAldox995" />
    </>
  );
}

export default App;
