import React from 'react';

type TProps = {
    readonly title: string;
    readonly children: React.ReactNode;
};

export const Page: React.FC<TProps> = props => {
    const { title, children } = props;
    return (
        <React.Fragment>
            <h2>{title}</h2>
            {children}
        </React.Fragment>
    );
};
