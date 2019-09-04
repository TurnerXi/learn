import { SWITCH_MAIN_PAGE } from './types';

export const switchMainPage = (page = 'recom') => {
  return { type: SWITCH_MAIN_PAGE, page }
}
