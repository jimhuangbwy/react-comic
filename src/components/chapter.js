import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from "react-router-dom";

import { selectChapter, selectPage, selectThumbnail } from '../reducers/root-reducer';

import TopBar from './top-bar';

const Chapter = (props) => {
  const {
    book, chapters, 
    currChapter, currPage, currThumbnail, 
    chapterChange, pageChange, thumbChange,
  } = props;

  let { cidx } = useParams();
  //chapterChange(cidx);

  return (
    <div>
      <TopBar /> 
      <div className={'container pt-2'}>
        <div className={'row mb-2'}>
          <div className={'col-auto'}>
            <Link to={'/'}>
              <h3 className={'m-0 mr-2'}>{book.title}</h3>
            </Link>
          </div>
          <div className={'col'}>
            <select className={'mr-2'} id="select-chapters" onChange={chapterChange}>
              {chapters.map((ch, idx) => {
                return (
                  <option key={ch.cid} value={idx}>Ch {idx+1}</option>
                );
              })}
            </select>
            <select id="select-pages" onChange={pageChange} value={currPage}>
              {chapters[currChapter].pages.map((pg, idx) => {
                return (
                  <option key={pg.pgid} value={idx}>Page {idx+1}</option>
                );
              })}
            </select>
          </div>
          <div className={'col text-right'}>
            <input type="radio" id="dark" name="bg" value="dark"/>
            <label>Dark</label>
            <input type="radio" id="light" name="bg" value="light"/>
            <label>Light</label>
          </div>
        </div>

        <div className={'row mb-2'}>
          <div className={'col-1'}>
            <div className={'row align-items-center justify-content-center h-100 cursor-pointer hover-gray'} onClick={() => pageChange(currPage-1)}>
              <h1>&lt;</h1>
            </div>
          </div>
          <div className={'col-10'}>
            <img src={chapters[currChapter].pages[currPage].img} className={'w-100'} />
          </div>
          <div className={'col-1'}>
            <div className={'row align-items-center justify-content-center h-100 cursor-pointer hover-gray'} onClick={() => pageChange(currPage+1)}>
              <h1>&gt;</h1>
            </div>
          </div>
        </div>

        <div className={'row mb-2'}>
          <div className={'col-1'}>
            <div className={'row align-items-center justify-content-center h-100 bg-black text-white hover-gray'} onClick={() => thumbChange(currThumbnail-1)}>
              <h1>&lt;</h1>
            </div>
          </div>
          <div className={'col'}>
            <div className={'row'}>
              {chapters[currChapter].pages.map((pg, idx) => {
                if (idx >= currThumbnail && idx < currThumbnail+5 && idx < chapters[currChapter].pages.length) {
                  if (idx === currPage) {
                    return (
                      <div key={idx} className={'col'}>
                        <img src={chapters[currChapter].pages[idx].img} className={'border-box border-thumbnail-black w-100 h-100'} />
                      </div>
                    );
                  } else {
                    return (
                      <div key={idx} className={'col'}>
                        <img src={chapters[currChapter].pages[idx].img} className={'border-box border-thumbnail-trans w-100 h-100'} onClick={() => pageChange(idx)} />
                      </div>
                    );
                    
                  }
                }
              })}
            </div>
          </div>
          <div className={'col-1'}>
            <div className={'row align-items-center justify-content-center h-100 bg-black text-white hover-gray'} onClick={() => thumbChange(currThumbnail+1)}>
              <h1>&gt;</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ root }) {
  return { ...root };
}

function mapDispatchToProps(dispatch) {
  return { 
    chapterChange: function(evt) { 
      let cidx = evt.target && evt.target.value || evt;
      dispatch(selectChapter(cidx)); 
    },
    pageChange: function(evt) { 
      let pidx = evt.target && evt.target.value || evt;
      dispatch(selectPage(pidx)); 
    },
    thumbChange: function(evt) { 
      let pidx = evt.target && evt.target.value || evt;
      dispatch(selectThumbnail(pidx)); 
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
