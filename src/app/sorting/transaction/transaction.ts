export interface Transaction {
    ID: number;
    Organizations_Id?: number;
    DeliveryStatuses_Id?: number;
    Status?: string;
    IDTypes_Id?: number;
    TransactionDt?: Date;
    IDNum?: string;
    ReturnNote?: string;
    IsDelivered?: boolean;
    FromDt?: Date;
    ToDt?: Date;
}
