import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PoliticalLeaningForm = () => {
  const [answers, setAnswers] = useState({
    economy: "",
    healthcare: "",
    immigration: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User's political leaning answers:", answers);
    // Navigate back to the articles page with the answers as state
    navigate("/", { state: { answers } });
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} mt={8}>
        <Heading size="lg">Determine Your Political Leaning</Heading>
        <Text>Answer the following questions to help us understand your political preferences.</Text>
        <Box as="form" w="full" onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl as="fieldset">
              <FormLabel as="legend">What are your views on the economy?</FormLabel>
              <RadioGroup onChange={(value) => handleChange("economy", value)} value={answers.economy}>
                <Stack direction="column">
                  <Radio value="liberal">Liberal</Radio>
                  <Radio value="conservative">Conservative</Radio>
                  <Radio value="neutral">Neutral</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend">What are your views on healthcare?</FormLabel>
              <RadioGroup onChange={(value) => handleChange("healthcare", value)} value={answers.healthcare}>
                <Stack direction="column">
                  <Radio value="liberal">Liberal</Radio>
                  <Radio value="conservative">Conservative</Radio>
                  <Radio value="neutral">Neutral</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend">What are your views on immigration?</FormLabel>
              <RadioGroup onChange={(value) => handleChange("immigration", value)} value={answers.immigration}>
                <Stack direction="column">
                  <Radio value="liberal">Liberal</Radio>
                  <Radio value="conservative">Conservative</Radio>
                  <Radio value="neutral">Neutral</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" mt={4}>Submit</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default PoliticalLeaningForm;