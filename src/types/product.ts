export interface Product {
  id: string;
  name: string;
  slug: string;
  code: string;
  price: number;
  surface?: string;
  thickness?: string;
  dimensions?: string;
  finish?: string;
  color?: string;
  application?: string;
  catalog_url?: string;
  description?: string;
  created_at: string;
  updated_at: string;
  images?: ProductImage[];
}

export interface ProductImage {
  id: string;
  product_id: string;
  url: string;
  alt_text?: string;
  is_primary: boolean;
  display_order: number;
  created_at: string;
}
