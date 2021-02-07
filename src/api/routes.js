export const CHARACTERS = 'character'
export const LOCATIONS = 'locations'
export const EPISODES = 'episodes'

export const CHARACTERS_BY_PAGE = (page = 1) => `${CHARACTERS}?page=${page}`
