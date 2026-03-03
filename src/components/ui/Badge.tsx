type BadgeProps = {
  children: React.ReactNode;
  color?: "blue" | "green" | "teal" | "cyan" | "amber";
};

const colorStyles = {
  blue: "text-blue bg-blue/10",
  green: "text-green bg-green-light",
  teal: "text-teal bg-teal/10",
  cyan: "text-cyan bg-cyan/10",
  amber: "text-amber bg-amber/10",
};

export default function Badge({ children, color = "blue" }: BadgeProps) {
  return (
    <span
      className={`inline-block font-body text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded ${colorStyles[color]}`}
    >
      {children}
    </span>
  );
}
