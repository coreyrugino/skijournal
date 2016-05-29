class Entries extends React.Component{
  constructor(props){
    super(props);
    this.state = {entries: []};
    this.showEntryForm = this.showEntryForm.bind(this);
    this.addEntryDate = this.addEntryDate.bind(this);
    this.addEntryTitle = this.addEntryTitle.bind(this);
    this.addEntryStory = this.addEntryStory.bind(this);
    this.addEntryPartners = this.addEntryPartners.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.addEntryPics = this.addEntryPics.bind(this)
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    let self = this;
    $.ajax({
      url: '/entries',
      type: 'GET'
    }).success( data => {
      self.setState({entries: data.entries});
    });
  }

  showEntryForm() {
    this.setState({ showAdd: !this.state.showAdd});
  }

  addEntryForm() {
    if (this.state.showAdd){
      return(
        <div>
          <form onSubmit={this.submitEntry}>
            <div className='input-field'>
              <input autoFocus='true' placeholder='date' type='date' onChange={this.addEntryDate}/>
              <input placeholder='title' type='text' onChange={this.addEntryTitle}/>
              <input placeholder='story' type='text' onChange={this.addEntryStory}/>
              <input placeholder='partners' type='text' onChange={this.addEntryPartners}/>
              
              <button className='btn' type='submit'>Save</button>
            </div>
          </form>
        </div>
      )
    }
  }

  addEntryDate(e) {
    this.setState({entryDate: e.currentTarget.value});
  }

  addEntryTitle(e) {
    this.setState({entryTitle: e.currentTarget.value});
  }

  addEntryStory(e) {
    this.setState({entryStory: e.currentTarget.value});
  }

  addEntryPartners(e) {
    this.setState({entryPartners: e.currentTarget.value});
  }

  addEntryPics(e) {
    debugger
    this.setState({entryPics: e.currentTarget.value});
  }

  submitEntry(e) {
    e.preventDefault();
    let self = this;
    $.ajax({
      url: '/entries',
      type: 'POST',
      data: {entry: {date: this.state.entryDate, title: this.state.entryTitle, story: this.state.entryStory, partners: this.state.entryPartners, images: this.state.entryPics}},
      dataType: "json",
      success: function(data) {
        var entries = self.state.entries;
        entries.push({ id: data.id, url: data.url, date: data.date, title: data.title, story: data.story, partners: data.partners, images: data.images, complete: data.complete});
        self.setState({ entries: entries, showAdd: false, entryDate: null, entryTitle: null, entryStory: null, entryPartners: null, entryPics: null});
      },
      error: function(data) {
        alert('cats meow')
      },
    });
  }

  render(){
    let entries = this.state.entries.map( entry => {
      let key = `entry-${entry.id}`;
      return(<Entry key ={key} url={entry.url} refreshList={this.refreshList} {...entry}/>)
    })
    return(
      <div>
        <h1 className='center'>Ski days</h1>
        <hr />
        <div className='center-align'>
          <a className='btn black-text' onClick={this.showEntryForm}>Add Journal Entry</a>
        </div>
        {this.addEntryForm()}
        <br />
        <div className='row'>
          {entries}
        </div>
      </div>)
  }
}
