import React, { useEffect, useState } from 'react';

export function useMounted() {
  const [mounted, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  });
  return mounted;
}
