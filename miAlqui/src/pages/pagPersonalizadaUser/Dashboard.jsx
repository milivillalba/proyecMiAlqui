import  Sidebar  from "./Sindebar";
import  HomePage  from "./HomePage";

const Dashboard = ({ children }) => {
    return (
        <div>
        
            <Sidebar />
            <HomePage/>
        </div>
    )
};

export default Dashboard;