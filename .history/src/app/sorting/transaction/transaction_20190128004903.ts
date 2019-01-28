import { Customer } from '../customer/customer';

export interface Transaction {
  ID: number;
  DeliveryStatuses_Id?: number;
  Status?: string;
  IDTypes_Id?: number;
  TransactionDt?: Date;
  IDNum?: string;
  ReturnNote?: string;
  IsDelivered?: boolean;
  Courier?: Customer;
  Customers?: Customer[];
}
