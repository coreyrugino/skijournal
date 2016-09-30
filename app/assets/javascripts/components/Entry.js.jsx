class Entry extends React.Component{
  constructor(props){
    super(props);
    this.state = {pictures: []}
    this.deleteItem = this.deleteItem.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.imageSelection = this.imageSelection.bind(this);
  }

  componentDidMount(){
    $(document).ready(function() {
      $(".owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
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

  showButtons(){
    return(
      <div>
        <a href={Routes.edit_entry_path(this.props.id)}>edit</a>
        <a href='#' className='black' onClick={()=>this.deleteItem()} >X</a>
      </div>
    )
  }

  imageSelection(){
    // debugger
    let self = this;
    if (this.props.pictures == ""){
      return(
          <img className='card-image' height='300px'  src="https://s3-us-west-2.amazonaws.com/entrypics/deepDayDigging.jpg"/>
      );
    } else {
      return(
          <img className='card-image' height='300px' src={this.props.pictures[0].image.url}/>
      );
    }
  }

  showInfo() {
    // debugger
    let pictures = this.props.pictures.map( picture => {
      let key = `picture-${picture.id}`;
      return(<Picture key={key} {...picture}/>)
    })
    return(
      <div>
        <div>
          <div id={`openModal-${this.props.id}`} className="modalDialog">
          	<div>
        		    <a href="#close" title="Close" className="close">X</a>
        		    <h2 className='center smallCaps textOutline' id='fontsize' >{this.props.title}</h2>
                <div className='row'>
                  <h2 className='col s6 m6 l6 center-align textOutline'>Date: {this.props.date}</h2>
                  <h2 className='col s6 m6 l6 center-align textOutline'>Partners: {this.props.partners}</h2>
                </div>
                <div className='row'>
                  <div className='col l6'>
          		      <p className='flow-text textOutline'>{this.props.story}</p>
                  </div>
                  <div className='col l6'>
                  <br/>
                    <div className="owl-demo owl-carousel center-align">
                      {pictures}
                    </div>
                  </div>
                </div>
            </div>
        	</div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <div>
        <div className='col s6 m4'>
          <div className='z-depth-5 card hoverable clearCard' id='journalCards'>
            <div className="card-image ">
              {this.imageSelection()}
              <span className='card-title stopOverflow smallCaps blackTextOutline'>{this.props.title}</span>
            </div>
            <div className='card-content darkenText white-text'>
              <h5>{this.props.date}</h5>
              <p>Partners: {this.props.partners}</p>
              <p>Pictures: {this.props.pictures.length}</p>
            </div>
            <div className='card-action'>
              <a href={Routes.entry_path(this.props.id)}>Story</a>
              <a href={`#openModal-${this.props.id }`}  onClick={()=>this.showInfo(this.props.id)} >Quick View</a>
            </div>
          </div>
        </div>
        {this.showInfo()}

      </div>);
  }
}
