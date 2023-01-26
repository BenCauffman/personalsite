import { Box, ResponsiveValue, Text } from "@chakra-ui/react";
import Link from "next/link";

const Rightsidebar: React.FC<{ fixed: ResponsiveValue<Property.ZIndex> }> = ({
  fixed,
}) => {
  return (
    <Box
      visibility={fixed}
      position="fixed"
      right="0px"
      bottom="0px"
      marginRight="-120px"
      marginBottom="150px"
      transform="rotate(90deg)"
    >
      <Box
        display="flex"
        gap="10px"
        _after={{
          content: '""',
          width: "90px",
          height: "2px",
          backgroundColor: "white",
          alignSelf: "center",
        }}
      >
        <Link href="mailto:benjamincauffman@gmail.com">
          benjamincauffman@gmail.com
        </Link>
      </Box>
    </Box>
  );
};

export default Rightsidebar;
