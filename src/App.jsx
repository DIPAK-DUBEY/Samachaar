import Navbar from "./components/ui/Files/Navbar";
import { Globe } from "./components/ui/globe";
import Choices from "./components/ui/Files/Choices";
import DATA from "./components/ui/Files/DATA";
import Footer from "./components/ui/Files/Footer";
const App = () => {
  return (
    <>
      <div className="sticky top-10 opacity-20 max-[600px]:top-40">

        <Globe />
      </div>
      <div className="p-5 max-w-[1350px] mx-auto min-h-screen ">
        <Navbar />
        <div
          className="flex flex-col gap-5 justify-center mt-4 flex-wrap ">
          <div className="flex flex-row gap-4 flex-wrap justify-center max-[600px]:hidden">
            <Choices />
          </div>
          <DATA />
        </div>
        <Footer/>
      </div>
    </>
  )
}
export default App;