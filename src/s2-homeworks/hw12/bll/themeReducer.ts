export type ThemeType = {
    themeId: number
}

const initState: ThemeType = {
    themeId: 1,
}

export const themeReducer = (state: ThemeType = initState, action: ActionType): ThemeType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id};
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)

type ActionType = ReturnType<typeof changeThemeId>