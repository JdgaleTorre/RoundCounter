import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';

function CounterConfiguration() {
  const [configuration, setConfiguration] = useState({
    project: '',
    start: 0,
    end: 10,
    increment: 1,
  });

  const onChange = ({ target: { name, value } }) => {
    const newValue = parseInt(value, 10);
    setConfiguration((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const onChangeText = ({ target: { name, value } }) => {
    setConfiguration((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Flex flexDirection="column">
      <FormControl id="project">
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          value={configuration.project}
          onChange={onChangeText}
          onFocus={(e) => e.target.select()}
          name="project"
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
        />
      </FormControl>
    </Flex>
  );
}

export default CounterConfiguration;
