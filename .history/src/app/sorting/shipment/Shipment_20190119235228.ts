import { Customer } from '../customer/customer';
import { Organization } from '../organization/organization';
import { Vendor } from '../vendor/vendor';

export interface Shipment {
  ID: number;
  Code: string;
  Organizations_Id?: number;
  Customers_Id?: number;
  CustomerAddresses_Id?: number;
  Vendor_Id?: number;
  Courier_Id?: number;
  Currencies_Id?: number;
  PaymentMethodes_Id?: number;
  ShipmentValue?: number;
  ShipmentDt?: Date;
  Notes: string;
}
