import { Box, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ExternalLinkIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import { useContext } from "react";
import DetailContext from "./context";
import Interests from "./Interests";
import { clickHandle } from "./types";
import ReacType from "./ReacType";
import Link from "next/link";

const Projects: React.FC = () => {
  const { margin } = useContext(DetailContext);
  const clickHandle: clickHandle = (e) => {
    if (e.target instanceof HTMLButtonElement) {
      const element = document.getElementById(`${e.target.dataset.id}`);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box marginX={margin}>
      <Stack>
        <Box
          display="flex"
          padding="20px"
          borderRadius="20px"
          textAlign="center"
          id="top"
        >
          <Stack textAlign="left" justifyContent="center" padding="20px">
            <Text
              paddingX="10px"
              fontSize={{
                sm: "20px",
                lg: "30px",
              }}
            >
              {" "}
              My primary stack is React / Node / TypeScript but I love learning
              new frameworks to express myself within!
            </Text>
            <Box display="flex" gap="20px">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ArrowForwardIcon} />
                  Redux / RTK
                </ListItem>
                <ListItem>
                  <ListIcon as={ArrowForwardIcon} />
                  NextJS
                </ListItem>
                <ListItem>
                  <ListIcon as={ArrowForwardIcon} />
                  GraphQL
                </ListItem>
              </List>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ArrowForwardIcon} />
                  SQL database (PostgreSQL)
                </ListItem>
                <ListItem>
                  <ListIcon as={ArrowForwardIcon} />
                  NoSQL (MongoDB, Redis)
                </ListItem>
                <ListItem>
                  <ListIcon as={ArrowForwardIcon} />
                  Docker
                </ListItem>
              </List>
            </Box>
            <Text fontSize="2xl"></Text>
          </Stack>
        </Box>
        {/* <Box justifyContent="center" display="flex" gap="50px">
          {subsection.map((section) => {
            return (
              <Button
                borderRadius="20%"
                height="100"
                key={`${section}`}
                data-id={`${section}`}
                onClick={clickHandle}
                bg="brand.light"
                _hover={{ bg: "brand.lightest" }}
              >
                {section}
              </Button>
            );
          })}
        </Box> */}
        <Stack paddingTop="50px">
          <Text fontSize="2xl"> ReacType </Text>
          <Box display="flex" textAlign="left" paddingBottom="200px">
            <Box
              bg="brand.light"
              paddingY="20px"
              borderRadius="20px"
              textAlign="left"
              width="80%"
              color="brand.darkest"
            >
              <ReacType />
            </Box>
            <Box
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
            >
              <Link href="https://github.com/open-source-labs/ReacType">
                <Box
                  gap="10px"
                  padding="20px"
                  display="flex"
                  alignItems="center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="30px"
                    height="30px"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <ArrowForwardIcon />
                </Box>
              </Link>
              <Link href="https://bencauffman.github.io/team-reactype.github.io/">
                <Box
                  gap="10px"
                  padding="20px"
                  display="flex"
                  alignItems="center"
                >
                  <ExternalLinkIcon height="30px" width="30px" />
                  <ArrowForwardIcon />
                </Box>
              </Link>
              <Link href="https://medium.com/@darin.ngau/reactype13-b4e23fc38d76">
                <Box padding="20px" display="flex" alignItems="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    viewBox="0 -4 24 24"
                  >
                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                  </svg>
                  <ArrowForwardIcon />
                </Box>
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            alignItems="flex-end"
            paddingBottom="200px"
          >
            <Text fontSize="2xl"> Dont Achieve Alone </Text>
            <Box display="flex" justifyContent="flex-end">
              <Box
                display="flex"
                justifyContent="space-around"
                flexDirection="column"
              >
                <Link href="https://github.com/BenCauffman/DontAcheiveAlone">
                  <Box
                    gap="10px"
                    padding="20px"
                    display="flex"
                    alignItems="center"
                  >
                    <ArrowBackIcon />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      width="30px"
                      height="30px"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </Box>
                </Link>
              </Box>
              <Box
                bg="brand.light"
                padding="20px"
                borderRadius="20px"
                textAlign="right"
                width="60%"
                color="brand.darkest"
              >
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
                    A personal development tool that serves to promote and
                    motivate self-growth through reminders of past acheivements
                  </Text>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Text fontSize="2xl"> RESurrect </Text>
          <Box display="flex" textAlign="left">
            <Box
              bg="brand.light"
              paddingY="20px"
              borderRadius="20px"
              textAlign="left"
              width="80%"
              color="brand.darkest"
            >
              <Stack padding="20px" gap="20px">
                <Text
                  paddingX="10px"
                  fontSize={{
                    sm: "16px",
                    md: "18px",
                    lg: "20px",
                  }}
                >
                  {" "}
                  A resume prototyping tool that allows a user to build,
                  customize, and save resume versions while on the job hunt!
                </Text>
              </Stack>
            </Box>
            <Box
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
            >
              <Link href="https://github.com/Team-Eevie/RESurrect">
                <Box
                  gap="10px"
                  padding="20px"
                  display="flex"
                  alignItems="center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="30px"
                    height="30px"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <ArrowForwardIcon />
                </Box>
              </Link>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Projects;
