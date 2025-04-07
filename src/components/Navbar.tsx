import { Box, Flex, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box as="nav" py={4} px={8} bg="blue.800" boxShadow="sm">
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading size="md" color="gray.300">Lisa Mabley, Senior Software Engineer</Heading>
        {/* <Spacer />
        <Flex gap={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost" disabled>Dashboard</Button>
          <Button variant="ghost" disabled>Chat</Button>
          <Button variant="ghost" disabled>Contact</Button>
        </Flex> */}
      </Flex>
    </Box>
  )
}

export default Navbar;
