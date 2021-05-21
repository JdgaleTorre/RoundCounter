import { Flex, Text, Button } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

function ItemProyect({ project, start, end, increment }) {
  return (
    <Flex
      flexDirection="row"
      backgroundColor="gray.300"
      rounded={12}
      p={{ base: 5 }}
      w={{ base: '90%', md: '50%', lg: '15%' }}
    >
      <Text flex={1} fontSize="2rem">
        {project}
      </Text>
      <Flex flexDirection="column">
        <Text>Start: {start}</Text>
        <Text>End: {end}</Text>
      </Flex>
      <Button size="md" ml={5} colorScheme="teal">
        <CheckIcon w={6} h={6} />
      </Button>
    </Flex>
  );
}

export default ItemProyect;
