export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full bg-gray-200 px-3 py-1 text-sm">
          {tag}
        </span>
      ))}
    </div>
  );
}
