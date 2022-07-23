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
        align: 'right',
    },

    {
        title: 'Приход',
        dataIndex: 'income',
        align: 'right',
    },
    {
        title: 'Расход',
        render: ({ outcome }) => (outcome * -1).toString(),
        align: 'right',
    },
    {
        title: 'Остаток',
        dataIndex: 'endBalance',
        align: 'right',
    },
];

export default columns;
