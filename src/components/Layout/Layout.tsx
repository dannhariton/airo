import BottomBar from "../BottomBar/BottomBar";
import Header from "../Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <BottomBar />
    </main>
  );
}
