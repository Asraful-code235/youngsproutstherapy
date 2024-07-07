import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function DefaultProviders({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
