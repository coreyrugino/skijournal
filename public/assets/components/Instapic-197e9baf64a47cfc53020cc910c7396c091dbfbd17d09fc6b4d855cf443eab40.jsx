class Instapic extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className='z-depth-5 card hoverable center-align red'
          id='journalCards'>
          <div className='card-content white-text'>
            <img src={this.props.images.low_resolution.url}></img>
            <p>{this.props.caption.text}</p>
          </div>
        </div>
      </div>);
  }
}
