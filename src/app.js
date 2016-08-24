/**
 * Created by arifrohman on 8/24/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var TweetBox = React.createClass({
    getInitialState: function () {
      return {
          text: "",
          photoAdded: false
      };
    },
    handleChange: function (event) {
      this.setState({text: event.target.value});
    },
    togglePhoto: function (event) {
        this.setState({photoAdded: !this.state.photoAdded});
    },
    remainingCharacters: function () {
        if(this.state.photoAdded)
            return 140 - 23 - this.state.text.length;
        else
            return 140 - this.state.text.length;
    },
    overflowAlert: function () {
        if(this.remainingCharacters() < 0){
            return(
                <div className="alert alert-warning">
                    <strong>Oops! Too Long:</strong>
                    &nbsp;... {this.state.text.substring(131,140)}
                    <strong className="bg-danger">{this.state.text.substring(140,this.state.text.length)}</strong>
                </div>
            );
        }
    },
    render: function () {
        return(
            <div className="well clearfix">
                {this.overflowAlert()}
                <textarea className="form-control" onChange={this.handleChange}></textarea>
                <br/>
                <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>
                <button className="btn btn-default pull-right" onClick={this.togglePhoto} >{this.state.photoAdded? "✓ Photo Added" : "Add Photo"}</button><br/>
                <span>{this.remainingCharacters()}</span>
            </div>
        )
    }
});

ReactDOM.render(<TweetBox />, document.getElementById("container"));