import type { User }
from "../types/user";

export const mockUser: User = {
  id: "1",

  name: "Chris",

  email:
    "chris@example.com",

  role: "student",

  createdAt:
    new Date().toISOString(),
};