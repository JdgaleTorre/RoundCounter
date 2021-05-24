import { useAppContext } from '../context/Context';
import Counter from '../components/counter';
import { Text, Flex } from '@chakra-ui/react';

function Project() {
  const { context, setContext } = useAppContext();
  const { selected } = context;

  return (
    <>
      <Counter
        id={selected.id}
        start={selected.start}
        end={selected.end}
        increment={selected.increment}
        count={selected.count}
        project={selected.project}
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
