-- Add application field to products table
ALTER TABLE products ADD COLUMN IF NOT EXISTS application TEXT;
