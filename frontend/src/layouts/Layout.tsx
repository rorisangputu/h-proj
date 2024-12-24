import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="w-[90%] mx-auto">
        <SearchBar />
      </div>
      <div className="w-[90%]  mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
