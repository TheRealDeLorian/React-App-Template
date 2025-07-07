import { useState } from "react";
import { Button } from "react-bootstrap";

const Home: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  const throwError = () => {
    setHasError(true);
  };

  if (hasError) {
    throwError();
    throw new Error("An error has randomly and unexpectedly occured! oh no!");
  }

  return (
    <div>
      <h1>Your Page</h1>
      <Button>Click me</Button>
    </div>
  );
};

export default Home;