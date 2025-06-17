from fastapi import status, HTTPException
from pydantic import BaseModel


class HTTPAnswer(BaseModel):
    detail: str


SuccessAnswer = HTTPAnswer(detail="success")


UsernameAlreadyExistsException = HTTPException(
    status_code=status.HTTP_409_CONFLICT, detail="Username already exsists"
)
EmailAlreadyExistsException = HTTPException(
    status_code=status.HTTP_409_CONFLICT, detail="Email already exists"
)

UserNotFoundException = HTTPException(
    status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
)

WrongUsernameOrPasswordException = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST, detail="wrong username or password"
)

UnauthorizedException = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED, detail="unauthorized"
)

ForbiddenException = HTTPException(
    status_code=status.HTTP_403_FORBIDDEN, detail="you have not enough rights"
)

RoleNotFoundException = HTTPException(
    status_code=status.HTTP_404_NOT_FOUND, detail="role not found"
)
ProductAlreadyExsistsException = HTTPException(
    status_code=status.HTTP_409_CONFLICT, detail="Product already exsists"
)

ProductNotFoundException = HTTPException(
    status_code=status.HTTP_404_NOT_FOUND, detail="Product not found"
)

WrongFileFormatException = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST, detail="wrong file format"
)


NoProductsChosenException = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST, detail="choose at least one product"
)

UserHasNoBasketException = HTTPException(
    status_code=status.HTTP_404_NOT_FOUND, detail="you have no basket("
)

TooMuchException = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST, detail="not enough quantity"
)

OrderNotFoundException = HTTPException(
    status_code=status.HTTP_404_NOT_FOUND, detail="Order not found"
)

ModelLoadException=HTTPException(
    status_code=status.HTTP_404_NOT_FOUND,detail="model was not loaded"
)