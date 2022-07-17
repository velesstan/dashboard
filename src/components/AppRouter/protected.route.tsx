import React from 'react';

type TProps = {
    children: React.ReactNode;
};

export const ProtectedRoute: React.FC<TProps> = props => {
    const { children } = props;

    return <React.Fragment>{children}</React.Fragment>;
};
