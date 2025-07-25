import { Header } from "./components/header/Header";
import { getMenuItems } from "./components/header/MenuItems";

export default async function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menuItems = await getMenuItems();

  return (
    <>
      <Header menuItems={menuItems} />
      <main>{children}</main>
    </>
  );
}
