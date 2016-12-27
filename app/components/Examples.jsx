var React = require ('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>here a few examle locations to try out</p>
      <ol>
				<li>
					<Link to='/?location=Orenburg'>Orenburg</Link>
				</li>
				<li>
					<Link to='/?location=Rio'>Rio, Brazil</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports = Examples;
