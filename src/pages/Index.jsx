import { Box, Container, Flex, Heading, HStack, Text, VStack, Link, Spacer, Badge } from "@chakra-ui/react";
import { FaNewspaper, FaGlobe, FaBusinessTime, FaHeart, FaFlask } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">NewsPortal</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Health</Link>
          <Link href="#" color="white">Science</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} mt={8}>
        {/* News Section */}
        <Box w="full">
          <Heading size="lg" mb={4}>Top Stories</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Flex align="center">
                <FaNewspaper size="24px" />
                <Text ml={2} fontSize="xl" fontWeight="bold">Breaking News: Market Hits Record High</Text>
                <Spacer />
                <Badge colorScheme="green">Neutral</Badge>
              </Flex>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Flex align="center">
                <FaGlobe size="24px" />
                <Text ml={2} fontSize="xl" fontWeight="bold">Global Event: Climate Change Summit</Text>
                <Spacer />
                <Badge colorScheme="red">Liberal</Badge>
              </Flex>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Flex align="center">
                <FaBusinessTime size="24px" />
                <Text ml={2} fontSize="xl" fontWeight="bold">Economy: New Tax Reforms Announced</Text>
                <Spacer />
                <Badge colorScheme="blue">Conservative</Badge>
              </Flex>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;