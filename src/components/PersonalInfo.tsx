import { FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import { MdCalendarToday, MdEmail, MdSchool } from "react-icons/md";
import PersonalInfoCard from "./PersonalInfoCard";
import type { PersonalInfo, personalInfoInsertedIcon } from "@/model/About";
import { getPersonalInfos } from "@/service/about";

const enum PersonalInfoKey {
  NAME = "name",
  BIRTH = "birth",
  RESIDENCE = "residence",
  PHONE = "phone",
  EMAIL = "email",
  EDUCATION = "education",
}

const iconSize = "h-6 w-6";

const ICONS = {
  [PersonalInfoKey.NAME]: <FaUser className={iconSize} />,
  [PersonalInfoKey.BIRTH]: <MdCalendarToday className={iconSize} />,
  [PersonalInfoKey.RESIDENCE]: <FaMapMarkerAlt className={iconSize} />,
  [PersonalInfoKey.PHONE]: <FaPhone className={iconSize} />,
  [PersonalInfoKey.EMAIL]: <MdEmail className={iconSize} />,
  [PersonalInfoKey.EDUCATION]: <MdSchool className={iconSize} />,
};

async function fetchPersonalInfos(): Promise<personalInfoInsertedIcon[]> {
  const myInfos = await getPersonalInfos();

  // sanity에는 react-icon을 저장하지 못하기 때문에, key를 이용하여 icon을 추가해줍니다.
  return myInfos.map((info: PersonalInfo) => ({
    ...info,
    icon: ICONS[info.key as PersonalInfoKey],
  }));
}

export default async function PersonalInfo() {
  const personalInfos = await fetchPersonalInfos();
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {personalInfos.map((info) => {
        const { key, ...props } = info;
        return <PersonalInfoCard key={key} {...props} />;
      })}
    </div>
  );
}
