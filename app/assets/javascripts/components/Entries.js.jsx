class Entries extends React.Component{
  constructor(props){
    super(props);
    this.state = {entries: []};
  }

  componentDidMount() {

    // this.refreshList();
    // var self = this
    $.ajax({
      url: '/entries',
      type: 'GET'
    }).success( data => {
      this.setState({entries: data.entries});
    });
  }

  render(){
    let entries = this.state.entries.map( entry => {
      let key = `entry-${entry.id}`;
      return(<Entry key ={key} {...entry}/>)
    })
    return(
      <div>
        <h1 className='center'>Ski days</h1>
        <hr />
        <div className='row'>
          {entries}
        </div>
      </div>)
  }
}
