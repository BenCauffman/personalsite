import {
  Box,
  ListItem,
  ResponsiveValue,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

const Leftsidebar: React.FC<{ fixed: ResponsiveValue<Property.ZIndex> }> = ({
  fixed,
}) => {
  return (
    <Box position="fixed" bottom="0" visibility={fixed}>
      <UnorderedList
        display="flex"
        flexDirection="column"
        listStyleType="none"
        gap="20px"
        _after={{
          content: '""',
          width: "1px",
          height: "140px",
          backgroundColor: "white",
          alignSelf: "center",
        }}
      >
        <ListItem>
          <Link href="https://github.com/BenCauffman">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="-10 0 38 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.instagram.com/benjamincauffman/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="-10 0 38 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Instagram</title>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.linkedin.com/in/benjamin-cauffman/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              viewBox="-8 0 28 24"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Leftsidebar;
