import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const App = () => {
  // const name = "Roid";
  // const isSingle = true;

  // const renderStatus = (status) => {
  //   if (status) {
  //     return <p>saya belum menikah</p>;
  //   }
  //   return <p>saya sudah menikah</p>;
  // };

  return (
    <div>
      {/* <h1>Hello my name is {name}</h1>
      {isSingle ? <p>saya belum menikah</p> : <p>saya sudah menikah</p>}
      
    {renderStatus(isSingle)} */}

      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
