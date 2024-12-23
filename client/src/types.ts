export type TeacherType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  colleges: CollegeType[];
  modules: ModuleType[];
};

export type TeacherResponse = {
  data: TeacherType;
};

export type TeachersResponse = {
  data: TeacherType[];
  total: number;
};

export type CollegeType = {
  id: string;
  name: string;
  email: string;
  location: string;
  logo: string;
  phone: string;
  teachers: TeacherType[];
  professions: ProfessionType[];
};

export type CollegeResponse = {
  data: CollegeType[];
  total: number;
};

export type StudentType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  group_id: number;
  groups: GroupType[];
};

export type StudentResponse = {
  data: StudentType[];
  total: number;
};

export type ModuleType = {
  id: string;
  name: string;
  requirements: string;
  code: number;
  teachers: TeacherType[];
  professions: ProfessionType[];
};

export type ModuleRespone = {
  data: ModuleType[];
  total: number;
};

export type ProfessionType = {
  id: string;
  name: string;
  description: string;
  code: number;
  modules: ModuleType[];
  colleges: CollegeType[];
};

export type ProfessionResponse = {
  data: ProfessionType[];
  total: number;
};

export type GroupType = {
  id: string;
  group_number: number;
  college_id: string | number;
  profession_id: string | number;
};

export type GroupResponse = {
  data: GroupType[];
  total: number;
};

export type Link = {
  text: string;
  path: string;
};

export type monthlyData = {
  count: number;
  month: string;
};

export type DetailType = {
  id: string;
  name: string;
  links: Link[];
  monthlyData: monthlyData[];
  total: number;
};

export type DetailsResponseType = {
  data: DetailType[];
};
