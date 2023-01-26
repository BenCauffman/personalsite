import { Box, Button, Stack, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";

const ReacType: React.FC = () => {
  return (
    <Stack padding="20px" gap="20px">
      <Text
        paddingX="10px"
        fontSize={{
          sm: "16px",
          md: "18px",
          lg: "20px",
        }}
        s
      >
        {" "}
        ReacType is a prototyping tool that makes use of a drag and drop canvas
        and customizable components and HTML elements to create an exportable
        codebase that developers can download and continue to work on.
      </Text>
      <Text fontSize="2xl"></Text>
    </Stack>
  );
};

export default ReacType;
