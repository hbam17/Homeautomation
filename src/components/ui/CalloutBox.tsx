import Button from "./Button";
import { ArrowRight } from "./Icons";

type CalloutBoxProps = {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CalloutBox({
  title,
  description,
  buttonText = "Get Free Quotes",
  buttonHref = "/get-a-quote",
}: CalloutBoxProps) {
  return (
    <div className="bg-gradient-to-br from-blue-pale to-blue-200 border border-blue/20 rounded-card p-8 my-10">
      <h3 className="font-display text-[22px] text-gray-900 mb-2">{title}</h3>
      <p className="font-body text-[15px] text-gray-600 mb-4">{description}</p>
      <Button href={buttonHref}>
        {buttonText} <ArrowRight />
      </Button>
    </div>
  );
}
