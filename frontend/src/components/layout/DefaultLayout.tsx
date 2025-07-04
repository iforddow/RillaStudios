import { Helmet } from "react-helmet-async";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function DefaultLayout({
  children,
  pageTitle = "Rilla Studios",
  pageDescription = "Rilla Studios - Your Creative Partner",
}: {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}) {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
}
