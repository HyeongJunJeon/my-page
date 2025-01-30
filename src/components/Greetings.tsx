"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface AOSWrapperProps {
  children: React.ReactNode;
  delay: string;
}

const AOSWrapper = ({ children, delay }: AOSWrapperProps) => (
  <div
    data-aos="fade-up"
    data-aos-easing="ease-out"
    data-aos-duration="500"
    data-aos-once="true"
    data-aos-delay={delay}
  >
    {children}
  </div>
);

export default function Greetings() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-center">
      <AOSWrapper delay="300">
        <h1 className="mb-4 text-4xl font-bold">안녕하세요!</h1>
      </AOSWrapper>
      <AOSWrapper delay="600">
        <h2 className="semi-bold mb-4 text-3xl">FE 개발자 전형준입니다.</h2>
      </AOSWrapper>
      <AOSWrapper delay="900">
        <p className="text-xl text-gray-600">
          시간이 들더라도 현재 상황과 목표를 파악하기 위해 꼼꼼히 분석하여
          <br />
          주도적으로 프로젝트를 진행하기 위해 노력합니다.
        </p>
      </AOSWrapper>
    </div>
  );
}
