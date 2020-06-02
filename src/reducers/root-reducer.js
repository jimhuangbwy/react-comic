const SELECT_BOOK = 'select_book';
const SELECT_CHAPTER = 'select_chapter';
const SELECT_PAGE = 'select_page';
const SELECT_THUMBNAIL = 'select_thumbnail';

const initialState = {
  root: {
    book: {},
    chapters: [],
    currChapter: 0,
    currPage: 0,
    currThumbnail: 0,
  }
};

export default function apps(state, action) {
  if (!state) state = initialState; 

  switch(action.type) {
    case SELECT_CHAPTER:
      return Object.assign({}, state, { 
        currChapter: action.cidx,
        currPage: 0,
      });
    case SELECT_PAGE:
      return Object.assign({}, state, { 
        currPage: action.pidx,
      });
    case SELECT_THUMBNAIL:
      return Object.assign({}, state, { 
        currThumbnail: action.pidx,
      });
    default:
      return state;
  }
}

export function selectChapter(cidx) {
  return {
    type: SELECT_CHAPTER,
    cidx,
  };
}

export function selectPage(pidx) {
  return {
    type: SELECT_PAGE,
    pidx,
  };
}

export function selectThumbnail(pidx) {
  return {
    type: SELECT_THUMBNAIL,
    pidx,
  };
}
