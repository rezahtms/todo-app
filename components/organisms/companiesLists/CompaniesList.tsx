"use client";
import { Box, Container, List, Typography } from "@mui/material";
import CompaniesItem from "../companiesItem/CompaniesItem";
import { useContext } from "react";
import { TodoContext } from "@/contexts/TodoProvider";

const CompaniesList = () => {
  const { todo } = useContext(TodoContext);

  return (
    <Container
      sx={{
        backgroundColor: "rgba(65, 65, 65, 0.308)",
        backdropFilter: "blur(9px)",
      }}
      maxWidth="xl"
    >
      <Typography variant="subtitle1" color="primary" fontSize={20}>
        Company List
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <List disablePadding>
          {todo.map((company, index) => (
            <CompaniesItem
              {...company}
              key={`company__${company.id}`}
              id={String(index + 1)}
            />
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default CompaniesList;
