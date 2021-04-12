import React from "react";

interface IHeaderState {
  title: string;
}

interface IHeaderProps {
  title: string;
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  render() {
    return <div>Header Component</div>;
  }
}
