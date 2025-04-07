import { Box, Container, VStack } from '@chakra-ui/react'
import ParticleUnderlay from './ParticleUnderlay';

const Hero = () => {
  return (
    <Box bg="gray.50">
      <Container>
        <VStack textAlign="center">
          <Box
            w="full"
            h="600px"
            bg="gray.200"
            overflow="hidden"
            bgImage="url(/space.jpg)"
            bgSize="cover"
          >
            <ParticleUnderlay />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero;
