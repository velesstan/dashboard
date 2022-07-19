import type { WaybillActionType } from 'interfaces/waybill';

export const getWaybillType = (action: WaybillActionType): string => {
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
