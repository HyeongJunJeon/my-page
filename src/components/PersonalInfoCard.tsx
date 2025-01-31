import { personalInfoInsertedIcon } from "@/model/About";

export default function PersonalInfoCard({
  icon,
  title,
  value,
}: personalInfoInsertedIcon) {
  return (
    <div className="flex items-center gap-4">
      <div className="w flex h-12 w-12 items-center justify-center">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}
