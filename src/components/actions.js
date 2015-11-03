
var React = require("react"),
	_ = require("lodash"),
	Icon = require("./icon"),
	Link = require("react-router").Link,
	mem = require("../data/members"),
	members = mem.members,
	actions = mem.actions;

var Actions = React.createClass({
	render: function(){
		var rows = _.map(actions,function(info,id){
			var user = members[info.by],
				tuser = members[info.target];
			return (
				<tr key={id}>
					<td><Icon icon={user.icon} /><Link to={"/member/"+info.by}>{user.name}</Link></td>
					<td>{info.type}</td>
					<td>{info.when}</td>
					<td><a href={info.url} target="_blank">{info.description}</a></td>
					<td>{info.target && <span><Icon icon={tuser.icon}/><Link to={"/member/"+info.target}>{tuser.name}</Link></span> || ""}</td>
				</tr>
			);
		});
		return (
			<div>
				<Link to="/">Back to member list</Link>
				<p>So, what's been going on lately?</p>
				<table>
					<thead>
						<tr><th>Name</th><th>Type</th><th>When</th><th>Link</th><th>Target (if PR)</th></tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Actions;