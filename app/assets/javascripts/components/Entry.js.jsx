class Entry extends React.Component{
  constructor(props){
    super(props);
    // this.state = {clicked: false}
    this.deleteItem = this.deleteItem.bind(this);
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.modal-trigger').leanModal({
        dismissible: true,
      });
    });
  }

  deleteItem(entry_id) {
    let self = this;
    $.ajax({
      type: 'DELETE',
      url: this.props.url
    }).success( data => {
      self.props.refreshList();
    });
  }

  showInfo(entry_id) {
  }

  render(){
    return(
      <div>
        <div>
          <div className='col s12 m4'>
            <div className='z-depth-5 card hoverable green' onClick={()=>{this.showInfo()}} href="#modal2" id='journalCards'>
              <div className='card-content white-text'>
                <span className='card-title'>{this.props.title}</span>
                <h3>{this.props.date}</h3>
                <p className='flow-text truncate'>{this.props.story}</p>
                <p>{this.props.partners}</p>
                <div>
                </div>
                <a className="waves-effect waves-light btn " href="#modal2">All</a>
                <a href='#' className='black' onClick={()=>this.deleteItem()} >X</a>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}
