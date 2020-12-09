# backendusers Api
# Endpoint is /user

## Examples are tested in Postman

--------------------------------------------------------------

## Method Get

### Test

http://localhost:3000/user 



### Response
```
[
  {
      "gamesWishList": [
          "star wars",
          "halo",
          "prutt"
      ],
      "_id": "5fc8f6216845126870048a2c",
      "username": "AboveSpring",
      "password": "12345",
      "__v": 0
  },
  {
      "gamesWishList": [
          "star wars",
          "halo",
          "halo 3",
          "CS"
      ],
      "_id": "5fc90d0fa4231f56e072e1cf",
      "username": "Knutte1337",
      "password": "1337",
      "__v": 0
  }
]   
```
#### Status 200 ok

--------------------------------------------------------------

## Method Get by ID

### Test

http://localhost:3000/user/5fc8f6216845126870048a2c


### Response
```
{
  "gamesWishList": [
      "star wars",
      "halo",
      "prutt"
  ],
  "_id": "5fc8f6216845126870048a2c",
  "username": "AboveSpring",
  "password": "12345",
  "__v": 0
}    
```
#### Status 200 ok

--------------------------------------------------------------

## Method Get by Query string

### Test

 http://localhost:3000/user/?username=AboveSpring
 

### Response
```
{
  "gamesWishList": [
      "star wars",
      "halo",
      "prutt"
  ],
  "_id": "5fc8f6216845126870048a2c",
  "username": "AboveSpring",
  "password": "12345",
  "__v": 0
} 
```
#### Status 200 ok

--------------------------------------------------------------

## Method POST

### Test
```
http://localhost:3000/user 

body JSON : =>

{
  "username": "AboveSpring",
  "password": "12345",
  "gamesWishList": ["star wars","halo","prutt"]
}
```
### Response
```
 {
    "gamesWishList": [
        "star wars",
        "halo",
        "prutt"
    ],
    "_id": "5fc8fe8f6845126870048a2d",
    "username": "AboveSpring",
    "password": "12345",
    "__v": 0
}
```
#### Status 201 Created

--------------------------------------------------------------

## Method PUT by Id

### Test
```
http://localhost:3000/user/5fc8fe8f6845126870048a2d

body JSON : =>

{
  "username": "AboveSpring",
  "password": "12345",
  "gamesWishList": ["star wars","halo","prutt"]
}
```
### Response
```
 {
    "gamesWishList": [
        "star wars",
        "halo",
        "prutt"
    ],
    "_id": "5fc8fe8f6845126870048a2d",
    "username": "AboveSpring",
    "password": "12345",
    "__v": 0
}
```
#### Status 200 Ok

--------------------------------------------------------------

## Method DELETE by Id

### Test

http://localhost:3000/user/5fc8fe8f6845126870048a2d

### Response
```
{
    "gamesWishList": [
        "star wars",
        "halo",
        "prutt"
    ],
    "_id": "5fc8fe8f6845126870048a2d",
    "username": "AboveSpring",
    "password": "12345",
    "__v": 0
}
```
#### Status 200 Ok

--------------------------------------------------------------
