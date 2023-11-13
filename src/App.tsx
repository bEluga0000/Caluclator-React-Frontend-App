import { InputsBoxes } from "./components/InputsBoxes"
import { Symbols } from "./components/Symbols"
import { ResultButton } from "./components/ResultButton"
import { Note } from "./components/Note"
import { ResultProvider } from "./ContextApi/resultContext"
import { ShowResults } from "./components/ShowResults"
import { ClearButton } from "./components/ClearButton"


function App(): JSX.Element {
  return (
    <ResultProvider>
      <div>
        <InputsBoxes  />
        <Symbols />
        <ShowResults/>
        <ResultButton></ResultButton>
        <ClearButton/>
        <Note />
      </div>
    </ResultProvider>
  )
}

export default App
// https://github.com/bEluga0000/Caluclator-React-Frontend-App.git