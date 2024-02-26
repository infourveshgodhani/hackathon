// src/store-visit/store-visit.interface.ts
export interface IStoreVisit {
    id?: number;
    ssid: number;
    storeId?: number;
    customerId: number;
    isCheckedIn?: boolean;
    hasPurchased?: boolean;
    isExpired?: boolean;
    UTM: string;
    walkinId?: number;
    created_at?: Date;
    updated_at?: Date;
}
  
export interface ICustomerWalkin {
    walkinId: number;
    customerId: number;
}