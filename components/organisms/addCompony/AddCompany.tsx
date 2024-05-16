"use client";
import React, { FC, useState, ChangeEvent, FormEvent, useContext } from "react";
import { Button, Container, Input, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { TodoContext } from "@/contexts/TodoProvider";

const AddCompany: FC = () => {
  const [company, setCompany] = useState<string>("");
  const { addNewCompany } = useContext(TodoContext);
  const addCompanyHandler = () => {
    const newCompany = {
      id: Date.now(),
      companyName: company,
      tasks: [],
    };
    addNewCompany(newCompany);
  };
  const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };
  const disabledButton = company.trim().length > 3;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCompanyHandler();
    setCompany("");
  };

  return (
    <Container
      sx={{
        backgroundColor: "rgba(65, 65, 65, 0.308)",
        backdropFilter: "blur(9px)",
        mb: 1,
        padding: "10px 0 10px 0",
      }}
      maxWidth="xl"
    >
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <Input
            maxRows={15}
            placeholder="Team Name"
            sx={{ color: "#fff" }}
            autoFocus
            onChange={handleCompanyChange}
            value={company}
          />
          <Button
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            type="submit"
            disabled={disabledButton ? false : true}
          >
            Add
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default AddCompany;
