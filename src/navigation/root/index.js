import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    /* eslint-disable-next-line babel/no-unused-expressions */
    navigationRef.current?.navigate(name, params);
}
