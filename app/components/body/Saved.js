// Include React
var React = require("react");

// Create the Child1 Component
var Saved = React.createClass({

  // Child1 has a state that keeps track of it's food value
  getInitialState: function() {
		return {
			saved: [{
				id: 111,
				title: "This is the first tile",
				link: "https://www.cnn.com",
				note: "this was a note"
			},
			{
				id: 222,
				title: "This is the second tile",
				link: "https://www.espn.com",
				note: "this was a 2nd note"
			}]
    };
  },

  // Whenever the button is clicked we'll run the this.props.feedAudreyII function, passing in
  // this.state.food as an argument. (25 in this case)
  handleClick: function() {
		
  },

  render: function() {
		var data = this.state.saved
		var savedArticles = 				
								data.map(function(row, index){
									return (
										<tr>
											<td key={row.id}><a href={row.link}>{row.title}</a></td>
										</tr>
									)
								})
    return (
		<table className="table table-bordered table-responsive">
			<thead>
				<tr>
				<th className="col-md-1">#</th>
				<th className="col-md-5">Title</th>
				<th className="col-md-1">Delete</th>
				</tr>
			</thead>
			<tbody>
				{savedArticles}
			</tbody>
		</table>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;