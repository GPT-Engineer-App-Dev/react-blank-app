import { useState } from "react";
import { supabase } from "../integrations/supabase/index.js";
import { Box, Button, Container, Input, VStack, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <Box bg="gray.100" minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
      <Container centerContent>
        <VStack spacing={4}>
          <Text fontSize="2xl">Login</Text>
          {error && <Text color="red.500">{error}</Text>}
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Login;