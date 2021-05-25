import {
  Flex,
  Text,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CheckIcon,
  DeleteIcon,
  RepeatIcon,
} from '@chakra-ui/icons';
import { useAppContext } from '../context/Context';
import { useRouter } from 'next/router';
import { PersistData } from '../utils/storage';
import { Actions } from '../enums/actions';

function ItemProject({
  id,
  project,
  start,
  end,
  increment,
  count,
}: {
  id: number;
  project: string;
  start: number;
  end: number;
  increment: number;
  count: number;
}) {
  const { context, setContext } = useAppContext();
  const router = useRouter();

  const DeleteProject = () => {
    setContext((prevState) => ({
      ...prevState,
      listProjects: [
        ...prevState.listProjects.filter((p) => p.project !== project),
      ],
    }));
    PersistData({ id, project, start, end, increment, count }, Actions.Remove);
  };

  const ContinueProject = () => {
    setContext((prevState) => ({
      ...prevState,
      selected: { id, project, start, end, increment, count },
    }));

    router.push('/project');
  };

  const ResetProject = () => {
    let copy = context.listProjects.filter((p) => p.id === id)[0];
    copy.count = 0;
    setContext((prevState) => ({
      ...prevState,
      listProjects: [
        ...prevState.listProjects.filter((p) => p.id !== id),
        copy,
      ],
      selected: { id, project, start, end, increment, count: 0 },
    }));
    PersistData(
      { id, project, start, end, increment, count: 0 },
      Actions.Update
    );
    router.push('/project');
  };

  return (
    <Flex
      flexDirection="row"
      backgroundColor="gray.300"
      rounded={12}
      p={{ base: 5 }}
      w={{ base: '95%', md: '50%', lg: '15%' }}
      justifyContent="right"
      alignItems="center"
      mb={5}
    >
      <Text
        backgroundColor="gray.800"
        color="gray.100"
        rounded={12}
        p={5}
        mr={2}
        textAlign="center"
        fontSize="1.3rem"
        borderColor="white"
        borderStyle="solid"
        borderWidth={2}
        pos="relative"
      >
        {count === 0 ? start : count}
        <Badge
          pos="absolute"
          top={-2}
          right={-2}
          variant="solid"
          colorScheme="twitter"
          rounded={5}
        >
          {end}
        </Badge>
        <Badge
          pos="absolute"
          bottom={-2}
          right={-2}
          variant="solid"
          colorScheme="twitter"
          rounded={5}
        >{`+${increment}`}</Badge>
      </Text>
      <Text flex={1} fontSize="2rem">
        {project}
      </Text>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          colorScheme="teal"
        />
        <MenuList>
          <MenuItem icon={<CheckIcon />} onClick={ContinueProject}>
            Continuar
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} onClick={ResetProject}>
            Reiniciar
          </MenuItem>
          <MenuItem icon={<DeleteIcon color="red" />} onClick={DeleteProject}>
            Borrar
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default ItemProject;
