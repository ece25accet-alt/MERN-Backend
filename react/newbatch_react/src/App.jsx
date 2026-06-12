import Navbar from "./components/navbar"

const App = () => {
  return (
    <div className="bg-black flex items-center p-4">
    <div className="flex">

      <Navbar />
      <h1 className="text-pink-500 bg-blue-600 p-3 text-3xl rounded-2xl ml-2 h-15">
        Instagram
      </h1>
    
    </div>
    </div>
  );
};

export default App;