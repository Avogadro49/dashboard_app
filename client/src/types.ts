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

// __tablename__ = 'students'
// id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
// name = db.Column(db.String(255), nullable=False)
// email = db.Column(db.String(255), nullable=False)
// phone = db.Column(db.Integer, nullable=False)
// group_id = db.Column(db.BigInteger, db.ForeignKey('groups.id'), default=None)

// group = db.relationship('Group', back_populates = 'student', lazy=True)

export type StudentType = {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  //issue here? =>
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
  id: string | number;
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
