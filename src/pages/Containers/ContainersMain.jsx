import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import ContainerContentHead from "./ContainersContentHead";
import ContainersData from "./ContainersData";
import Paginate from "../../components/Paginate/Paginate";

const ContainersMain = () => {
  return (
    <>
      <MainContentHeader>Containers</MainContentHeader>
      <div className="flex flex-col w-full  flex-grow bg-white shadow-lg mb-2 pb-5 rounded-md">
        <div className="flex flex-col mt-5 w-full rounded-md">
          <ContainerContentHead></ContainerContentHead>
          <ContainersData></ContainersData>
          <Paginate></Paginate>
        </div>
      </div>
    </>
  );
};

export default ContainersMain;
