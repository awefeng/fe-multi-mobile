import { Component, ReactNode } from 'react'

interface ComponentProps {
  a: number
}
interface ComponentState {
  b: number
}
class ClassComp extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      b: 1
    }
  }
  componentDidMount(): void {
    console.log('mounted')
  }
  render(): ReactNode {
    return (
      <h1>
        Class Comp 类组件: {this.props.a} {this.state.b}
      </h1>
    )
  }
}

export default ClassComp
