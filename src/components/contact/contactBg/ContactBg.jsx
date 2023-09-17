import React, { useEffect, useState } from "react";
import { Wrap, Circle } from "./styles";

const ContactBg = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const createCircle = () => {
      const sizeW = Math.random() * 12;
      const duration = Math.random() * 3;
      const style = {
        width: `${2 + sizeW}px`,
        left: `${Math.random() * window.innerWidth}px`,
        animationDuration: `${2 + duration}s`,
      };

      setCircles((prev) => [
        ...prev,
        {
          id: Date.now(),
          style,
          removeAt: Date.now() + 5000,
        },
      ]);
    };

    const intervalId = setInterval(() => {
      createCircle();
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrap>
      {circles.map((circle) => {
        return <Circle key={circle.id} style={circle.style} />;
      })}
    </Wrap>
  );
};

export default ContactBg;
