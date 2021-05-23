import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const NavButton = ({
  title,
  route,
  children,
}: {
  title: string;
  route: string;
  children: any;
}) => {
  return (
    <Link href={route}>
      <Button pt={3} pb={2} size="md" pos="relative" h="100%" variant="ghost">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pos="relative"
        >
          {children}
          <Text>{title}</Text>
        </Flex>
      </Button>
    </Link>
  );
};

export default NavButton;
