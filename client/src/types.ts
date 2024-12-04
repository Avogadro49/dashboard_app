export type TeacherType = {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  colleges: CollegesType[];
  modules: ModulesType[];
};

export type TeacherResponse = {
  data: TeacherType;
};

export type TeachersResponse = {
  data: TeacherType[];
  total: number;
};

export type CollegesType = {
  id: number | string;
  name: string;
  email: string;
  location: string;
  logo: string;
  phone: string;
  teachers: TeacherType[];
  professions: ProfessionsType[];
};

export type CollegeResponse = {
  data: CollegesType[];
  total: number;
};

export type ModulesType = {
  id: number | string;
  name: string;
  requirements: string;
  code: number;
  teachers: TeacherType[];
  professions: [];
};

export type ProfessionsType = {
  id: string | number;
  name: string;
  description: string;
  code: number;
  modules: ModulesType[];
  colleges: CollegesType[];
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

export type DetailsType = {
  id: string;
  name: string;
  links: Link[];
  total: number;
};

export type DetailsResponseType = {
  data: DetailsType[];
};
