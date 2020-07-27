import React from 'react';
import Top from './top';
import Center from './center';
import Bottom from './bottom';

export default () => {
  // 合作
  return (
    <div className="ui-cooperation">
      <div className="ui-cooperation-content">
        <Top/>
        <Center/>
        <Bottom/>
      </div>
    </div>
  );
};
