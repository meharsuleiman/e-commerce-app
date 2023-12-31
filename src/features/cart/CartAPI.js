export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/cart', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    console.log(update);
    const response = await fetch('http://localhost:8080/cart/' + update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteCartItem(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/cart/' + itemId, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}

export function fetchItemByUserId(userId) {
  return new Promise(async (resolve) => {
    // TODO: Replace with real API call
    const response = await fetch('http://localhost:8080/cart?user=' + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function resetCart(userId) {
  return new Promise(async (resolve) => {
    const response = await fetchItemByUserId(userId);
    const items = response.data;

    for (const item of items) {
      console.log(item);
      await deleteCartItem(item.id);
    }
    resolve({ status: 'success' });
  });
}
