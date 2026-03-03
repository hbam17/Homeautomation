type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
        hover ? "transition-all duration-250 hover:shadow-lg hover:-translate-y-0.5" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
