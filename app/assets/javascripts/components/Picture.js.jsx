class Picture extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    // debugger
    return(
      <div>
        <div>
          <img height='500px' src={this.props.image.url}/>
        </div>
      </div>
    )}
}
