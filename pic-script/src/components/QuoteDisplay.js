import React from 'react'
import { connect } from 'react-redux'

const QuoteDisplay = (props) => {
  console.log('quote props', props)

  return (
    <div className='centered'>
      {props.quoteIsLoading ? <div /> : <h1>{props.quote}</h1>}
      <h1>
        Much like music, great art is also found in the spaces between your
        graphic elements.
      </h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quoteIsLoading: state.quoteIsLoading,
    quote: state.quote
  }
}

export default connect(
  mapStateToProps,
  {}
)(QuoteDisplay)
