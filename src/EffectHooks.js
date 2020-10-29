import React, { useEffect, useState } from "react";

const EffectHooks = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", paddingTop: "30px" }}>
      <p>{seconds} seconds passeds.</p>
    </div>
  );
};

export default EffectHooks;
