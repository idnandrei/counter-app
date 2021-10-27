import React, { Component } from 'react'

export class Counter extends Component {
state = {
  count: 0,
  tags: [1, 2, 3]
};



render() {

    return (
      <div>
       <span className={this.getClassBadge()}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
        <ul>
          {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    )
  }

  getClassBadge() {
    let classes = 'badge m-2 bg-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount(){

    const { count } = this.state
    return count === 0? <h1>Zero</h1>: this.state.count;
  }
}


export default Counter
