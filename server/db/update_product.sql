UPDATE product
    description = $2
WHERE 
    product_id LIKE $1