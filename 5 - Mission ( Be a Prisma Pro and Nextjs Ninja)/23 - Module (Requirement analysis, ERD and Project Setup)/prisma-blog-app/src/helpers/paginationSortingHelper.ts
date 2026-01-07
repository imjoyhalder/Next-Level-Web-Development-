type IOptions = {
    page?: number | string
    limit?: number | string
    sortBy?: string | undefined
    sortOrder?: string | undefined
}

type IOptionsResult = {
    page: number
    limit: number
    sortBy: string
    sortOrder: string
    skip: number
}

export const paginationSortingHelper = (options: IOptions): IOptionsResult => {
    const page: number = Number(options.page) || 1
    const limit: number = Number(options.limit) || 10
    const sortBy: string | undefined = options.sortBy || 'createdAt'
    const sortOrder: string | undefined = options.sortOrder || 'desc'
    const skip: number = (page - 1) * limit

    return {
        page,
        limit,
        sortBy,
        sortOrder,
        skip
    }
}