import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Theme } from "@radix-ui/themes";

export default function DefaultProviders({ children }) {
  return (
    <>
      <Theme>
        <Navbar />
        {children}
        <Footer />
      </Theme>
    </>
  );
}
