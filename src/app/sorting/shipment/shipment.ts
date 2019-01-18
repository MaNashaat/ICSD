import { Customer } from '../customer/customer';

export interface Shipment {
    ID: number;
    Code: string;
    NameAr: string;
    NameEn: string;
    Organizations_Id?: number;
    Customers_Id?: number;
    CustomerAddresses_Id?: number;
    ShipmentValue?: number;
    ShipmentDt?: Date;
    Notes: string;
    Customer: Customer[];
}
