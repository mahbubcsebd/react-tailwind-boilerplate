import DarkModeBtn from "./components/DarkModeBtn";

function App() {
  return (
    <div className="App dark:bg-black transition duration-1000">
      <DarkModeBtn />
        <div className="flex items-center min-h-screen justify-center">
            <h1 className="text-blue-600 dark:text-white font-bold text-7xl">React + Tailwind Boilerplate</h1>
        </div>
    </div>
  );
}

export default App;
