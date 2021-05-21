import { useAppContext } from '../context/Context';
import Counter from '../components/counter';
import { Text } from '@chakra-ui/react';

function Project() {
  const { context, setContext } = useAppContext();
  const { selected } = context;

  return (
    <>
      <Counter
        start={selected.start}
        end={selected.end}
        increment={selected.increment}
      />
      <Text
        backgroundColor="gray.300"
        size="lg"
        fontSize="2rem"
        pr={10}
        pl={10}
        roundedBottom={10}
        boxShadow="lg"
      >
        {selected.project}
      </Text>
    </>
  );
}

export default Project;
