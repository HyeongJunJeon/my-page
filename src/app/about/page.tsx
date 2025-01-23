import Skills from "@/components/Skills";
import { FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import { MdCalendarToday, MdEmail, MdSchool } from "react-icons/md";

export default function About() {
  return (
    <div className="space-y-20 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-16 flex items-center justify-center gap-2 text-5xl font-black">
          <span>ABOUT ME</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <FaUser className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">이름</h2>
              <p className="text-gray-600">전형준</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <MdCalendarToday className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">생년월일</h2>
              <p className="text-gray-600">95.01.05</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <FaMapMarkerAlt className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">위치</h2>
              <p className="text-gray-600">인천광역시 서구</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <FaPhone className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">연락처</h2>
              <p className="text-gray-600">010-9395-0178</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <MdEmail className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">이메일</h2>
              <p className="text-gray-600">wehj0105@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <MdSchool className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">학력</h2>
              <p className="text-gray-600">
                방통대 컴퓨터과학과 재학 (2023.08 ~ )
              </p>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </div>
  );
}
