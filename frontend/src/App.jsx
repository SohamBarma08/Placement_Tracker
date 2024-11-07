import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Jobs from './components/jobs'
import Job from './components/Job'
import FilterCard from './components/FilterCard'
import AppliedJobTable from './components/AppliedJobTable'




const appRouter = createBrowserRouter([
{
  path: '/',
  element: <Home/>
},

{
  path: "/jobs",
  element: <Jobs />
},

{
  path: "/Job",
  element: <Job/>
},

{
  path: "/AppliedJobTable",
  element: <AppliedJobTable/>
},


{
  path: "/FilterCard",
  element: <FilterCard />
},

])

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
