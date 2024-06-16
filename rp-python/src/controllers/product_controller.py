from typing import Optional
import uuid


class ProductController:
    # Public methods
    @staticmethod
    def get_all_products(filters: dict) -> list[dict]:
        try:
            from ..models.Product import Product
            products_query = Product.query
            is_sale = filters.get('is_sale')
            if is_sale is not None:
                products_query = products_query.filter(Product.isOnSale == is_sale)
                
            sort = filters.get('sort')
            if sort is not None:
                if sort == 'price':
                    if filters.get('sort_order') == 'desc':
                        products_query = products_query.order_by(Product.price.desc())
                    else:
                        products_query = products_query.order_by(Product.price.asc())
                elif sort == 'discount':
                    if filters.get('sort_order') == 'desc':
                        products_query = products_query.order_by(Product.sale_discount.desc())
                    else:
                        products_query = products_query.order_by(Product.sale_discount.asc())
                elif sort == 'name':
                    if filters.get('sort_order') == 'desc':
                        products_query = products_query.order_by(Product.product.desc())
                    else:
                        products_query = products_query.order_by(Product.product.asc())
                elif sort == 'id':
                    if filters.get('sort_order') == 'desc':
                        products_query = products_query.order_by(Product.id.desc())
                    else:
                        products_query = products_query.order_by(Product.id.asc())
                
            query = filters.get('query')
            if query is not None:
                products_query = products_query.filter(Product.name.like(f'%{query}%'))
            
            page = filters.get('page')
            if page is not None:
                page_size = filters.get('page_size')
                products_query = products_query.offset((page - 1) * page_size).limit(page_size)
            
            return products_query.all()
        finally:
            from ..app import db
            db.session.close()

    @staticmethod
    def get_product_by_id(product_id: str) -> Optional[dict]:
        from ..models.Product import Product
        product = Product.query.get(product_id)
        print(product)
        return product


    @staticmethod
    def delete_product_by_id(product_id: str, products_data) -> Optional[dict]:
        return None

    @staticmethod
    def patch_product_by_id(product_id: str, products_data, product_data: dict) -> Optional[dict]:
        return None


    @staticmethod
    def post_product(product_data: dict) -> dict:
        return None


    # Private methods
    @staticmethod
    def __get_products_by_sale(is_sale: bool) -> list[dict]:
        sale_products = [product for product in products_data if product['isOnSale'] == is_sale]
        return sale_products

    @staticmethod
    def __convert_price_to_float(price: str) -> float:
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
    
