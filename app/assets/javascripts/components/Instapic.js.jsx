class Instapic extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <div className='z-depth-5 card hoverable blue' onClick={()=>this.showInfo()} id='journalCards'>
          <div className='card-content white-text'>
            <span className='card-title'>{this.props.title}</span>
            <h3>{this.props.date}</h3>
            <p className='flow-text truncate'>{this.props.story}</p>
            <p>{this.props.caption.text}</p>
            <a href='#' className='black' onClick={()=>this.deleteItem()} >X</a>
          </div>
        </div>
      </div>);
  }
}
