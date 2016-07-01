class Entry extends React.Component{
  constructor(props){
    super(props);
    this.state = {open: false};
    this.deleteItem = this.deleteItem.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }
  componentDidMount(){
    // $(document).ready(function(){
    //   $('.modal-trigger').leanModal({
    //     dismissible: true,
    //   });
    // });
  }

  openModal() {this.setState({open: true});}

  closeModal() { this.setState({open: false}); }

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
    debugger
    name = this.props.title
    alert('title: '+name)
  }

  render(){
    return(
      <div>
        <div>
          <div className='col s12 m4'>
            <div className='z-depth-5 card hoverable green' onClick={()=>Routes.entry_path(this.props.id)} id='journalCards'>
              <div className='card-content white-text'>
                <span className='card-title'>{this.props.title}</span>
                <h3>{this.props.date}</h3>
                <p className='flow-text truncate'>{this.props.story}</p>
                <p>{this.props.partners}</p>
                <a href={Routes.entry_path(this.props.id)}>meow</a>
                <a href='#' className='black' onClick={()=>this.deleteItem()} >X</a>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}
