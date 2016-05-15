class Instapics extends React.Component{
  constructor(props){
    super(props);
    this.state = {results: []}
    this.gitpics = this.gitpics.bind(this);
  }

  componentDidMount(){
    this.gitpics()
  }

  callback(results){
    // debugger
  	var prettyJSON = JSON.stringify(results, null, 4);
  	output(prettyJSON);
  }

  gitpics(){
    let self = this;
    $.ajax({
      // url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=13409763.a17fd3f.f05f1dbe234746b68df24c3664b9aef1",
      url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=13409763.a17fd3f.f05f1dbe234746b68df24c3664b9aef1&callback=callbackFunction",
      dataType: 'jsonp',
      type: 'GET',
      // jsonp: 'callback',
      // cache: false,
    }).success( data => {
      // debugger
      console.log(data);
      this.setState({results: data.data});
      // for(x in data.data){
      //   $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"><p>'+data.data[x].caption.text+'</p></li><hr />');
      // }
    });
  }

  render(){
    self = this;
    let i = 0;
    // debugger
    let instapics = this.state.results.map( instapic => {
      let key = `instapic-${i += 1}`
      return(<Instapic key={key} {...instapic}/>);
    });
    return(
      <div>
        <h1>Cats_on_Peaks InstaPics!</h1>
        {instapics}
        <ul className='center-align'></ul>
      </div>);
    }
}
