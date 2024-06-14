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
            if sort == 'price':
                ProductController.__sort_price(return_data, sort_order)
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
    @staticmethod
    def __get_products_by_sale(is_sale: bool) -> list[dict]:
        sale_products = [product for product in products_data if product['isOnSale'] == is_sale]
        return sale_products

    @staticmethod
    def __convert_price_to_float(price: str) -> float:
        print(isinstance(price, str))
        num = price.replace('$', '').replace(',', '')
        # return float(num)
        return 0.0

    @staticmethod
    def __get_sort_key(item):
        price = ProductController.__convert_price_to_float(item['price'])
        if item['isOnSale']:
            discount_percent = item['sale_discount']
            discount_price = price * discount_percent
            return min(discount_price, price)
        return price

    @staticmethod
    def __sort_price(products: list[dict], sort_order: str):
        sorted(products, key=ProductController.__get_sort_key)
        if sort_order == 'desc':
            products.reverse()
        return products
