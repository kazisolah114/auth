import Footer from "./footer";
import Form from "./form";
import Header from "./header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 md:p-20 ">
      <Header />
      <main className="w-full"><Form /></main>
      <Footer />
    </div>
  );
}
