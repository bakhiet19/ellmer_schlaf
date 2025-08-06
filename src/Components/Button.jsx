import React from "react";

const Button = React.memo(function Button({ children, styles, label }) {
  return (
    <button className={styles} aria-label={label}>
      {children}
    </button>
  );
});

export default Button;