import type { DataColumn, Balance } from 'interfaces';

const columns: Array<DataColumn<Balance>> = [
    {
        title: 'Код',
        dataIndex: 'code',
    },
    {
        title: 'Название',
        dataIndex: 'title',
    },
    {
        title: 'Категория',
        dataIndex: ['category', 'title'],
    },
    {
        title: 'Остаток на начало',
        dataIndex: 'startBalance',
    },

    {
        title: 'Приход',
        dataIndex: 'income',
    },
    {
        title: 'Расход',
        dataIndex: 'outcome',
    },
    {
        title: 'Остаток',
        dataIndex: 'endBalance',
    },
];

export default columns;
