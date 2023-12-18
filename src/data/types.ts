
export type Node = {
    name: string;
    id: string;
    description: string;
    owner: {
        login: string;
        __typename: string
    }
    __typename: string;
}

export type Edge = {
    __typename: string;
    node: Node;
}

export type Repo = {
    repositories: Array<Edge> | []
}