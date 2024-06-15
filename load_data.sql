CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    stock INTEGER NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    sale_discount NUMERIC(5, 2) NOT NULL,
    is_on_sale BOOLEAN NOT NULL,
    image_url VARCHAR(255),
    sale_date_end TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COPY products (
    name,
    stock,
    description,
    price,
    sale_discount,
    is_on_sale,
    image_url,
    sale_date_end
)
FROM '/docker-entrypoint-initdb.d/data.csv' DELIMITER ',' CSV HEADER;