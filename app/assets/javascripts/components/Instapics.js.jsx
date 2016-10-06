class Instapics extends React.Component{
  constructor(props){
    super(props);
    this.state = {results: []}
    this.gitpics = this.gitpics.bind(this);
  }

  componentDidMount(){
    this.gitpics()
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });

    $(document).ready(function() {
    	$('.popup-gallery').magnificPopup({
    		delegate: 'a',
    		type: 'image',
    		tLoading: 'Loading image #%curr%...',
    		mainClass: 'mfp-img-mobile',
    		gallery: {
    			enabled: true,
    			navigateByImgClick: true,
    			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    		},
    		image: {
    			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    			titleSrc: function(item) {
    				return item.el.attr('title') + '<small>Corey Rugino Photograpghy</small>';
    			}
    		}
    	});
  	});
  }

  gitpics(){
    let self = this;
    $.ajax({
      url: "https://api.instagram.com/v1/users/self/media/recent?count=10&access_token=13409763.a17fd3f.f05f1dbe234746b68df24c3664b9aef1&callback=callbackFunction",
      dataType: 'jsonp',
      type: 'GET',
      // jsonp: 'callback',
      // cache: false,
    }).success( data => {
      console.log(data);
      this.setState({results: data.data});
    });
  }

  render(){
    self = this;
    let i = 0;
    let instapics = this.state.results.map( instapic => {
      let key = `instapic-${i += 1}`
      return(<Instapic key={key} {...instapic}/>);
    });
    return(
      <div className=''>
        <br/>
        <h1 className='instaTitle center'>InstaPics!</h1>
        <br/>
        <div className='center cAlign popup-gallery'>
          {instapics}
        </div>
      </div>);
    }
}
