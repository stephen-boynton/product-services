from typing import Optional
import json
import os

current_dir = os.path.dirname(os.path.abspath(__file__))
json_file_path = os.path.join(current_dir, '..', 'data', 'products.json')
with open(json_file_path, 'r') as json_file:
    products_data: list[dict] = json.load(json_file)


class ProductController:
    # Public methods
    @staticmethod
    def get_all_products(filters: dict) -> list[dict]:        
        return_data = products_data
        is_sale = filters.get('is_sale')
        if is_sale is not None:
            return_data = ProductController.__get_products_by_sale(is_sale)

        return return_data

    @staticmethod
    def get_product_by_id(product_id: str) -> Optional[dict]:
        for product in products_data:
            if product['id'] == product_id:
                return product
        return None
    
    @staticmethod
    def delete_product_by_id(product_id: str) -> Optional[dict]:
        for product in products_data:
            if product['id'] == product_id:
                products_data.remove(product)
                return product
        return None
    
    

    # Private methods
    def __get_products_by_sale(is_sale: bool) -> list[dict]:
        sale_products = [product for product in products_data if product['isOnSale'] == is_sale]
        return sale_products