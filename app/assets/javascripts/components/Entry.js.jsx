class Entry extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    // debugger
    return(
      <div>
        <div className='col s4'>
          <div className='z-depth-5 card green'>
            <div className='card-content white-text'>
              <span className='card-title'>{this.props.title}</span>
              <h3>{this.props.date}</h3>
              <p className='flow-text'>{this.props.story}</p>
              <p>{this.props.partners}</p>
            </div>
          </div>
        </div>
      </div>);
  }
}
