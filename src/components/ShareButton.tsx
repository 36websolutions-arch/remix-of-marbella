import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  /** Path relative to site root, e.g. "/villa-rental/villa-stella" or "/yacht-charter#malex" */
  path?: string;
  /** Optional label to include in the toast/copy */
  label?: string;
  className?: string;
  variant?: "icon" | "compact";
}

export default function ShareButton({
  path,
  label,
  className,
  variant = "icon",
}: ShareButtonProps) {
  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const url = path
      ? `${window.location.origin}${path}`
      : window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied", {
        description: label ? `${label} link is ready to share.` : url,
      });
    } catch {
      toast.error("Unable to copy link", { description: url });
    }
  };

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={handleShare}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-4 py-3 border border-primary/30 text-foreground font-medium tracking-wider uppercase text-xs rounded-lg hover:border-primary hover:text-primary transition-all duration-300",
          className,
        )}
        aria-label={label ? `Share ${label}` : "Share link"}
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className={cn(
        "inline-flex items-center justify-center w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 text-foreground hover:bg-background hover:text-primary hover:border-primary transition-all duration-300",
        className,
      )}
      aria-label={label ? `Share ${label}` : "Share link"}
    >
      <Share2 className="w-4 h-4" />
    </button>
  );
}

/** Convert a name into a URL-safe slug for anchor IDs. */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
