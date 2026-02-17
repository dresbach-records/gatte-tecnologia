export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="130"
      height="36"
      viewBox="0 0 130 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="GATTE Tecnologia Logo"
    >
      <text
        fill="hsl(var(--primary))"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="-0.05em"
      >
        <tspan x="0" y="27">
          GATTE
        </tspan>
      </text>
      <text
        fill="hsl(var(--primary))"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fontWeight="500"
        letterSpacing="0em"
      >
        <tspan x="85" y="15">
          TECNOLOGIA
        </tspan>
      </text>
      <circle cx="125.5" cy="20.5" r="3.5" fill="hsl(var(--accent))" />
    </svg>
  );
}
