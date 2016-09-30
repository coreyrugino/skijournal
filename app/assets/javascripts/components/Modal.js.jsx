class Modal extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {


  }
    render() {
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

                        {pictures}
                      
                    </div>
                  </div>
              </div>
          	</div>
          </div>
        </div>
      );
    }

}
