import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 2.6rem;
  line-height: 2.8rem;
  background-color: rgba(86, 86, 86, 0.5);
  color: transparent;
  text-shadow: 0px 0px 1px rgb(255, 255, 255);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`
const H4 = styled.h4`
  text-shadow: 0 0 2px rgba(46, 46, 46, 0.3);
  text-align: right;
  padding-right: 4rem;
`

const QuoteDisplay = (props) => {
  return (
    <div className='centered'>
      {props.quoteIsLoading ? (
        <H1>
          Much like music, great art is also found in the spaces between your
          graphic elements.
        </H1>
      ) : (
        <>
          <H1>{props.singleQuote.quoteText}</H1>
          {}
          <H4>-{props.singleQuote.quoteAuthor}</H4>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quoteIsLoading: state.quoteReducer.quoteIsLoading,
    // quote: state.quoteReducer.quote,
    singleQuote: state.quoteReducer.singleQuote
  }
}

export default connect(
  mapStateToProps,
  {}
)(QuoteDisplay)
