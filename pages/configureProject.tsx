import { Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { useAppContext } from '../context/Context';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GetData, PersistData } from '../utils/storage';
import { Actions } from '../enums/actions';

function ConfigureProject() {
  const { context, setContext } = useAppContext();
  const [configuration, setConfiguration] = useState(context.selected);
  const router = useRouter();

  useEffect(() => {
    if (configuration.count !== 0) {
      setConfiguration((prevState) => ({ ...prevState, count: 0 }));
    }
  }, [configuration]);

  const onChange = ({ target: { name, value } }) => {
    const newValue = parseInt(value, 10);
    setConfiguration((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const onChangeText = ({ target: { name, value } }) => {
    setConfiguration((prevState) => ({ ...prevState, [name]: value }));
  };

  const UpdateProyect = async () => {
    if (configuration.id !== 0) {
      PersistData(configuration, Actions.Update);
      const data = await GetData();
      setContext((prevState) => ({
        ...prevState,
        listProjects: [...data],
        selected: configuration,
      }));
      router.push('/project');
    } else {
      PersistData(configuration, Actions.Add);
      router.push('/');
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
      >
        <FormControl id="project">
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            value={configuration.project}
            onChange={onChangeText}
            onFocus={(e) => e.target.select()}
            name="project"
            backgroundColor="gray.800"
            color="gray.100"
            fontSize="2rem"
            p={5}
            size="lg"
          />
        </FormControl>
        <FormControl id="start">
          <FormLabel>Start from:</FormLabel>
          <Input
            type="number"
            value={configuration.start}
            onChange={onChange}
            onFocus={(e) => e.target.select()}
            name="start"
            textAlign="right"
            backgroundColor="gray.800"
            color="gray.100"
            fontSize="2rem"
            p={5}
            size="lg"
          />
        </FormControl>
        <FormControl id="end">
          <FormLabel>End at:</FormLabel>
          <Input
            type="number"
            value={configuration.end}
            onChange={onChange}
            onFocus={(e) => e.target.select()}
            name="end"
            textAlign="right"
            backgroundColor="gray.800"
            color="gray.100"
            fontSize="2rem"
            p={5}
            size="lg"
          />
        </FormControl>
        <FormControl id="increment">
          <FormLabel>Increment:</FormLabel>
          <Input
            type="number"
            value={configuration.increment}
            onChange={onChange}
            onFocus={(e) => e.target.select()}
            name="increment"
            textAlign="right"
            backgroundColor="gray.800"
            color="gray.100"
            fontSize="2rem"
            p={5}
            mb={5}
            size="lg"
          />
        </FormControl>
        <Flex flexDirection="row">
          <Button
            size="md"
            ml={5}
            colorScheme="teal"
            flex={1}
            onClick={UpdateProyect}
          >
            <CheckIcon w={6} h={6} />
          </Button>
          <Link href="/">
            <Button size="md" ml={5} colorScheme="red">
              <CloseIcon w={6} h={6} />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default ConfigureProject;
