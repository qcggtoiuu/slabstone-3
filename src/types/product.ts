export interface Product {
  id: string;
  name: string;
  slug: string;
  code: string;
  price: number;
  surface: string | null;
  thickness: string | null;
  dimensions: string | null;
  finish: string | null;
  color: string | null;
  application: string | null;
  catalog_url: string | null;
  description: string | null;
  created_at: string | null;
  updated_at: string | null;
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
