import type { User } from "./user";
import type { StudentProfile } from "./student";

export type StoredAccount = {
  user: User;
  student: StudentProfile;
  password: string;
};