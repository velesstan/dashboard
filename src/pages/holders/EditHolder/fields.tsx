import { Select } from 'antd';

import { getHoldersMap } from 'utils';

const fields = () => {
    return [
        {
            label: 'Название',
            name: 'title',
        },
        {
            component: <Select options={getHoldersMap()} />,
            label: 'Тип',
            name: 'type',
        },
    ];
};

export default fields;
