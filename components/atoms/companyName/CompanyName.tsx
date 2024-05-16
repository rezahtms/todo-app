import AddTaskButton from "@/components/molecules/addTaskButton/AddTaskButton";
import { I_Company_Name_Type } from "@/utils/types/pageTypes";
import { Container, Typography } from "@mui/material";
import { FC } from "react";

const CompanyName: FC<I_Company_Name_Type> = (props) => {
  const { params, setIsOpen } = props;
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(65, 65, 65, 0.308)",
          backdropFilter: "blur(9px)",
          p: 1,
          color: "#fff",
        }}
        maxWidth="xl"
      >
        <Typography variant="h1" fontSize={25}>
          {params}
        </Typography>
        <AddTaskButton setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};
export default CompanyName;
