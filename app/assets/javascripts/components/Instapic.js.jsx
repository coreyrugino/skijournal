class Instapic extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }

  render(){
    return(
      <div>
        <div className='z-depth-5 card hoverable center-align instaCards' >
          <div className='card-content'>
            <div className='center-align'>
              <img className=' materialboxed imageSizing'  width='360px'
                src={this.props.images.standard_resolution.url} data-caption={this.props.caption.text}></img>
            </div>
          </div>
        </div>
      </div>);
  }
}
