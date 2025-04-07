import { Box, Container, Stack, Text, Link, Icon, HStack } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box
      bg={'orange.500'}
      color={'yellow.500'}
    >
      <Container
        as={Stack}
        maxW="1200px"
        py={10}
      >
        <HStack gap={4}>
          <Link href="#">
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
          <Link href="#">
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
        </HStack>
        <Text>© 2024 YourBrand. All rights reserved</Text>
        <HStack gap={4}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Container>
    </Box>
  )
}

export default Footer;
