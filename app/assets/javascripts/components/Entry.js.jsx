class Entry extends React.Component{
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    // this.props.refreshList = this.refreshList.bind(this);
  }

  deleteItem(entry_id) {
    // debugger
    // e.preventDefault();
    let self = this;
    $.ajax({
      type: 'DELETE',
      url: this.props.url
      // data: {entry_id: this.props.id},
    }).success( data => {
      // debugger
      self.props.refreshList();
    });
  }

  render(){
    // debugger
    return(
      <div>
        <div className='col s4'>
          <div className='z-depth-5 card hoverable green' id='journalCards'>
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
