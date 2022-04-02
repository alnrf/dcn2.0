export interface Order {
  id: number;
  customer_id: number;
  platform_id: number;
  uuid: string;
  nr: number;
  type: string;
  shipping_amount: number;
  delivery_amount: number;
  delivery_date_min: string;
  delivery_date_max: string;
  delivery_fee_amount: number;
  delivery_min_free_amount: number;
  discount_amount: number;
  subtotal_amount: number;
  total_amount: number;
  status: string;
  created_at: string;
  updated_at: string;
  products: [
    {
      id: number;
      title: string;
      amount: number;
      quantity: number;
      stock_unity: number;
      quantity_type: string;
      total_amount: number;
      image: string;
    }
  ];
  payment: {
    id: number;
    uuid: string;
    processor: string;
    card_brand: string;
    payment_mode: string;
    amount: number;
    change_amount: number;
    installments: number;
    payment_data: string;
    meta_id:string;
    gateway_id: string;
    status: string;
    created_at: string;
    updated_at: string;
  };
  customer: {
    phone_number: string;
    email_address: string;
    first_name: string;
    last_name: string;
    full_name: string;
    social_name:string;
  };
  address: {
    title: string;
    zipcode: string;
    street_name: string;
    number: string;
    complement: string;
    neighbor: string;
    city: string;
    city_id:number;
    state: string;
    state_id: number;
    country: string;
    lat: any;
    lng: any;
  };
}
