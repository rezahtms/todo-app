import Link from "next/link";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Link href="/">
      <Stack direction="row" spacing={1} alignItems="center">
        <Image
          src="/images/logo.png"
          alt="logo image"
          width={40}
          height={40}
          priority
        />
        <Typography variant="body1">TODO APP</Typography>
      </Stack>
    </Link>
  );
};
export default Logo;
