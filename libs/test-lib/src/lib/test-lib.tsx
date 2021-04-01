import React from 'react';

import './test-lib.module.scss';

/* eslint-disable-next-line */
export interface TestLibProps {}

export function TestLib(props: TestLibProps) {
  return (
    <div>
      <h1>Welcome to test-lib!</h1>
    </div>
  );
}

export default TestLib;
