import {USER_ROUTE, SIMP_ROUTE, MODERATOR_ROUTE, ADMIN_ROUTE, SEASON_ROUTE, SERIA_ROUTE,
    NEWEST_ROUTE, ORDERS_ROUTE, SEARCH_ROUTE, POPULAR_ROUTE, ALL_SORT_ROUTE, SERIES_ROUTE, 
    SERIES_CATEGORY_ROUTE, SERIAL_ROUTE} from '../src/utils/consts'
import All from '../src/pages/routines/All'
import Newest from '../src/pages/routines/Newest'
import Orders from '../src/pages/routines/Orders'
import Popular from '../src/pages/routines/Popular'
import Search from '../src/pages/routines/Search'
import Series from '../src/pages/routines/Series'
import Account from '../src/pages/users/Account'
import Admin from '../src/pages/users/Admin'
import Auth from '../src/pages/users/Auth'
import Seria from '../src/pages/Seria'
import Serial from '../src/pages/Serial'

export const publicRoutes = [
    {
        path: USER_ROUTE + '/registrate',
        Component: Auth
    },
    {
        path: USER_ROUTE + '/login',
        Component: Auth
    },
    {
        path: USER_ROUTE + '/auth',
        Component: Auth
    },
    {
        path: SERIES_ROUTE,
        Component: Series
    },
    {
        path: SERIES_ROUTE  + '/:page',
        Component: Series
    },
    {
        path: SERIES_CATEGORY_ROUTE,
        Component: Series
    },
    {
        path: SERIES_CATEGORY_ROUTE  + '/:page',
        Component: Series
    },
    {
        path: ORDERS_ROUTE,
        Component: Orders
    },
    {
        path: ORDERS_ROUTE  + '/:page',
        Component: Orders
    },
    {
        path: SEARCH_ROUTE,
        Component: Search
    },
    {
        path: SERIAL_ROUTE,
        Component: Serial
    },
    {
        path: SERIAL_ROUTE + '/:page',
        Component: Serial
    },
    {
        path: SEASON_ROUTE,
        Component: Serial
    },
    {
        path: SEASON_ROUTE + '/:page',
        Component: Serial
    },
    {
        path: SERIA_ROUTE,
        Component: Seria
    },
    {
        path: SERIA_ROUTE + '/:studio',
        Component: Seria
    },
    {
        path: POPULAR_ROUTE,
        Component: Popular
    },
    {
        path: NEWEST_ROUTE,
        Component: Newest
    },
    {
        path: NEWEST_ROUTE + '/:page',
        Component: Newest
    },
    {
        path: '/all/list',
        Component: All
    },
    {
        path: ALL_SORT_ROUTE + "/category/:name",
        Component: All
    },
    {
        path: ALL_SORT_ROUTE + "/janre/:name",
        Component: All
    },
    {
        path: ALL_SORT_ROUTE + "/mark/:name",
        Component: All
    },
]

