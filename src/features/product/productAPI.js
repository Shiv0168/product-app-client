// A mock function to mimic making an async request for data
export function addProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/api/v1/product`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/api/v1/product`);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(_id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/api/v1/product/${_id}`);
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteProductById(_id) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/product/${_id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function editProductById(_id, update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8080/api/v1/product/${_id}`,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
