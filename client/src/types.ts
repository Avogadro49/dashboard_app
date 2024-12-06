export type TeacherType = {
  id: number | string;
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
  id: number | string;
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
  id: string | number;
  name: string;
  description: string;
  code: number;
  modules: ModuleType[];
  colleges: CollegeType[];
};

export type GroupType = {
  id: string | number;
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

export type DetailType = {
  id: string;
  name: string;
  links: Link[];
  total: number;
};

export type DetailsResponseType = {
  data: DetailType[];
};
