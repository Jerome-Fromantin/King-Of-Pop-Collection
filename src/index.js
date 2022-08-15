import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Layout from "./pages/layout"
import Accueil from "./pages/accueil"
import Disques from "./pages/disques"
import Disque from "./pages/disque"
import Videos from "./pages/videos"
import Livres from "./pages/livres"
import Revues from "./pages/revues"
import Calendriers from "./pages/calendriers"
import Divers from "./pages/divers"
import Page404 from "./pages/page_404"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Accueil/>}/>
          <Route path="disques" element={<Disques/>}/>
          <Route path="disques/:id" element={<Disque/>}/>
          <Route path="videos" element={<Videos/>}/>
          <Route path="livres" element={<Livres/>}/>
          <Route path="revues" element={<Revues/>}/>
          <Route path="calendriers" element={<Calendriers/>}/>
          <Route path="divers" element={<Divers/>}/>
          <Route path="*" element={<Page404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
