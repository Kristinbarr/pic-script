import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getPic, getQuote } from '../actions'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 1rem;
  border: none;
  margin: 1rem;
  cursor: pointer;
  color: rgb(68, 68, 68);
  border: 1px solid #dddddd;
  font-size: 0.8rem;
  background: rgba(255,255,255,0.3);
  transform: translate(0, -10px);
`
const H1 = styled.h1`
  display: inline-block;
  margin: 2rem;
  padding: 0;
  font-size: 3rem;
  transform: translate(0, 0);
  text-shadow: 0 1px #fffbf466, 0 -1px #fffbf466, 1px 0 #fffbf466, -1px 0 #fffbf466;
`
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: auto;
`

const PicDisplay = (props) => {
  return (
    <div className='container'>
      <div className='img-header-container'>
        {props.picIsLoading ? (
          <div> </div>
        ) : (
          <Img src={props.pic} alt='randomly generated' />
        )}
        <H1>PIC SCRIPT</H1>
        <Button onClick={props.getPic} className='pic-button'>
          {props.picIsLoading ? (
            <Loader type='ThreeDots' color='#BBBBBB' height={10} width={90} />
          ) : (
            'NEW PICTURE'
          )}
        </Button>
        <Button onClick={props.getQuote} className='quote-button'>
          {props.quoteIsLoading ? (
            <Loader type='ThreeDots' color='#BBBBBB' height={10} width={60} />
          ) : (
            'NEW QUOTE'
          )}
        </Button>
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
