import { Route, Routes } from "react-router-dom"

// import { Navbar } from "./components/Navbar/Navbar"
import { CatalogPage } from "./pages/CatalogPage/CatalogPage"

function App() {
  return (
    <div className="min-h-d p-4">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<CatalogPage />} />
      </Routes>
    </div>
  )
}

export default App
