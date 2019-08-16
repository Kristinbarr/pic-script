import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getPic, getQuote } from '../actions'

const PicDisplay = (props) => {
  return (
    <div className='container'>
      <div className='img-header-container'>
        {props.picIsLoading ? (
          <div> </div>
        ) : (
          <img src={props.pic} alt='randomly generated' />
        )}
        <h1>PIC SCRIPT</h1>
        <button onClick={props.getPic} className='pic-button'>
          {props.picIsLoading ? (
            <Loader type='ThreeDots' color='#BBBBBB' height={10} width={90} />
          ) : (
            'NEW PICTURE'
          )}
        </button>
        <button onClick={props.getQuote} className='quote-button'>
          {props.quoteIsLoading ? (
            <Loader type='ThreeDots' color='#BBBBBB' height={10} width={60} />
          ) : (
            'NEW QUOTE'
          )}
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pic: state.picReducer.pic,
    picIsLoading: state.picReducer.picIsLoading
  }
}

export default connect(
  mapStateToProps,
  { getPic, getQuote }
)(PicDisplay)
