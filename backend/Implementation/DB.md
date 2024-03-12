## Database schema

it has four collections:

- Seller
- Buyer
- Product
- Transaction

### Seller Schema

```js
sellerSchema = {
  username: String,
  password: String,
  procucts: array_of_productIDs,
};
```

### Buyer Schema

```js
buyerSchema = {
  username: String,
  password: String,
  transactions: array_of_transactions,
};
```

### Product Schema

```js
productSchema = {
  title: String,
  description: String,
  quantity: Number,
  price: Float,
  inStock: Boolean,
  seller: sellerId,
};
```

### Transaction

```js
transactionSchema = {
  sellerId: objectId,
  buyerId: objectId,
  productId: objectId,
  quantity: Number,
  price: Float,
};
```
