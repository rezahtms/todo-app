"use client";
import CompanyName from "@/components/atoms/companyName/CompanyName";
import Modal from "@/components/organisms/modal/Modal";
import ProgressTasks from "@/components/organisms/progressTasks/ProgressTasks";
import { FC, useState } from "react";

interface I_Todo_Page {
  params: string;
}

const Todo: FC<I_Todo_Page> = (props) => {
  const { params } = props;
  const [open, setIsOpen] = useState<boolean>(false);
  const openModalHandler = () => {
    setIsOpen((current) => !current);
  };
  return (
    <>
      <Modal openModal={open} setIsModal={openModalHandler} />
      <CompanyName params={params} setIsOpen={openModalHandler} />
      <ProgressTasks />
    </>
  );
};
export default Todo;
