import { PlayerProvider, PlayGround } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcomepage  from "./Components/welcome/welcomepage";

function App() {
  return (
    <div>
      <PlayerProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/music' element={<PlayGround />} />
            <Route path="/" element={< Welcomepage/>} />

          </Routes>
        </BrowserRouter>

      </PlayerProvider>
    </div>
  );
}

export default App;
