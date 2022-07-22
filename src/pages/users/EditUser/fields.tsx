import { Select } from 'antd';

import { Role } from 'interfaces';

type Dependencies = {
    roles: Array<Role>;
};

const fields = (dependencies: Dependencies) => {
    const { roles } = dependencies;

    return [
        {
            name: 'username',
            label: 'Логин',
        },
        {
            name: 'password',
            label: 'Пароль',
        },
        {
            component: (
                <Select
                    options={roles.map(({ title, _id }) => ({
                        label: title,
                        value: _id,
                    }))}
                />
            ),
            size: 8,
            name: 'role',
            label: 'Уровень доступа',
        },
        {
            name: 'firstName',
            label: 'Имя',
        },
        {
            name: 'lastName',
            label: 'Фамилия',
        },
    ];
};

export default fields;
