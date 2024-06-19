import './App.css'
import GridPlay from "./components/grid-play/GridPlay.tsx";
import StoricoPartite from "./components/storico-partite/StoricoPartite.tsx";

function App() {


  return (
      <>
        <div className="h-screen fixed top-0 left-0 w-screen bg-sky-950">

          <div className="flex flex-col items-center justify-center">
            <div className="p-2 rounded-2xl">
              <GridPlay></GridPlay>
            </div>

            <StoricoPartite></StoricoPartite>
          </div>
        </div>

      </>
  )
}

export default App
