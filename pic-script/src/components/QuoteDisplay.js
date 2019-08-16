import React from 'react'
import { connect } from 'react-redux'

const QuoteDisplay = (props) => {
  console.log('quote props', props)

  return (
    <div className='centered'>
      {props.quoteIsLoading ? (
        <h1>
          Much like music, great art is also found in the spaces between your
          graphic elements.
        </h1>
      ) : (
        <>
          <h1>{props.singleQuote.quoteText}</h1>
          {}
          <h5>-{props.singleQuote.quoteAuthor}</h5>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('quote state', state)
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
