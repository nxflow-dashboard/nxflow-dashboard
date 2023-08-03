export type APIPartialUser = {
    id: string
    username: string
    access?: APIPartialAccess
}

export type APIPartialAccess = {
    id: string
    name: string
}

export type APIPartialPurchase = {
    id: string
    model: string
    plate: string
    price: number
    createdAt: Date
    cardealerId: string
    clientId: string
}

export type APIClient = {
    id: string
    name: string
    number: string
    createdAt: Date
    purchases: APIPartialPurchase[]
}

export type APIUser = {
    id: string
    name: string
    accessToken: string
    owner?: boolean
    sells: APIPartialPurchase[]
    access?: APIAccess
}

export type APIPurchase = APIPartialPurchase & {
    client: { id: string, name: string, number: string, createdAt: Date }
    cardealer: { id: string, name: string, owner?: boolean }
}

export type APIAccess = APIPartialAccess & {
    permissions: { id: string, permission: string }[]
}
