import { Box, Container, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react'
import { FiLock, FiZap, FiTrendingUp } from 'react-icons/fi'

interface FeatureProps {
  title: string
  text: string
  icon: React.ElementType
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align="center" textAlign="center">
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="blue.500"
        mb={4}
      >
        <Icon as={icon} w={10} h={10} />
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color="gray.600">{text}</Text>
    </Stack>
  )
}

const Features = () => {
  return (
    <Box p={4} bg="white">
      <Container maxW="1200px" py={20}>
        <Stack as={Container} maxW="3xl" textAlign="center" mb={10}>
          <Heading fontSize="3xl">Everything you need to get started</Heading>
          <Text color="gray.600" fontSize="xl">
            Our platform provides all the tools you need to succeed
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }}>
          <Feature
            icon={FiZap}
            title="Lightning Fast"
            text="Experience blazing fast performance with our optimized platform."
          />
          <Feature
            icon={FiLock}
            title="Secure by Default"
            text="Your data is protected with enterprise-grade security measures."
          />
          <Feature
            icon={FiTrendingUp}
            title="Analytics"
            text="Get detailed insights and analytics to track your progress."
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Features;
