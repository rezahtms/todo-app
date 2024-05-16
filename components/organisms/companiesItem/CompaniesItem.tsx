import { I_Companies_Item_Types } from "@/utils/types/pageTypes";
import { ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
const CompaniesItem: FC<I_Companies_Item_Types> = (props) => {
  const { id, companyName } = props;
  return (
    <ListItem disablePadding>
      <Link href={`/${companyName}`}>
        <ListItemText
          sx={{ color: "#fff", pr: 0.5 }}
          primary={`${id} - ${companyName}`}
        />
      </Link>
    </ListItem>
  );
};

export default CompaniesItem;
