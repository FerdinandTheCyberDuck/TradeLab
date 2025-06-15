from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ...core.deps import get_current_active_user
from ...models import get_db
from ...models.user import User
from ...schemas.user import User as UserSchema

router = APIRouter()

@router.get("/me", response_model=UserSchema)
def read_user_me(
    current_user: User = Depends(get_current_active_user)
) -> Any:
    return current_user
