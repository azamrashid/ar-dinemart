-- *************** --
-- *** Queries *** -- 
-- *************** --
-- Create cart table
CREATE TABLE cartTable (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    subcat VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL,
    total_price INT NOT NULL,
    create_time TIMESTAMP DEFAULT NOW()
);

