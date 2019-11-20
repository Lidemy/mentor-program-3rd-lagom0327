import React, { Component } from 'react';
import PropTypes from 'prop-types';

const firstCharUpperCase = str => (
  str.substring(0, 1).toUpperCase() + str.substring(1)
);

class Filters extends Component {
  static propTypes = {
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    // 某種類型的陣列(字串類型)
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change = (e) => {
    const { changeFilter, filter } = this.props;
    if (filter === e.target.dataset.tag) return;
    changeFilter(e.target.dataset.tag);
  }

  render() {
    const { filter, filters } = this.props;
    return (
      <section className="filters">
        {
          filters.map(filterText => (
            <button
              type="button"
              className={`filters__${filterText} ${filter === filterText ? 'pickedTag' : ''}`}
              data-tag={filterText}
              key={filterText}
              onClick={this.change}
            >
              {firstCharUpperCase(filterText)}
            </button>
          ))
        }
      </section>
    );
  }
}

export default Filters;
