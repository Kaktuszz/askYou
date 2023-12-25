import { useEffect, useState } from "react";
import "./App.css";
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";

function App() {
  const [random, setRandom] = useState({ top: 0, left: 0 });
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState(
    "https://media.tenor.com/Rymj4MuTQIEAAAAi/peach-cat.gif"
  );

  const randomInt = (max) => {
    return Math.floor(Math.random() * (2 * max + 1)) - max;
  };

  const hover = () => {
    setRandom({ top: randomInt(60), left: randomInt(160) });
  };

  const answerHandler = (e) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    if (answer === "1") {
      setImage(
        "https://media.tenor.com/_mdYvTBsU2sAAAAi/tkthao219-peach-goma.gif"
      );
    } else if (answer === "0") {
      setImage(
        "https://media1.tenor.com/m/bbvK24wkdXkAAAAC/peach-goma-carry-basket.gif"
      );
    }
  }, [answer]);

  return (
    <ChakraProvider>
      <Box height="100vh" width="100vw">
        <Center height="100%" width="100%">
          <Flex direction="column" align="center">
            <Text fontSize="3xl">
              {answer === ""
                ? "Обнімашки ввечері?"
                : answer === "1"
                ? "єєєєй"
                : "Я ж тебе і так заберу : )"}
            </Text>
            <Image src={image} />
            <Flex>
              {answer === "" ? (
                <>
                  <Button
                    onClick={answerHandler}
                    m="10px"
                    colorScheme="yellow"
                    value="1"
                  >
                    Так
                  </Button>
                  <Box
                    onMouseEnter={hover}
                    w="70px"
                    h="60px"
                    position="relative"
                    top={random.top}
                    left={random.left}
                    id="transitionBox"
                  >
                    <Center height="100%" width="100%">
                      <Button
                        onMouseEnter={hover}
                        onClick={answerHandler}
                        colorScheme="yellow"
                        value="0"
                      >
                        Ні
                      </Button>
                    </Center>
                  </Box>
                </>
              ) : (
                ""
              )}
            </Flex>
          </Flex>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
