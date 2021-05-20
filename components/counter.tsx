import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { SettingsIcon, SmallAddIcon, MinusIcon } from '@chakra-ui/icons';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Flex
        flexDirection="column"
        backgroundColor="gray.300"
        rounded={12}
        p={{ base: 5, md: 10 }}
        w={{ base: '90%', md: '50%', lg: '15%' }}
      >
        <Heading mb={6}>
          <Flex flexDirection="row">
            <Text flex={1}>Counter</Text>
            <SettingsIcon />
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
          {count}
        </Text>
        <Flex flexDirection="row" width="100%" alignItems="center">
          <Button
            colorScheme="teal"
            flex={1}
            mr={5}
            p={5}
            onClick={() => setCount(count + 1)}
            size="lg"
          >
            <SmallAddIcon w={10} h={10} />
          </Button>
          <Button
            colorScheme="cyan"
            onClick={() => setCount(count - 1)}
            p={5}
            size="md"
          >
            <MinusIcon w={5} h={5} />
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Counter;
