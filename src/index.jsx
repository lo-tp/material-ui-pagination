import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import NavigationFirstPage from 'material-ui/svg-icons/navigation/first-page';
import NavigationLastPage from 'material-ui/svg-icons/navigation/last-page';

const flatButtonStyle = {
  minWidth: 16,
};

const calculateRange = arg => {
  const { total, current, display } = arg;
  let end = total;
  let start = 1;
  if (display < end) {
    // rounded to the nearest integer smaller
    let beforeNumber = Math.round(display / 2 - 0.5);
    const afterNumber = beforeNumber;
    if (display % 2 === 0) {
      beforeNumber -= 1;
    }

    if (current <= beforeNumber + 1) {
      end = display;
    } else if (current >= (total - afterNumber)) {
      start = total - display + 1;
    } else {
      start = current - beforeNumber;
      end = current + afterNumber;
    }
  }

  return { end, start };
};

const getStateFromProps = props => {
  let { total, current, display } = props;
  total = total > 0 ? total : 1;
  current = current > 0 ? current : 1;
  display = display > 0 ? display : 1;
  current = current < total ? current : total;
  display = display < total ? display : total;
  return { current, display, total };
};

const Page = ({ value, isActive, onClick }) => (
  <FlatButton
    style = { flatButtonStyle }
    label = { value.toString() }
    primary = { isActive }
    onTouchTap = { onClick }
  />
);
Page.propTypes = {
  value: PropTypes.number,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

const FirstPageLink = ({ onClick }) => (
  <FlatButton
    style = { flatButtonStyle }
    icon = { <NavigationFirstPage /> }
    onTouchTap = { onClick }
  />
);

FirstPageLink.propTypes = {
  onClick: PropTypes.func,
};

const LastPageLink = ({ onClick }) => (
  <FlatButton
    style = { flatButtonStyle }
    icon = { <NavigationLastPage /> }
    onTouchTap = { onClick }
  />
);
LastPageLink.propTypes = {
  onClick: PropTypes.func,
};

export default class Pagination extends React.Component {

  constructor(props) {
    super(props);
    const tem = getStateFromProps(props);
    this.setCurrent = this.setCurrent.bind(this);

    this.state = {
      ...tem,
      ...calculateRange(tem),
    };
  }

  componentWillReceiveProps(nextProps) {
    const tem = getStateFromProps(nextProps);
    this.setState({
      ...tem,
      ...calculateRange(tem),
    });
  }

  setCurrent(current) {
    const tem = { ...this.state, current };
    this.props.onChange(current);
    this.setState({
      ...tem,
      ...calculateRange(tem),
    });
  }

  render() {
    const array = [];
    for (let i = this.state.start; i <= this.state.end; i += 1) {
      array.push(i);
    }

    return (
      <div >
        <FirstPageLink
          onClick = { () => this.setCurrent(1) }
        />
        {
            array.map((page, k) => (
              <Page
                key = { k }
                value = { page }
                isActive = { this.state.current === page }
                onClick = { () => this.setCurrent(page) }
              />
            ))
          }
        <LastPageLink
          onClick = { () => this.setCurrent(this.state.total) }
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  total: PropTypes.number,
  // eslint-disable-next-line react/no-unused-prop-types
  current: PropTypes.number,
  // eslint-disable-next-line react/no-unused-prop-types
  display: PropTypes.number,
  onChange: PropTypes.func,
};
