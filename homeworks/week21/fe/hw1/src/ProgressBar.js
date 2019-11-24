import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Progress = styled.div`
  width:${props => props.ratio * 100}%;
`;

class ProgressBar extends PureComponent {
  static defaultProps = {
    ratio: 0,
  }

  static propTypes = {
    ratio: PropTypes.number,
  }

  render() {
    const { ratio } = this.props;
    return (
      <div className="pbar">
        <Progress className="progress" ratio={ratio} />
      </div>
    );
  }
}

export default ProgressBar;
