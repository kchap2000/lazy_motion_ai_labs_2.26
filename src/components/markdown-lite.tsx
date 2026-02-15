type MarkdownLiteProps = {
  text: string;
};

export default function MarkdownLite({ text }: MarkdownLiteProps) {
  const blocks = text.split("\n\n");

  return (
    <div className="space-y-4 text-[color:var(--neutral-300)]">
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n").filter(Boolean);
        const isList = lines.every((line) => line.trim().startsWith("- "));

        if (isList) {
          return (
            <ul key={`${blockIndex}-${block.slice(0, 12)}`} className="list-disc space-y-1 pl-6">
              {lines.map((line) => (
                <li key={`${blockIndex}-${line}`}>{line.replace(/^-\s*/, "")}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${blockIndex}-${block.slice(0, 12)}`} className="leading-7">
            {block}
          </p>
        );
      })}
    </div>
  );
}
