import { useState } from "react";
import { Box, Container, Flex, Heading, HStack, Text, VStack, Link, Spacer, Badge } from "@chakra-ui/react";
import { FaNewspaper, FaGlobe, FaBusinessTime, FaHeart, FaFlask } from "react-icons/fa";

const Index = () => {
  const [filter, setFilter] = useState("All");

  const newsItems = [
    { id: 1, category: "World", title: "Breaking News: Market Hits Record High", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", icon: FaNewspaper, badge: "Neutral" },
    { id: 2, category: "World", title: "Global Event: Climate Change Summit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", icon: FaGlobe, badge: "Liberal" },
    { id: 3, category: "Business", title: "Economy: New Tax Reforms Announced", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", icon: FaBusinessTime, badge: "Conservative" },
    { id: 4, category: "Health", title: "Health Update: New Vaccine Released", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", icon: FaHeart, badge: "Neutral" },
    { id: 5, category: "Science", title: "Science Breakthrough: New Particle Discovered", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.", icon: FaFlask, badge: "Liberal" },
  ];

  const filteredNewsItems = filter === "All" ? newsItems : newsItems.filter(item => item.category === filter);

  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">NewsPortal</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white" onClick={() => setFilter("All")}>Home</Link>
          <Link href="#" color="white" onClick={() => setFilter("World")}>World</Link>
          <Link href="#" color="white" onClick={() => setFilter("Business")}>Business</Link>
          <Link href="#" color="white" onClick={() => setFilter("Health")}>Health</Link>
          <Link href="#" color="white" onClick={() => setFilter("Science")}>Science</Link>
          <Link href="/political-leaning" color="white">Political Leaning Form</Link> {/* New Link */}
        </HStack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} mt={8}>
        {/* News Section */}
        <Box w="full">
          <Heading size="lg" mb={4}>Top Stories</Heading>
          <VStack spacing={4} align="stretch">
            {filteredNewsItems.map(item => (
              <Box key={item.id} p={4} shadow="md" borderWidth="1px">
                <Flex align="center">
                  <item.icon size="24px" />
                  <Text ml={2} fontSize="xl" fontWeight="bold">{item.title}</Text>
                  <Spacer />
                  <Badge colorScheme={item.badge === "Neutral" ? "green" : item.badge === "Liberal" ? "red" : "blue"}>{item.badge}</Badge>
                </Flex>
                <Text mt={2}>{item.description}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;