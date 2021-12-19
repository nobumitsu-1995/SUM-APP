export type userState = {
    isSignedIn: boolean
    icon?: string
    uid?: string
    username?: string
    email?: string
};

export type userAction = {
    type: string
    payload: userState
}