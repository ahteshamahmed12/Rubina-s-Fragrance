'use client';

import { useEffect, useState } from 'react';

function CartIndicator() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const items = Object.values(cart);
    // Total quantity (if quantity is tracked), else use items.length
    const totalItems = items.reduce((acc: number, item: any) => acc + item.quantity, 0);
    setCount(totalItems);
  }, []);

  if (count === 0) return null;

  return (
    <div className="border-red-500 text-white bg-red-500 rounded-full px-[8px] right-20 md:right-32 top-6 absolute text-sm font-semibold">
      {count}
    </div>
  );
}

export default CartIndicator;
