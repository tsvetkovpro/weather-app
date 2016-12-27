var React = require ('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>weather complete react application</p>
			<p>using tools</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">react</a> - js framework
				</li>
				<li>
					<a href="http://openweathermap.org">open weather map</a> - use to search weather data by city name
				</li>
			</ul>
		</div>
	)
};

module.exports = About;
