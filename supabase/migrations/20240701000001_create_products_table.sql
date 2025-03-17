CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  code TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  surface TEXT,
  thickness TEXT,
  dimensions TEXT,
  finish TEXT,
  color TEXT,
  catalog_url TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt_text TEXT,
  is_primary BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS products_slug_idx ON products(slug);
CREATE INDEX IF NOT EXISTS product_images_product_id_idx ON product_images(product_id);

alter publication supabase_realtime add table products;
alter publication supabase_realtime add table product_images;