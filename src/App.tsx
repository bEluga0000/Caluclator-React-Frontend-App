import { InputsBoxes } from "./components/InputsBoxes"
import { Symbols } from "./components/Symbols"
import { ResultButton } from "./components/ResultButton"
import { Note } from "./components/Note"
import { ShowResults } from "./components/ShowResults"
import { ClearButton } from "./components/ClearButton"
import { RecoilRoot } from "recoil"


function App(): JSX.Element {
  return (
    <RecoilRoot>
        <div>
          <InputsBoxes />
          <Symbols />
          <ShowResults />
          <ResultButton></ResultButton>
          <ClearButton />
          <Note />
        </div>
    </RecoilRoot>
  )
}

export default App
// https://github.com/bEluga0000/Caluclator-React-Frontend-App.git