export const simpRoutes = [
    {
        path: SIMP_ROUTE + SERIES_ROUTE,
        Component: Series
    },
    {
        path: SIMP_ROUTE + SERIES_ROUTE  + '/:page',
        Component: Series
    },
    {
        path: SIMP_ROUTE + SERIES_CATEGORY_ROUTE,
        Component: Series
    },
    {
        path: SIMP_ROUTE + SERIES_CATEGORY_ROUTE  + '/:page',
        Component: Series
    },
    {
        path: SIMP_ROUTE + ORDERS_ROUTE,
        Component: Orders
    },
    {
        path: SIMP_ROUTE + ORDERS_ROUTE  + '/:page',
        Component: Orders
    },
    {
        path: SIMP_ROUTE + SEARCH_ROUTE,
        Component: Search
    },
    {
        path: SIMP_ROUTE + SERIAL_ROUTE,
        Component: Serial
    },
    {
        path: SIMP_ROUTE + SERIAL_ROUTE + '/:page',
        Component: Serial
    },
    {
        path: SIMP_ROUTE + SEASON_ROUTE,
        Component: Serial
    },
    {
        path: SIMP_ROUTE + SEASON_ROUTE + '/:page',
        Component: Serial
    },
    {
        path: SIMP_ROUTE + SERIA_ROUTE,
        Component: Seria
    },
    {
        path: SIMP_ROUTE + SERIA_ROUTE + '/:studio',
        Component: Seria
    },
    {
        path: SIMP_ROUTE + POPULAR_ROUTE,
        Component: Popular
    },
    {
        path: SIMP_ROUTE + NEWEST_ROUTE,
        Component: Newest
    },
    {
        path: SIMP_ROUTE + NEWEST_ROUTE + '/:page',
        Component: Newest
    },
    {
        path: SIMP_ROUTE + '/all/list',
        Component: All
    },
    {
        path: SIMP_ROUTE + ALL_SORT_ROUTE + "/category/:name",
        Component: All
    },
    {
        path: SIMP_ROUTE + ALL_SORT_ROUTE + "/janre/:name",
        Component: All
    },
    {
        path: SIMP_ROUTE + ALL_SORT_ROUTE + "/mark/:name",
        Component: All
    },
    {
        path: SIMP_ROUTE + SERIA_ROUTE + "/comment",
        Component: Seria
    },
    {
        path: SIMP_ROUTE + SERIA_ROUTE + "/mark",
        Component: Seria
    },
    {
        path: SIMP_ROUTE + SERIA_ROUTE + "/like",
        Component: Seria
    },
    {
        path: SIMP_ROUTE + '/account',
        Component: Account
    },
    {
        path: SIMP_ROUTE + '/account/change',
        Component: Account
    },
    {
        path: SIMP_ROUTE + '/account/sendReq',
        Component: Account
    },
]

