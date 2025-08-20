import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && (
        <Alert onClose={() => setIsVisible(false)}>Login Success!!!</Alert>
      )}
      <Button onClick={() => setIsVisible(true)} />
    </div>
  );
};

export default Notification;
