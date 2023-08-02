export default interface APISell {
    id: number
    model: string
    plate: string
    price: number
    createdAt: number
    clientId: string
    cardealerId: string
    client: {
        id: number
        name: string
        number: string
    }
    cardealer: {
        id: string
        name: string
        owner?: boolean
    }
}