import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Luiz Pedro</Text>
        <Text color="gray.300" fontSize="small">
          lmodenez@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Luiz Pedro"
        src="https://avatars.githubusercontent.com/u/36903855?v=4"
      />
    </Flex>
  );
}
