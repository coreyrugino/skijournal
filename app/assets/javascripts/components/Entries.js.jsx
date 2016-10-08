class Entries extends React.Component{
  constructor(props){
    super(props);
    this.state = {entries: [], user: []};
    this.showEntryForm = this.showEntryForm.bind(this);
    this.addEntryDate = this.addEntryDate.bind(this);
    this.addEntryTitle = this.addEntryTitle.bind(this);
    this.addEntryStory = this.addEntryStory.bind(this);
    this.addEntryPartners = this.addEntryPartners.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.addEntryPics = this.addEntryPics.bind(this);
    this.showEntryFormButton = this.showEntryFormButton.bind(this);
    this.showVideoSection = this.showVideoSection.bind(this);
    this.search = this.search.bind(this);
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
      console.log(data);
      self.setState({entries: data.entries});
      self.setState({user: data.user});
    });
  }

  showEntryForm() {
    this.setState({ showAdd: !this.state.showAdd});
  }

  addEntryForm() {
    if (this.state.showAdd){
      return(
        <div className='col l12 entry card '>
          <form onSubmit={this.submitEntry}>
            <div className='input-field'>
              <input autoFocus='true' placeholder='date' type='date' onChange={this.addEntryDate}/>
              <input placeholder='title' type='text' onChange={this.addEntryTitle}/>
              <input placeholder='story' type='text' onChange={this.addEntryStory}/>
              <input placeholder='partners' type='text' onChange={this.addEntryPartners}/>
              <button className='btn pad' type='submit'>Save</button>
              <hr />
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
      data: {entry: {date: this.state.entryDate, title: this.state.entryTitle, story: this.state.entryStory, partners: this.state.entryPartners, pictures: this.state.entryPics}},
      dataType: "json",
      success: function(data) {
        var entries = self.state.entries;
        entries.push({ id: data.id, url: data.url, date: data.date, title: data.title, story: data.story, partners: data.partners, images: data.images, complete: data.complete});
        self.setState({ entries: entries, showAdd: false, entryDate: null, entryTitle: null, entryStory: null, entryPartners: null, entryPics: null});
      },
      error: function(data) {
        alert('cats meow, did not update!')
      },
    });
  }

  showEntryFormButton(){
    // debugger
    if (this.state.user == "coreyrugino@gmail.com"){
      return(
        <div>
          <div className='center-align'>
            <a className='btn black-text' onClick={this.showEntryForm}>Add Journal Entry</a>
          </div>
        </div>
      )
    }
  }

  showVideoSection() {
    this.setState({ showVids: !this.state.showVids});
  }

  search() {
    $.ajax({
      url: '/entry_search',
      type: 'GET',
      data: {search_term : this.refs.search.value}
    }).success (data =>{
      this.setState({entries: data.entries})
    });

  }

  addShowVideos() {
    if (this.state.showVids){
      return(
        <div id='background-video'>
          <h1 className='center-align'>Hello!</h1>
          <h3>"2013 Under Review" mostly gopro of some pow!</h3>
          <div className='video-container'>
            <iframe src="https://player.vimeo.com/video/84810398" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
            <p><a href="https://vimeo.com/84810398">2013 Under Review</a> from <a href="https://vimeo.com/couloircorey">Corey Rugino</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
          <br/>
          <h3>A short video "Gettin to the Goods" made by Walcott</h3>
          <div className='video-container'>
            <iframe src="https://player.vimeo.com/video/59214616" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
            <p><a href="https://vimeo.com/59214616">Gettin&#039; to the Goods</a> from <a href="https://vimeo.com/user605148">Kyle Walcott</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
          <br/>
          <h3>A short video "Janurary Pow" made by Walcott</h3>
          <div className='video-container'>
            <iframe src="https://player.vimeo.com/video/58239225" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
            <p><a href="https://vimeo.com/58239225">January Pow</a> from <a href="https://vimeo.com/user605148">Kyle Walcott</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
          <br/>
          <h3>A full length feature "Heart of Pow" by Walcott</h3>
          <div className='video-container'>
            <iframe src="https://player.vimeo.com/video/26605995" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
            <p><a href="https://vimeo.com/26605995">Heart of Pow</a> from <a href="https://vimeo.com/user605148">Kyle Walcott</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
        </div>
      )
    }
  }

  render(){
    let entries = this.state.entries.map( entry => {
      let key = `entry-${entry.id}`;
      return(<Entry key ={key} url={entry.url} refreshList={this.refreshList} {...entry}/>)
    })
    return(
      <div>
        <br/>
        <h1 className='center entriesTitle'>Journal Entries</h1>
        <br/>
        <div className='row'>
          <a className='col l2 waves-effect waves-light btn-large blue lighten-2 white-text same-line-left' onClick={this.showVideoSection}>Videos</a>
          <input className='col l8 offset-l1 same-line-right' placeholder='Search' ref='search' onChange={this.search} />
        </div>
        {this.showEntryFormButton()}
        {this.addEntryForm()}
        {this.addShowVideos()}
        <br />
        <div className='row'>
          {entries}
        </div>
      </div>)
  }
}
