import { IPathPages } from "./AllProps"

export const Titles: any = {
    '/admin': 'Все транзакции',
    '/admin/porters': 'Партнеры',
    '/admin/clients': 'Клиенты',
    '/admin/settings': 'Настройка',
    '/admin/settings/users': 'Профил',
    '/admin/settings/profile': 'Темы',
}

export const PathPages: IPathPages[] = [
    { path: '/admin', title: 'Все транзакции', key: 1 },
    { path: '/admin/porters', title: 'Партнеры', key: 2 },
    { path: '/admin/clients', title: 'Клиенты', key: 3 },
    { path: '/admin/settings', title: 'Настройка', key: 4 },
    { path: '/admin/settings/users', title: 'Профил', key: 5 },
    { path: '/admin/settings/profile', title: 'Темы', key: 6 },
]