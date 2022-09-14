// 직접적으로 컴포넌트를 marketing 앱에서 가져오면 커플링이 늘어난다. 따라서 아래와 같이 function을 변경해주는 작업이 필요.

import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
