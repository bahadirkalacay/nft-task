import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollButtons from "./components/ScrollButtons/ScrollButtons";


function App() {
  // window.addEventListener(
  //   "contextmenu",
  //   function (e) {
  //     e.preventDefault();
  //   },
  //   false
  // );

  return (
    <div>
      <ScrollButtons/>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
