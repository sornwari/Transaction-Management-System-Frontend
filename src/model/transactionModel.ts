export interface SearchTransactionsModel {
  name: string;
  accountNo: string;
  transactionName: string;
  transactionType: string;
  status: string;
  fromDate?: Date | null;
  toDate?: Date | null;
}

export interface CreateTransactionModel {
  accountNo: string;
  transactionName: string;
  transactionType: string;
  amount: number;
  status: string;
  createBy: string;
}

export interface UpdateTransactionViewModel {
  id: number;
  accountNo: string;
  transactionName: string;
  transactionType: string;
  amount: number;
  status: string;
  updateBy: string;
}

