class Entry extends React.Component{
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  componentDidMount(){
    $(document).ready(function(){
      $('.materialboxed').materialbox();
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

  showButtons(){
    return(
      <div>

        <a href={Routes.edit_entry_path(this.props.id)}>edit</a>
        <a href='#' className='black' onClick={()=>this.deleteItem()} >X</a>
      </div>
    )
  }

  showInfo() {
    console.log('modal showing in Entry.')
    return(
      <div>
        <div>
          <div id={`openModal-${this.props.id}`} className="modalDialog">
          	<div>
        		<a href="#close" title="Close" className="close">X</a>
        		<h2 className='center smallCaps'>{this.props.title}</h2>
            <div className='row'>
              <p className='col s6 m6 l6 center-align'>Date: {this.props.date}</p>
              <p className='col s6 m6 l6 center-align'>Partners: {this.props.partners}</p>
            </div>
        		<p className='flow-text'>{this.props.story}</p>
            </div>
        	</div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <div>
        <div className='col s12 m4'>
          <div className='z-depth-5 card hoverable clearCard' id='journalCards'>
            <div className='card-content darkenText black-text'>
              <span className='card-title flow-text smallCaps truncate'>{this.props.title}</span>
              <h5>{this.props.date}</h5>
              <h5 className='truncate'>{this.props.story}</h5>
              <p>{this.props.partners}</p>
              <p>{this.props.images}</p>
              <a href={Routes.entry_path(this.props.id)} className="button1">more</a>
              <a href={`#openModal-${this.props.id }`}  onClick={()=>this.showInfo(this.props.id)} className="button1">Modal</a>
              <br/>
            </div>
          </div>
        </div>
        {this.showInfo()}
      </div>);
  }
}
