export type PersonalInfo = {
  key: string;
  title: string;
  value: string;
  order: number;
};

//sanity에 react-icons를 사용할 수 없어서 key값과 대조하여 아이콘을 저장
export type personalInfoInsertedIcon = PersonalInfo & {
  icon: React.ReactNode;
};

export type Skill = {
  icon: string;
  type: string;
  title: string;
  order: number;
};
