import { Box, Button, interactivity, Text } from "@chakra-ui/react";
import { useEffect, useState, useMemo, lazy, Suspense } from "react";
import space from "../public/images/space.png";
import { useTransition, animated, to } from "react-spring";
import DetailParent from "./DetailParent";
import { clickHandle } from "./types";

type title = {
  title: string;
  x: number;
  y: number;
};

const TITLES: title[] = [
  {
    title: "Web Developer",
    x: -20,
    y: -200,
  },
  {
    title: "League of Legends Enjoyer",
    x: 180,
    y: 100,
  },
  {
    title: "Comedy Peruser",
    x: 380,
    y: -200,
  },
];

const ProfileLayout: React.FC = () => {
  const original: title[] = useMemo(() => {
    return JSON.parse(JSON.stringify(TITLES));
  }, [TITLES]);
  const [rows, setRows] = useState(TITLES);
  const [toggle, setToggle] = useState(true);
  const [disappear, setDisappear] = useState(true);

  const rotateItems = (list: title[]) => {
    list.unshift(list.pop()!);
    return setPosition(list);
  };

  const setPosition = (list: title[]) => {
    return list.map((item, index) => {
      item.x = original[index].x;
      item.y = original[index].y;
      return item;
    });
  };

  const clickHandle: clickHandle = (e) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    else {
      const element = document.getElementById(`main-site`);
      element?.scrollIntoView({ behavior: "smooth" });
      setToggle(false);
    }
  };

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
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const id = setTimeout(() => setDisappear(!disappear), 1000);
    return () => clearTimeout(id);
  }, [toggle]);

  return (
    <>
      {disappear ? (
        <Box
          textAlign="center"
          bg="black"
          h="100vh"
          w="100vw"
          display="flex"
          gap="100px"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box position="relative">
            <Text color="white" fontSize="5xl">
              Ben Cauffman
            </Text>
            {transitions(({ x, y }, item) => {
              if (item.title !== "") {
                return (
                  <animated.div
                    style={{
                      transform: to(
                        [x, y],
                        (x, y) => `translate(${x}px, ${y}px)`
                      ),
                      backgroundColor: "teal",
                      position: "absolute",
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    {item.title}
                  </animated.div>
                );
              } else {
                return (
                  <animated.div
                    style={{
                      transform: to(
                        [x, y],
                        (x, y) => `translate(${x}px, ${y}px)`
                      ),
                    }}
                  ></animated.div>
                );
              }
            })}
          </Box>
          <Button onClick={clickHandle}>Go To Site</Button>
        </Box>
      ) : (
        <></>
      )}
      <Box id="main-site" position="relative" bg="yellow">
        <DetailParent />
      </Box>
    </>
  );
};

export default ProfileLayout;
