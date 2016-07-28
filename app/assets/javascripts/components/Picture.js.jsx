class Picture extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <img src={this.props.picture}/>
        <p>{this.props.caption}</p>
      </div>
    )}
}
