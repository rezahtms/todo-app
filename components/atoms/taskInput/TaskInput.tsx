"use client";
import { I_Task_Input } from "@/utils/types/pageTypes";
import styled from "@emotion/styled";
import { FormLabel } from "@mui/material";
import { FC } from "react";

const CustomInput = styled.input`
  width: 400px;
  padding: 0.3125rem;
  font-size: 1rem;
  border: none;
  color: "#fff";
`;

const TaskInput: FC<I_Task_Input> = (props) => {
  const { id, name, placeholder, autofocus, onChange } = props;
  return (
    <>
      <FormLabel htmlFor={id}>{placeholder}</FormLabel>
      <CustomInput
        id={id}
        name={name}
        placeholder={placeholder}
        autoFocus={autofocus}
        onChange={onChange}
      />
    </>
  );
};

export default TaskInput;
