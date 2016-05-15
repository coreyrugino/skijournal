class Instapic extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <div className='col s12 m4'>
          <div className='z-depth-5 card hoverable green' onClick={()=>this.showInfo()} id='journalCards'>
            <div className='card-content white-text'>
              <span className='card-title'>{this.props.title}</span>
              <h3>{this.props.date}</h3>
              <p className='flow-text truncate'>{this.props.story}</p>
              <p>{this.props.partners}</p>
              <a href='#' className='black' onClick={()=>this.deleteItem()} >X</a>
            </div>
          </div>
        </div>
      </div>);
  }
}
