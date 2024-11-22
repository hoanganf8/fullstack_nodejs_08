export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  phone?: string;
  created_at?: Date;
  updated_at?: Date;
}
