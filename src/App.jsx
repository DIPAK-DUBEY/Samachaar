import Navbar from "./components/ui/Files/Navbar";
import { Globe } from "./components/ui/globe";
import Choices from "./components/ui/Files/Choices";
import DATA from "./components/ui/Files/DATA";
import Checking from "./components/ui/Files/Checking";
const App = () => {
  return (
    <>
      <div className="sticky top-40 opacity-20">
        <Globe />
      </div>
      <div className="p-5 max-w-[1350px] mx-auto ">
        <Navbar />
        <div
          className="flex flex-row gap-5 justify-center mt-4 flex-wrap">
            <Choices/>
          <Checking />
        </div>

      </div>
    </>
  )
}
export default App;