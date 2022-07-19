import type { DataColumn } from 'interfaces';
import type { Product } from 'store/features/products';

const columns: Array<DataColumn<Product>> = [
    {
        title: 'Название',
        dataIndex: 'title',
    },
    {
        title: 'Код',
        dataIndex: 'code',
    },
];

export default columns;