export const moderatorRoutes = [
    {
        path: MODERATOR_ROUTE + SERIES_ROUTE,
        Component: Series
    },
    {
        path: MODERATOR_ROUTE + SERIES_ROUTE  + '/:page',
        Component: Series
    },
    {
        path: MODERATOR_ROUTE + SERIES_CATEGORY_ROUTE,
        Component: Series
    },
    {
        path: MODERATOR_ROUTE + SERIES_CATEGORY_ROUTE  + '/:page',
        Component: Series
    },
    {
        path: MODERATOR_ROUTE + ORDERS_ROUTE,
        Component: Orders
    },
    {
        path: MODERATOR_ROUTE + ORDERS_ROUTE  + '/:page',
        Component: Orders
    },
    {
        path: MODERATOR_ROUTE + SEARCH_ROUTE,
        Component: Search
    },
    {
        path: MODERATOR_ROUTE + SERIAL_ROUTE,
        Component: Serial
    },
    {
        path: MODERATOR_ROUTE + SERIAL_ROUTE + '/:page',
        Component: Serial
    },
    {
        path: MODERATOR_ROUTE + SEASON_ROUTE,
        Component: Serial
    },
    {
        path: MODERATOR_ROUTE + SEASON_ROUTE + '/:page',
        Component: Serial
    },
    {
        path: MODERATOR_ROUTE + SERIA_ROUTE,
        Component: Seria
    },
    {
        path: MODERATOR_ROUTE + SERIA_ROUTE + '/:studio',
        Component: Seria
    },
    {
        path: MODERATOR_ROUTE + POPULAR_ROUTE,
        Component: Popular
    },
    {
        path: MODERATOR_ROUTE + NEWEST_ROUTE,
        Component: Newest
    },
    {
        path: MODERATOR_ROUTE + NEWEST_ROUTE + '/:page',
        Component: Newest
    },
    {
        path: MODERATOR_ROUTE + '/all/list',
        Component: All
    },
    {
        path: MODERATOR_ROUTE + ALL_SORT_ROUTE + "/category/:name",
        Component: All
    },
    {
        path: MODERATOR_ROUTE + ALL_SORT_ROUTE + "/janre/:name",
        Component: All
    },
    {
        path: MODERATOR_ROUTE + ALL_SORT_ROUTE + "/mark/:name",
        Component: All
    },
    {
        path: MODERATOR_ROUTE + SERIA_ROUTE + "/comment",
        Component: Seria
    },
    {
        path: MODERATOR_ROUTE + SERIA_ROUTE + "/mark",
        Component: Seria
    },
    {
        path: MODERATOR_ROUTE + SERIA_ROUTE + "/like",
        Component: Seria
    },
    {
        path: MODERATOR_ROUTE + SERIA_ROUTE + "/delete",
        Component: Seria
    },
    {
        path: MODERATOR_ROUTE + ORDERS_ROUTE + "/answer:id",
        Component: Orders
    },
    {
        path: MODERATOR_ROUTE + '/account',
        Component: Account
    },
    {
        path: MODERATOR_ROUTE + '/account/change',
        Component: Account
    },
    {
        path: MODERATOR_ROUTE + '/block/:id',
        Component: Account
    },
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE + SERIES_ROUTE,
        Component: Series
    },
    {
        path: ADMIN_ROUTE + SERIES_ROUTE  + '/:page',
        Component: Series
    },
    {
        path: ADMIN_ROUTE + SERIES_CATEGORY_ROUTE,
        Component: Series
    },
    {
        path: ADMIN_ROUTE + SERIES_CATEGORY_ROUTE  + '/:page',
        Component: Series
    },
    {
        path: ADMIN_ROUTE + ORDERS_ROUTE,
        Component: Orders
    },
    {
        path: ADMIN_ROUTE + ORDERS_ROUTE  + '/:page',
        Component: Orders
    },
    {
        path: ADMIN_ROUTE + SEARCH_ROUTE,
        Component: Search
    },
    {
        path: ADMIN_ROUTE + SERIAL_ROUTE,
        Component: Serial
    },
    {
        path: ADMIN_ROUTE + SERIAL_ROUTE + '/:page',
        Component: Serial
    },
    {
        path: ADMIN_ROUTE + SEASON_ROUTE,
        Component: Serial
    },
    {
        path: ADMIN_ROUTE + SEASON_ROUTE + '/:page',
        Component: Serial
    },
    {
        path: ADMIN_ROUTE + SERIA_ROUTE,
        Component: Seria
    },
    {
        path: ADMIN_ROUTE + SERIA_ROUTE + '/:studio',
        Component: Seria
    },
    {
        path: ADMIN_ROUTE + POPULAR_ROUTE,
        Component: Popular
    },
    {
        path: ADMIN_ROUTE + NEWEST_ROUTE,
        Component: Newest
    },
    {
        path: ADMIN_ROUTE + NEWEST_ROUTE + '/:page',
        Component: Newest
    },
    {
        path: ADMIN_ROUTE + '/all/list',
        Component: All
    },
    {
        path: ADMIN_ROUTE + ALL_SORT_ROUTE + "/category/:name",
        Component: All
    },
    {
        path: ADMIN_ROUTE + ALL_SORT_ROUTE + "/janre/:name",
        Component: All
    },
    {
        path: ADMIN_ROUTE + ALL_SORT_ROUTE + "/mark/:name",
        Component: All
    },
    {
        path: ADMIN_ROUTE + SERIA_ROUTE + "/comment",
        Component: Seria
    },
    {
        path: ADMIN_ROUTE + SERIA_ROUTE + "/mark",
        Component: Seria
    },
    {
        path: ADMIN_ROUTE + SERIA_ROUTE + "/like",
        Component: Seria
    },
    {
        path: ADMIN_ROUTE + SERIA_ROUTE + "/delete",
        Component: Seria
    },
    {
        path: ADMIN_ROUTE + "/adding",
        Component: Admin
    },
    {
        path: ADMIN_ROUTE + "/query",
        Component: Admin
    },
    {
        path: ADMIN_ROUTE + "/query/:id",
        Component: Admin
    },
]