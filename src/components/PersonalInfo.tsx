import { FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import { MdCalendarToday, MdEmail, MdSchool } from "react-icons/md";

const personalInfoData = [
  {
    icon: <FaUser className="h-6 w-6" />,
    title: "이름",
    description: "전형준",
  },
  {
    icon: <MdCalendarToday className="h-6 w-6" />,
    title: "생년월일",
    description: "95.01.05",
  },
  {
    icon: <FaMapMarkerAlt className="h-6 w-6" />,
    title: "위치",
    description: "인천광역시 서구",
  },
  {
    icon: <FaPhone className="h-6 w-6" />,
    title: "연락처",
    description: "010-9395-0178",
  },
  {
    icon: <MdEmail className="h-6 w-6" />,
    title: "이메일",
    description: "wehj0105@gmail.com",
  },
  {
    icon: <MdSchool className="h-6 w-6" />,
    title: "학력",
    description: "방통대 컴퓨터과학과 재학 (2023.08 ~ )",
  },
];

export default function PersonalInfo() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {personalInfoData.map((info, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center">
            {info.icon}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{info.title}</h2>
            <p className="text-gray-600">{info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
