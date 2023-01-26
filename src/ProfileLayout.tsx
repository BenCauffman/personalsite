import { Box, Button, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  useEffect,
  useState,
  useMemo,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { useTransition, animated, to } from "react-spring";
import { clickHandle } from "./types";

type title = {
  title: string;
  x: number;
  y: number;
};

const TITLES: title[] = [
  {
    title: "Web Developer",
    x: -150,
    y: -300,
  },
  {
    title: "League of Legends Enjoyer",
    x: 240,
    y: 200,
  },
  {
    title: "Comedy Peruser",
    x: 600,
    y: -300,
  },
];

const ProfileLayout: React.FC<{
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}> = ({ toggle, setToggle }) => {
  const original: title[] = useMemo(() => {
    return JSON.parse(JSON.stringify(TITLES));
  }, [TITLES]);
  const [rows, setRows] = useState(TITLES);
  const timer = useRef(0);

  const setPosition = (list: title[]) => {
    return list.map((item, index) => {
      item.x = original[index].x;
      item.y = original[index].y;
      return item;
    });
  };

  const rotateItems = (list: title[]) => {
    list.unshift(list.pop()!);
    return setPosition(list);
  };

  const clickHandle: clickHandle = (e) => {
    setToggle(false);
  };

  // const scrollToPage = () => {
  //   const element = document.getElementById(`main-site`);
  //   element?.scrollIntoView({ behavior: "smooth" });
  // };

  const transitions = useTransition(rows, {
    key: (item: { title: string; x: number; y: number }) => item.title,
    enter: ({ x, y }) => ({ x, y }),
    update: ({ x, y }) => ({ x, y }),
    config: { duration: 2500 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRows(rotateItems(rows));
    }, 2500);

    // if (!toggle) scrollToPage();

    return () => clearInterval(interval);
  });

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, [toggle]);

  return (
    <Box
      textAlign="center"
      h="100vh"
      w="100vw"
      display="flex"
      gap="100px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box position="relative">
        <Box zIndex={1}>
          <Text color="white" fontSize="5xl">
            Ben Cauffman
          </Text>
        </Box>
        {transitions(({ x, y }, item) => {
          return (
            <animated.div
              style={{
                transform: to([x, y], (x, y) => `translate(${x}px, ${y}px)`),
                backgroundColor: "teal",
                position: "absolute",
                fontSize: "20px",
                color: "white",
                borderRadius: "40%",
                padding: "20px",
                right: "300px",
                width: "150px",
              }}
            >
              {item.title}
            </animated.div>
          );
        })}
      </Box>
      <Button
        bg="yellow.500"
        _hover={{ transform: "translateY(5px)", bg: "yellow.200" }}
        onClick={clickHandle}
      >
        <ArrowDownIcon />
        Continue To Site
        <ArrowDownIcon />
      </Button>
    </Box>
  );
};

export default ProfileLayout;
