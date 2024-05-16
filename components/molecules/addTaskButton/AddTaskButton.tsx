"use client";
import { Button } from "@mui/material";
import AddTask from "@mui/icons-material/PlaylistAdd";
import { FC } from "react";
import { I_Task_Button } from "@/utils/types/pageTypes";
const AddTaskButton: FC<I_Task_Button> = (props) => {
  const { setIsOpen } = props;

  return (
    <Button
      onClick={setIsOpen}
      sx={{
        border: "1px solid rgba(65, 65, 65, 0.493)",
        width: "20%",
      }}
    >
      <AddTask color="warning" />
    </Button>
  );
};

export default AddTaskButton;
