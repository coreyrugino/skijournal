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

            <img className='fitImages' src={this.props.image.url}/>
          
        </div>
      </div>
    )}
}
