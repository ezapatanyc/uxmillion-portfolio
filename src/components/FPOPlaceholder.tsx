import { ImageIcon } from "lucide-react";

interface FPOPlaceholderProps {
  label: string;
  caption?: string;
  layout?: "single" | "split";
  aspectRatio?: "16/9" | "4/3" | "1/1" | "auto";
}

const FPOPlaceholder = ({
  label,
  caption,
  layout = "single",
  aspectRatio = "16/9",
}: FPOPlaceholderProps) => {
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "16/9":
        return "aspect-video";
      case "4/3":
        return "aspect-[4/3]";
      case "1/1":
        return "aspect-square";
      case "auto":
        return "min-h-[200px]";
      default:
        return "aspect-video";
    }
  };

  const PlaceholderBox = ({ text }: { text: string }) => (
    <div
      className={`${getAspectRatioClass()} rounded-2xl border-2 border-dashed border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/5 to-primary/5 flex flex-col items-center justify-center gap-3 shadow-lg shadow-neon-cyan/10`}
    >
      <ImageIcon className="w-10 h-10 text-neon-cyan/40" />
      <span className="text-sm text-muted-foreground text-center px-4 font-medium">
        FPO: {text}
      </span>
    </div>
  );

  if (layout === "split") {
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PlaceholderBox text={`${label} (Desktop)`} />
          <PlaceholderBox text={`${label} (Mobile)`} />
        </div>
        {caption && (
          <p className="text-sm text-muted-foreground text-center mt-3">
            {caption}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <PlaceholderBox text={label} />
      {caption && (
        <p className="text-sm text-muted-foreground text-center mt-3">
          {caption}
        </p>
      )}
    </div>
  );
};

export default FPOPlaceholder;
