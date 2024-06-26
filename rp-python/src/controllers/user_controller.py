from typing import Optional
import uuid


class UserController:
    @staticmethod
    def get_user_by_id(user_id: str) -> Optional[dict]:
        from ..models.User import User
        user = User.query.get(user_id)
        return user
    
    @staticmethod
    def get_user_by_username(username: str) -> Optional[dict]:
        from ..models.User import User
        user = User.query.filter_by(username=username).first()
        return user
    
    @staticmethod
    def create_user(user: dict) -> dict:
        from ..models.User import User
        from ..app import db
        new_user = User(id=uuid.uuid4(), username=user['username'], email=user['email'])
        db.session.add(new_user)
        db.session.commit()
        return new_user.to_dict()
    
    @staticmethod
    def update_user(user_id: str, user: dict) -> dict:
        from ..models.User import User
        from ..app import db
        user_to_update = User.query.get(user_id)
        user_to_update.username = user['username']
        user_to_update.email = user['email']
        user_to_update.avatar = user['avatar']
        db.session.commit()
        return user_to_update.to_dict()
    
    