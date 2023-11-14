import { InputsBoxes } from "./components/InputsBoxes"
import { Symbols } from "./components/Symbols"
import { Note } from "./components/Note"
import { ShowResults } from "./components/ShowResults"
import { RecoilRoot } from "recoil"
import "./App.css"
import { MainButtons } from "./components/MainButtons"


function App(): JSX.Element {
  return (
    <RecoilRoot>
        <div className="App">
          <InputsBoxes />
          <Symbols />
          <ShowResults />
          <MainButtons/>
          <Note />
        </div>
    </RecoilRoot>
  )
}

export default App
// https://github.com/bEluga0000/Caluclator-React-Frontend-App.git