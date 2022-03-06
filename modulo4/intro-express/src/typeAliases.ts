export type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}