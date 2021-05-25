import { useAppContext } from '../context/Context';
import Counter from '../components/counter';
import { Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PersistData } from '../utils/storage';
import { Actions } from '../enums/actions';

function Project() {
  const { context, setContext } = useAppContext();
  const { selected } = context;
  const router = useRouter();

  useEffect(() => {
    if (context.selected.id === undefined) {
      router.push('/');
    }
  }, [context]);

  return (
    <>
      <Counter
        id={selected.id}
        start={selected.start}
        end={selected.end}
        increment={selected.increment}
        count={selected.count}
        project={selected.project}
        persist={(newCount, id, project, start, end, increment) => {
          PersistData(
            { id, project, start, end, increment, count: newCount },
            Actions.Update
          );
          setContext((prevState) => ({
            ...prevState,
            selected: { id, project, start, end, increment, count: newCount },
          }));
        }}
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
