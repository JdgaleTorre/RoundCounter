import { Button, Text } from '@chakra-ui/react';
import ItemProject from '../components/itemProject';
import Link from 'next/link';
import { useAppContext } from '../context/Context';
import { useEffect } from 'react';
import { GetData } from '../utils/storage';

export default function Home() {
  const { context, setContext } = useAppContext();

  useEffect(() => {
    const getData = async () => {
      const result = await GetData();
      return result;
    };
    getData().then((data) => {
      if (typeof data === typeof []) {
        setContext((prevState) => ({
          ...prevState,
          listProjects: data,
        }));
      }
    });
  }, []);
  return (
    <>
      {context.listProjects.map((project) => {
        return (
          <ItemProject
            key={project.id}
            id={project.id}
            project={project.project}
            start={project.start}
            end={project.end}
            increment={project.increment}
            count={project.count}
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
