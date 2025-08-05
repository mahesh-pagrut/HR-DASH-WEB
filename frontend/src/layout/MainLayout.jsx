import '../index.css'

const MainLayout = ({ children }) => {
  return (
    <div className="text-stone-950 bg-stone-500 font-sans">
      {children}
    </div>
  );
};

export default MainLayout;
