"use client";
import { I_Tasks_Type } from "@/utils/types/pageTypes";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

const DefinedTask: FC<I_Tasks_Type> = (props) => {
  const { title, assigned, defined, status } = props;

  return (
    <Box
      bgcolor={
        status === "todo"
          ? "#E15656"
          : status === "doing"
          ? "#6FA3EB"
          : "#57A773"
      }
      border="2px solid  rgba(65, 65, 65, 0.493)"
      p={0.5}
      mb={0.5}
      borderRadius={0.6}
      color="#fff"
    >
      <Typography variant="subtitle1">Title : {title}</Typography>
      <Typography variant="subtitle1">assigned to : {assigned}</Typography>
      <Typography variant="subtitle1">defined : {defined}</Typography>
    </Box>
  );
};

export default DefinedTask;
