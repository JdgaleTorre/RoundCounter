import { Flex } from '@chakra-ui/react';
import Counter from '../components/counter';
export default function Home() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      flexDirection="column"
    >
      <Counter />
    </Flex>
  );
}
