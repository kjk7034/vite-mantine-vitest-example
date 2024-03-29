import { useState } from "react";
import { Button } from "@mantine/core";

function CountButton() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
  );
}

export default CountButton;
