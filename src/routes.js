import Home from "./pages/Home";
import Description from "./pages/Description";
import Filter from "./pages/Filter";
 
const routes =[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/filter",
        element:<Filter/>
    },
    {
        path:"/description/:id",
        element:<Description/>
    }
]
export default routes