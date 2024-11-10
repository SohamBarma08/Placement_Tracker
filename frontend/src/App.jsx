import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Jobs from './components/jobs'
import Job from './components/Job'
import FilterCard from './components/FilterCard'
import AppliedJobTable from './components/AppliedJobTable'

import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/companyCreate'
import CompanySetup from './components/admin/companySetup'
import AdminJobs from "./components/admin/adminJobs";







const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: "/jobs",
    element: <Jobs />
  },

  {
    path: "/Job",
    element: <Job />
  },

  {
    path: "/AppliedJobTable",
    element: <AppliedJobTable />
  },


  {
    path: "/FilterCard",
    element: <FilterCard />
  },
  //for admin
  {
    path: "/admin/companies",
    element: <Companies />
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />
  },
  {
    path: "/admin/companies/Setup",
    element: <CompanySetup />
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
    },
  /*
 {
   path:"/admin/jobs/create",
   element:<ProtectedRoute><PostJob/></ProtectedRoute> 
 },
 {
   path:"/admin/jobs/:id/applicants",
   element:<ProtectedRoute><Applicants/></ProtectedRoute> 
 },
*/


])

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
