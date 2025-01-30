interface PersonalInfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function PersonalInfoCard({
  icon,
  title,
  description,
}: PersonalInfoCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
