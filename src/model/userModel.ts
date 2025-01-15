export interface SearchUserModel {
  name: string;
  userName: string;
  roleName: string;
  fromDate?: Date | null;
  toDate?: Date | null; 
}

export interface CreateUserModel {
  name: string;
  userName: string;
  password: string;
  roleId: number;
  createBy: string;
}

export interface UpdateUserViewModel {
  id: number;
  name: string;
  userName: string;
  password: string;
  roleId: number;
  updateBy: string;
}

