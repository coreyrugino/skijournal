
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

  showInfo() {
    console.log('modal showing in Entry.')
    return(
      <div>
        <div>
          <div id={`openModal-${this.props.id}`} className="modalDialog">
          	<div>
        		<a href="#close" title="Close" className="close">X</a>
        		<h2 className='center'>{this.props.title}</h2>
            <div className='row'>
              <p className='col s6 m6 l6 center-align'>Date: {this.props.date}</p>
              <p className='col s6 m6 l6 center-align'>Partners: {this.props.partners}</p>
            </div>
        		<p className='flow-text'>{this.props.story}</p>
            <img id='imageResize' className='materialboxed' src={this.props.pictures[0].image.full.url} data-caption = {this.props.pictures[0].caption}/>
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
          <div className='z-depth-5  card hoverable green'  id='journalCards'>
            <div className='card-content white-text'>
              <span className='card-title flow-text truncate'>{this.props.title}</span>
              <h3>{this.props.date}</h3>
              <p className='flow-text truncate'>{this.props.story}</p>
              <p>{this.props.partners}</p>
              <p>{this.props.images}</p>
              <a href={Routes.entry_path(this.props.id)}>more</a>
              <br/>
              <a href={`#openModal-${this.props.id }`} className="btn" onClick={()=>this.showInfo(this.props.id)}>Modal</a>
              <a href={Routes.edit_entry_path(this.props.id)}>edit</a>
              <a href='#' className='black' onClick={()=>this.deleteItem()} >X</a>
              {this.showInfo()}
            </div>
          </div>
        </div>
      </div>);
  }
}
