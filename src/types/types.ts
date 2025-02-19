import { Database } from '../database.types';

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];
export type Enums<T extends keyof Database['public']['Enums']> =
  Database['public']['Enums'][T];

  
export interface orderTypes  {
    id:string;
    created_at:string;
    address:AddressTypes;
    pickupTime:string;

}

export interface AddressTypes{
    id:string;
    created_at:string;
    name:string;
    street:string;
    city:string;
    zipcode:string;
    country:string;
    userId:Profile;
}

export interface Profile{
    id:string;
    updated_at:string;
    full_name:string;
    email:string;
    avatar_url:string;
    username:string;
    website:string;
    group:string;
}

