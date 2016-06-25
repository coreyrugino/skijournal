class Instapics extends React.Component{
  constructor(props){
    super(props);
    this.state = {results: []}
    this.gitpics = this.gitpics.bind(this);
  }

  componentDidMount(){
    this.gitpics()
  }

  gitpics(){
    let self = this;
    $.ajax({
      url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=13409763.a17fd3f.f05f1dbe234746b68df24c3664b9aef1&callback=callbackFunction",
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
      <div>
        <h1>Cats_on_Peaks InstaPics!</h1>
        {instapics}
        <ul className='center-align'></ul>
      </div>);
    }
}
