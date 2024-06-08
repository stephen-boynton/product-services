from typing import Optional
import json
import os
import uuid

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
        sort = filters.get('sort')
        limit = filters.get('limit')
        page = filters.get('page')
        page_size = filters.get('page_size')
        sort_order = filters.get('sort_order')
        query = filters.get('query')
        
        if query is not None:
            return_data = [product for product in return_data if query.lower() in product['product'].lower()]
        
        if sort is not None:
            if sort_order == 'desc':
                return_data.sort(key=lambda x: x[sort], reverse=True)
            else:
                return_data.sort(key=lambda x: x[sort])
        
        if page is not None and page_size is not None:
            start = (page - 1) * page_size
            end = start + page_size
            return_data = return_data[start:end]

        if is_sale is not None:
            return_data = ProductController.__get_products_by_sale(is_sale)
            
        if limit is not None:
            return_data = return_data[:limit]

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
    
    @staticmethod
    def patch_product_by_id(product_id: str, product_data: dict) -> Optional[dict]:
        for product in products_data:
            if product['id'] == product_id:
                product.update(product_data)
                return product
        return None
    
    @staticmethod
    def post_product(product_data: dict) -> dict:
        product_data['id'] = uuid.uuid4().hex
        products_data.append(product_data)
        return product_data
    
    

    # Private methods
    def __get_products_by_sale(is_sale: bool) -> list[dict]:
        sale_products = [product for product in products_data if product['isOnSale'] == is_sale]
        return sale_products