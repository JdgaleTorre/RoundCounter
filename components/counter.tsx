import { Flex, Text, Heading, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { SettingsIcon, SmallAddIcon, MinusIcon } from '@chakra-ui/icons';
import Link from 'next/link';

function Counter({
  id,
  project,
  start,
  end,
  increment,
  count,
  persist,
}: {
  id: number;
  project: string;
  start: number;
  end: number;
  increment: number;
  count: number;
  persist: (count, id, project, start, end, increment) => void;
}) {
  const [countIntern, setCount] = useState(count === 0 ? start : count);
  const [disabled, setDisabled] = useState(false);
  const [finished, setFinished] = useState(false);
  const Audio = useRef(null);
  const AudioEnd = useRef(null);

  const onAdd = () => {
    if (isValid(countIntern + increment)) {
      setCount(countIntern + increment);
      persist(countIntern + increment, id, project, start, end, increment);
      if (Audio.current !== undefined) {
        Audio.current.play();
        setDisabled(true);
        setTimeout(() => {
          setDisabled(false);
        }, 2000);
      }
    }
  };

  const onSubtract = () => {
    if (isValid(countIntern - increment)) {
      setCount(countIntern - increment);
      persist(countIntern - increment, id, project, start, end, increment);
      if (Audio.current !== undefined) {
        Audio.current.play();
        setDisabled(true);
        setTimeout(() => {
          setDisabled(false);
        }, 2000);
      }
    }
  };

  const isValid = (value: number) => {
    if (value === end) {
      setFinished(true);
      AudioEnd.current.play();
      return true;
    } else if (value <= end && value >= 0) {
      return true;
    } else if (value <= 0) {
      return false;
    }
  };

  return (
    <>
      <Flex
        flexDirection="column"
        backgroundColor="gray.300"
        rounded={12}
        p={{ base: 5, md: 10 }}
        w={{ base: '90%', md: '50%', lg: '15%' }}
        boxShadow="dark-lg"
      >
        <Heading mb={6}>
          <Flex flexDirection="row">
            <Text flex={1}>Counter</Text>

            <Link href="/configureProject">
              <SettingsIcon />
            </Link>
          </Flex>
        </Heading>

        <Text
          backgroundColor="gray.800"
          color="gray.100"
          p={5}
          rounded={12}
          mb={5}
          textAlign="right"
          fontSize="2rem"
        >
          {countIntern}
        </Text>
        <Flex flexDirection="row" width="100%" alignItems="center">
          <Button
            colorScheme="teal"
            flex={1}
            mr={5}
            p={5}
            onClick={onAdd}
            size="lg"
            isLoading={disabled || finished}
          >
            <SmallAddIcon w={10} h={10} />
          </Button>
          <Button
            colorScheme="cyan"
            onClick={onSubtract}
            p={5}
            size="md"
            isLoading={disabled || finished}
          >
            <MinusIcon w={5} h={5} />
          </Button>
        </Flex>
      </Flex>
      <audio ref={Audio} id="a1" src="/button-click-off-click.mp3"></audio>
      <audio ref={AudioEnd} id="a2" src="/Gong_4.mp3"></audio>
    </>
  );
}

export default Counter;
