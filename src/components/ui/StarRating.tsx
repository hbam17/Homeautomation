import { Star } from "./Icons";

export default function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}
