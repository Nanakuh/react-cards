import CustomFooter from "../components/footer/footer";
import CustomNavbar from "../components/navbar/navbar";

function Root() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <CustomNavbar />
      <CustomFooter />
    </div>
  );
}

export default Root;
