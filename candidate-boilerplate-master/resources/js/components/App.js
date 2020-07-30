import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class selectForecastForm extends Component {
  
  render() {
	  
	const listOfCities = [
		{value: 'Sydney', display: 'Sydney'},
		{value: 'Melbourne', display: 'Melbourne'},
		{value: 'Brisbane', display: 'Brisbane'},
		{value: 'Perth', display: 'Perth'},
		{value: 'Adelaide', display: 'Adelaide'},
		{value: 'Newcastle', display: 'Newcastle'},
		{value: 'Canberra', display: 'Canberra'},
	];
	     
	return (
		<div>
			<Selectdropdown cities={listOfCities} />
		</div>
	);
  }
}


class Selectdropdown extends Component {
	
	constructor(props) {
		
		super(props);

		//set state parameters
		this.state = {
			//collection of given cities
			cities: this.props.cities,
			selectedCity: "",
			validationError: "",
			cityForecastData: []
		};

		this.evenDropdown = this.evenDropdown.bind(this);
	}
	
	componentDidMount() {

		this.setState({
			cities: [{value: '', display: '(Select your city)'}].concat(this.state.cities)
		});
	}
	
	evenDropdown(e) {
		this.setState({selectedCity: e.target.value,validationError: e.target.value === "" ? "You must select a city" : ""});
		
		if(this.state.selectedCity !== ""){
			
			fetch('http://127.0.0.1:8000/api/forecast/'+this.state.selectedCity)
			.then(response => {
				return response.json();
			})
			.then(data => {
				
				this.setState({ 
					cityForecastData: data.map( city =>{
						
						return {
							temp_max: city.temp_max,
							temp_min: city.temp_min,
							humidity: city.humidity,
							weather: city.weather.main
						};
					})
				});
			})
			.catch(error => {
				console.log(error);
			});
		}
	}
	
	render() {
		
		return ( 
		
			<div>
				<select value={this.state.selectedCity} onChange={this.evenDropdown}>
					{this.state.cities.map((city) => <option key={city.value} value={city.value}>{city.display}</option>)}
				</select>
				<div className="text-red-600">
					{this.state.validationError}
				</div>
				
				<table className="table-auto">
					<thead>
						<tr>
							<th className="px-4 py-2">TempMax</th>
							<th className="px-4 py-2">TempMin</th>
							<th className="px-4 py-2">Humidity</th>
							<th className="px-4 py-2">Weather</th>
						</tr>
					</thead>
					<tbody>
						{this.state.cityForecastData.map((forecast, i) => 
							<tr key={i} className="bg-gray-100" >
								<td className="border px-4 py-2">{forecast.temp_max}</td>
								<td className="border px-4 py-2">{forecast.temp_min}</td>
								<td className="border px-4 py-2">{forecast.humidity}</td>
								<td className="border px-4 py-2">{forecast.weather}</td>
							</tr>
						)}
					</tbody>
					
				</table>
				
			</div>
		);
		
	}
	
}
 

export default selectForecastForm;