export interface CreateUserDto {
  email: string | null;

  password: string | null;

  firebaseId: string | null;

  marketingTerm: boolean;

  regionId: string;
}
