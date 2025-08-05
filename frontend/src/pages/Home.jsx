import Dashboard from "../components/Dashboard";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
};

export default Home;