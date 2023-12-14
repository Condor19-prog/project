import {Button} from "shared/ui/Button/Button";
import {useEffect, useState} from "react";

//component for testing
export const BugButton = () => {
  const [error, setError] = useState(false)

  const handleThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error]);

  return (
    <Button onClick={handleThrow}>
      throw error
    </Button>
  )
}