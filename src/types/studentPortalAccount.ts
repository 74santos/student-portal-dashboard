import type { User } from "./user";
import type { StudentProfile } from "./student";

export type StudentPortalAccount = {
  user: User;
  student: StudentProfile;
  password: string;
};