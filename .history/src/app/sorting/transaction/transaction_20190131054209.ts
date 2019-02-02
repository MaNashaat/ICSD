import { Customer } from '../customer/customer';

export interface Transaction {
  ID: number;
  Shipments_Id?: number;
  Shipments_Code?: string;
  Organizations_Name?: string;
  Vendors_Name?: string;
  Couriers_Name?: string;
  Customers_Name?: string;
  DeliveryStatuses_Id?: number;
  IDTypes_Id?: number;
  TransactionDt?: string;
  IDNum?: string;
  Notes?: string;
  IsDelivered?: boolean;
  Courier?: Customer;
  Customers?: Customer[];
}

export interface TransactionSC {
  TransactionDt?: string;
  Couriers_Id?: number;
  CustomerIDs?: number[];
}
