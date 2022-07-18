import React from 'react';

type TProps = {
    children: React.ReactNode;
};

export const Page: React.FC<TProps> = props => {
    const { children } = props;
    return <React.Fragment>{children}</React.Fragment>;
};
