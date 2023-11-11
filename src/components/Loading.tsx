import { Progress } from 'antd';
import React from 'react';

const Loading = () => {
  return (
    <Progress
      size="small"
      percent={90}
      showInfo={false}
      className="fixed z-50"
    />
  );
};

export default Loading;
