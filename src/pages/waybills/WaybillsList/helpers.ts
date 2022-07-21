import type { WaybillActionType, WaybillType } from 'interfaces/waybill';

export const getWaybillActionType = (action: WaybillActionType): string => {
    const map: Record<WaybillActionType, string> = {
        buy: 'Покупка',
        import: 'Импорт',
        sell: 'Продажа',
        utilization: 'Утилизация',
        move: 'Перемещение',
        production: 'Производство',
    };

    return map[action];
};

export const getWaybillType = (action: WaybillType): string => {
    const map: Record<WaybillType, string> = {
        income: 'Приход',
        outcome: 'Расход',
    };

    return map[action];
};
