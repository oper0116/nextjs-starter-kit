import { Component } from 'react';

type PropsType = {
  children: React.ReactElement
}

export default class PageWrapper extends Component<PropsType> {
  public render() {
    return (
      <div id="page-wrapper" className="gray-bg">
        { this.props.children }
      </div>
    );
  }
}