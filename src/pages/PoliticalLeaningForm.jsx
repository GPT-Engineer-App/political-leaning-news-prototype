import { Box, Button, Container, FormControl, FormLabel, Heading, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PoliticalLeaningForm = () => {
  const [answers, setAnswers] = useState({
    economy: "",
    healthcare: "",
    immigration: "",
  });

  const navigate = useNavigate();

  const handleChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User's political leaning answers:", answers);
    navigate("/", { state: { answers } });
  };

  return (
    <Container maxW="container.md" p={8} bg="white" color="black">
      <VStack spacing={10} mt={10}>
        <Heading size="lg" fontFamily="serif">Determine Your Political Leaning</Heading>
        <Text fontFamily="sans-serif">Answer the following questions to help us understand your political preferences.</Text>
        <Box as="form" w="full" onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <FormControl as="fieldset">
              <FormLabel as="legend" fontFamily="serif">What are your views on the economy?</FormLabel>
              <RadioGroup onChange={(value) => handleChange("economy", value)} value={answers.economy}>
                <Stack direction="column" spacing={3}>
                  <Radio value="liberal" fontFamily="sans-serif">Liberal</Radio>
                  <Radio value="conservative" fontFamily="sans-serif">Conservative</Radio>
                  <Radio value="neutral" fontFamily="sans-serif">Neutral</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend" fontFamily="serif">What are your views on healthcare?</FormLabel>
              <RadioGroup onChange={(value) => handleChange("healthcare", value)} value={answers.healthcare}>
                <Stack direction="column" spacing={3}>
                  <Radio value="liberal" fontFamily="sans-serif">Liberal</Radio>
                  <Radio value="conservative" fontFamily="sans-serif">Conservative</Radio>
                  <Radio value="neutral" fontFamily="sans-serif">Neutral</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend" fontFamily="serif">What are your views on immigration?</FormLabel>
              <RadioGroup onChange={(value) => handleChange("immigration", value)} value={answers.immigration}>
                <Stack direction="column" spacing={3}>
                  <Radio value="liberal" fontFamily="sans-serif">Liberal</Radio>
                  <Radio value="conservative" fontFamily="sans-serif">Conservative</Radio>
                  <Radio value="neutral" fontFamily="sans-serif">Neutral</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <Button type="submit" colorScheme="blackAlpha" size="lg" mt={6}>Submit</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default PoliticalLeaningForm;