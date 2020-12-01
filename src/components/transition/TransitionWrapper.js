/** Transition HOC, applies when changing between routes. */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const TransitionWrapper = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={props.match.path === '/output' ? 'SlideIn' : 'SlideOut'}
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};
export default TransitionWrapper;