import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getPic, getQuote } from '../actions'

const PicDisplay = (props) => {
  console.log('pic props', props)

  handleClick = (e) => {
    e.preventDefault()
    props.getPic()
    props.getQuote()
  }


  return (
    <div className='container'>
      <button onClick={props.getPic}>
        {props.picIsLoading ? (
          <Loader type='Triangle' color='#00BFFF' height='20' width='20' />
        ) : (
          'NEW PICTURE'
        )}
      </button>
      <h1>PIC SCRIPT</h1>
      {props.picIsLoading ? (
        <div> </div>
      ) : (
        <img src={props.pic} alt='quote overlay' />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pic: state.pic,
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  { getPic }
)(PicDisplay)
