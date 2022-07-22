import type { HolderType } from 'interfaces/holder';
import { HolderTypes } from 'interfaces/holder';

export const renderHolderType = (action: HolderType): string => {
    const map: Record<HolderType, string> = {
        person: 'Частное лицо',
        stock: 'Склад',
        wholesaler: 'Оптовик',
    };

    return map[action];
};

export const getHoldersMap = (): Array<{
    value: HolderType;
    label: string;
}> => {
    return Object.keys(HolderTypes)
        .map(key => key.toLowerCase())
        .map((type: HolderType) => ({
            value: type,
            label: renderHolderType(type),
        }));
};
