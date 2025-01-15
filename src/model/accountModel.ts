export interface SearchAccountModel {
  accountNo: string;
  name: string;
}

export interface CreateAccountModel {
  accountNo: string;
  userId: number;
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

export interface UpdateAccountViewModel {
  id: number;
  accountNo: string;
  userId: number;
  updateBy: string;
}
