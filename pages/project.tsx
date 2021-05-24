import { useAppContext } from '../context/Context';
import Counter from '../components/counter';
import { Text, Flex } from '@chakra-ui/react';

function Project() {
  const { context } = useAppContext();
  const { selected, listProjects } = context;
  const selectedFromList = listProjects.filter((p) => p.id === selected.id);
  let count = 0;

  if (selectedFromList.length > 0) {
    count = selectedFromList[0].count;
  }

  return (
    <>
      <Counter
        id={selected.id}
        start={selected.start}
        end={selected.end}
        increment={selected.increment}
        count={count}
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
