import { Button, Text } from '@chakra-ui/react';
import ItemProyect from '../components/itemProyect';
import Link from 'next/link';
import { useAppContext } from '../context/Context';

export default function Home() {
  const { context, setContext } = useAppContext();
  return (
    <>
      <Text>Proyectos</Text>

      {context.listProjects.map((project) => {
        return (
          <ItemProyect
            project={project.project}
            start={project.start}
            end={project.end}
            increment={project.increment}
          />
        );
      })}

      <Link href="/addProject">
        <Button size="lg" colorScheme="teal" m={6}>
          Add new
        </Button>
      </Link>
    </>
  );
}
