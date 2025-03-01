import * as React from "react";

function Index(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      color="currentColor"
      {...props}
      style={{
        transform: "scale(.8)",
      }}
    >
      <path
        d="M19 4.992l-15 15M5.5 4.992H19v13.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ArrowButtonIcon = React.memo(Index);
export { ArrowButtonIcon };
