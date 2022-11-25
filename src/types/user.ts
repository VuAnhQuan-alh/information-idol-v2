export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: false;
  createdAt: Date;
  updatedAt: Date;
}
