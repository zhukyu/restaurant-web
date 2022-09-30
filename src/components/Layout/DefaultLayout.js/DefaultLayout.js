import Navbar from "../../Navbar/Navbar";

function DefaultLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
