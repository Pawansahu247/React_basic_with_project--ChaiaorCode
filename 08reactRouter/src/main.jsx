import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  // ✅ Add this
import './index.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './Layout'
import ContactUs from './components/ContactUs/ContactUs'
import Project from './components/project/Projects'
import Skills from './components/Skills/Skills'




const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <ContactUs/>
      },
      {
        path: "project",
        element: <Project/>
      },
      {
        path: "skills",
        element: <Skills/>
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
