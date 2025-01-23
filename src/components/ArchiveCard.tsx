import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ArchiveCardProps {
  icon: StaticImageData;
  title: string;
  link: string;
  main_description: string;
  sub_description?: string;
}

export default function ArchiveCard({
  icon,
  title,
  link,
  main_description,
  sub_description,
}: ArchiveCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-lg"
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-bold text-black hover:underline">
            {title}
          </h3>
          <p className="mt-2 font-semibold text-gray-600">{main_description}</p>
          {sub_description && (
            <p className="mt-2 text-gray-600">{sub_description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
