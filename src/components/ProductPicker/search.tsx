import React, { Fragment, useEffect, useState } from 'react';
import { BehaviorSubject, from, interval } from 'rxjs';
import {
    debounce,
    distinctUntilChanged,
    filter,
    map,
    switchMap,
    tap,
} from 'rxjs/operators';
import Select, {
    components,
    OptionProps,
    SingleValueProps,
} from 'react-select';

import { Product } from 'interfaces';
import apiClient from 'utils/http';

const Option = (props: OptionProps<Product, false>) => {
    return (
        <components.Option key={props.data._id} {...props}>
            <span style={{ fontWeight: 600 }}>{props.data.code}</span> -{' '}
            <span>{props.data.title}</span>
        </components.Option>
    );
};
const SingleValue = (props: SingleValueProps<Product>) => {
    return (
        <components.SingleValue {...props}>
            {props.data.code}
        </components.SingleValue>
    );
};
const search$ = new BehaviorSubject('');
type TProps = {
    readonly onSelect: (value: Product) => void;
    readonly innerRef?: any;
};

const ProductSearch: React.FC<TProps> = props => {
    const { onSelect, innerRef } = props;
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const searchSubscription$ = search$
            .pipe(
                filter(value => !!value),
                debounce(() => interval(300)),
                distinctUntilChanged(),
                switchMap(value =>
                    from(
                        apiClient.get<Product[]>(`/products?code=${value}`)
                    ).pipe(
                        map(({ data }) => data),
                        tap(() => setLoading(false))
                    )
                )
            )
            .subscribe(setProducts);
        return () => {
            searchSubscription$.unsubscribe();
        };
    }, []);

    return (
        <Fragment>
            <Select
                isLoading={loading}
                placeholder='Выбрать'
                components={{
                    Option,
                    SingleValue,
                }}
                ref={innerRef}
                options={products}
                getOptionLabel={p => p.code}
                getOptionValue={p => p._id}
                onInputChange={input => search$.next(input)}
                onChange={product => product && onSelect(product as Product)}
            />
        </Fragment>
    );
};

export default ProductSearch;
