import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import TopBar from './top-bar';

class Main extends Component {
  componentDidMount() {
    //const { dispatch } = this.props;
  }

  render() {
    const { book, chapters } = this.props;

    let stars = [];
    for (let i=0; i<book.rate; i++) {
      stars.push('*');
    }

    return (
      <div>
        <TopBar />
        <div className={'container pt-2'}>
          <div className={'row mb-2'}>
            <div className={'col px-sm-3'}>
              <div className={'border-cover'}>
                <img src={`${book.cover}`} className={'w-100'} />
              </div>
            </div>
            <div className={'col px-sm-3'}>
              <h1 className={'bg-black py-1 text-white text-center'}>{book.title}</h1>

              <table className="w-100">
                <tbody>
                  <tr>
                    <td className={'p-2'}> 
                      <strong className={'mr-3'}>Genres</strong>
                    </td>
                    <td> 
                      <span>{book.genres.join('/')}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={'p-2'}> 
                      <strong className={'mr-3'}>Author</strong>
                    </td>
                    <td> 
                      <span>{book.author}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={'p-2'}> 
                      <strong className={'mr-3'}>Status</strong>
                    </td>
                    <td> 
                      <span>{book.status}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className={'p-2'}> 
                      <strong className={'mr-3'}>Rate</strong>
                    </td>
                    <td> 
                      <span>{stars.join(' ')}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className={'p-2 m-0'}>Summary</h3>
              <div className={'p-2'} dangerouslySetInnerHTML={{ __html: book.summary }} />
            </div>
          </div>

          <div className={'mb-2'}>
            <div>
              <div className={'bg-black w-200px'}>
                <h2 className={'text-white text-center m-0 p-2'}>All Chapters</h2>
              </div>
            </div>
            <div className={'border-cover bg-white'}>
              <div>
                {chapters.map((ch, idx) => {
                  return (
                    <div className={'p-3'} key={ch.cid}>
                      <Link to={`/chapter/${idx}`}>
                        <h3 className={'m-0'}>Chapter {idx+1}: {ch.title}</h3>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ root }) {
  return {
    book: root.book,
    chapters: root.chapters,
  };
}

export default connect(mapStateToProps)(Main);
