export type TeacherType = {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  colleges: [CollegesType];
  modules: [ModulesType];
};

export type TeachersResponse = {
  data: [TeacherType];
  total: number;
};

export type CollegesType = {
  id: number | string;
  name: string;
  email: string;
  location: string;
  logo: string;
  phone: string;
  professions: [];
  teachers: [TeacherType];
};

export type ModulesType = {
  id: number | string;
  name: string;
  requirements: string;
  code: number;
  teachers: [TeacherType];
  professions: [];
};
