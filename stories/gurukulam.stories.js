import { withLinks } from '@storybook/addon-links';

export default {
	title: 'Components/Bootstrap/All in All',
	decorators: [withLinks],
};

export const Login = () => `
<div class="container vh-100 pr-5 pl-5">
	<div class="row h-20 text-left border">
			<div class="col-12 col-md-12 col-lg-12">
				<h1>Bootsketch </h1>
				<p>Bootsketch is a little Bootstrap 3 theme for wireframing web project. Unlike the Bootstrap base theme, Bootsketch provide a sketch render to remove all "design feeling" when we present it to client or during user test. </p>
				<a href="/sql_exams" class="btn btn-secondary btn-lg text-center mt-1 mb-1">Github</a>
				<a href="/sql_exams" class="btn btn-light btn-lg text-center mt-1 mb-1">Doc</a>
			</div>
	</div>	
	<div class="row h-20 text-left pt-4 border-bottom">	
			<div class="col-12 col-md-12 col-lg-12">
				<h3>Typography</h3>
			</div>
	</div>
	<div class="row h-20 text-left pt-4 ">
			<div class="col-6 col-md-6 col-lg-6">
				<h1>My title level 1</h1>
				<h2>My title level 2</h2>
				<h3>My title level 3</h3>
				<h4>My title level 4</h4>
				<h5>My title level 5</h5>
				<h6>My title level 6</h6>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius.</p>
			</div>
			<div class="col-6 col-md-6 col-lg-6">
				<p class="text-secondary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<p class="text-info">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<p class="text-success">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<p class="text-primary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<p class="text-warning">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<p class="text-danger">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<div class="alert alert-primary" role="alert">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
				<div class="alert alert-success" role="alert">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
				<div class="alert alert-info" role="alert">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
				<div class="alert alert-warning" role="alert">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
				<div class="alert alert-danger" role="alert">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
			</div>
	<div class="row h-20 text-left pt-4 ">
			<div class="col-6 col-md-6 col-lg-6  border-right>
				<p class="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Confecta res esset. Si autem id non concedatur, non continuo vita beata tollitur. Summae mihi videtur inscitiae. Sed haec omittamus; Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Duo Reges: constructio interrete.</p>
				<p class="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. An est aliquid, quod te sua sponte delectet? Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Re mihi non aeque satisfacit, et quidem locis pluribus.</p>	
			</div>
			<div class="col-6 col-md-6 col-lg-6>
				<blockquote class="blockquote">
					<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. An est aliquid, quod te sua sponte delectet? Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Re mihi non aeque satisfacit, et quidem locis pluribus.</p>
					<footer class="blockquote-footer"> Eddard Stark, lord of Winterfel<cite title="Source Title">Source Title</cite></footer>
		  		</blockquote>	
			</div>
	</div>
	<div class="row h-20 text-left pt-4 border-bottom">	
			<div class="col-12 col-md-12 col-lg-12">
				<h3>Buttons</h3>
			</div>
	</div>
	
	<div class="row h-20 text-left pt-4 border-bottom">	
			<div class="col-6 col-md-6 col-lg-6">
				<button type="button" class="btn btn-outline-secondary">Default</button>
				<button type="button" class="btn btn-secondary">Primary</button>
			    <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Active</a><button type="button" class="btn btn-outline-secondary">Active</button>
				<button type="button" class="btn btn-secondary btn-lg" disabled>Disabled</button><button type="button" class="btn btn-outline btn-secondary btn-lg" disabled>Button</button>	
			</div>
			<div class="col-6 col-md-6 col-lg-6">
				<button type="button" class="btn btn-primary btn-lg">Large</button>
				<button type="button" class="btn btn-secondary btn-lg">Large</button>
				<button type="button" class="btn btn-primary">Normal</button>
				<button type="button" class="btn btn-secondary btn-lg">Normal</button>
				<button type="button" class="btn btn-primary btn-sm">Small</button>
				<button type="button" class="btn btn-secondary btn-sm">Small</button>
				<button type="button" class="btn btn-primary btn-xs">XSmall</button>
				<button type="button" class="btn btn-secondary btn-xs">XSmall</button>
			</div>
	</div>

	
	<div class="row h-20 text-left pt-4 border-bottom">	
			<div class="col-12 col-md-12 col-lg-12">
				<h3>Forms</h3>
			</div>
	</div>
			
	<div class="row h-20 text-left pt-4 border-bottom">	
			<div class="col-6 col-md-6 col-lg-6">
				<form action="/action_page.php">
 			 		<div class="form-group">
    					<label for="email">Email address:</label>
    					<input type="email" class="form-control" id="email" placeholder="Enter email">
 					</div>
 	 				<div class="form-group">
    					<label for="pwd">Password:</label>
    					<input type="password" class="form-control" id="pwd" placeholder="Enter password">
					</div>
					<div class="form-group">
    					<label for="inputfile">File Input</label>
						<input type="file" class="form-control" id="inputfile" placeholder="Choose File">
						<p class="help-block"> Example block-level help text here. </p>
					</div>
  					<div class="checkbox">
    					<label><input type="checkbox">Check me out</label>
  					</div>
  					<button type="submit" class="btn btn-default">Submit</button>
				</form>
			</div>
			<div class="col-6 col-md-6 col-lg-6">
				<form>
					<div class="form-group row">
			 	 		<label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
			  			<div class="col-sm-10">
							<input type="email" class="form-control" id="inputEmail3" placeholder="Email">
			  			</div>
					</div>
					<div class="form-group row">
			  			<label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
			  			<div class="col-sm-10">
							<input type="password" class="form-control" id="inputPassword3" placeholder="Password">
			  			</div>
					</div>
					<div class="form-group row">
    					<div class="col-sm-2"></div>
    					<div class="col-sm-10">
      						<div class="form-check">
        						<input class="form-check-input" type="checkbox" id="gridCheck1">
        						<label class="form-check-label" for="gridCheck1">
          							Remember Me
        						</label>
      						</div>
    					</div>
  					</div>
					<div class="form-group row">
						<div class="col-sm-10">
					  		<button type="submit" class="btn btn-primary">Sign in</button>
						</div>
				  	</div>
				</form>
			</div>
	</div>
				
	<div class="row h-20 text-left pt-4 border-bottom">	
			<div class="col-12 col-md-12 col-lg-12">
				<h3>Tables</h3>
			</div>
	</div>
	<div class="row h-20 text-left pt-4 border-bottom">	
		<div class="col-6 col-md-6 col-lg-6">
			<table class="table">
				<thead>
	  				<tr>
						<th scope="col">#</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">User Name</th>
	  				</tr>
				</thead>
				<tbody>
	  				<tr>
						<th scope="row">1</th>
						<td>John</td>
						<td>Doe</td>
						<td>@jdo</td>
	  				</tr>
	  				<tr>
						<th scope="row">2</th>
						<td>Walter</td>
						<td>Smith</td>
						<td>@wsm</td>
					</tr>
				</tbody>
			</table>
			<table class="table table-striped">
  				<thead>
    				<tr>
						<th scope="col">#</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">User Name</th>
    				</tr>
  				</thead>
  				<tbody>
    				<tr>
						<th scope="row">1</th>
						<td>John</td>
						<td>Doe</td>
						<td>@jdo</td>
    				</tr>
    				<tr>
					<th scope="row">2</th>
					<td>Walter</td>
					<td>Smith</td>
					<td>@wsm</td>
    				</tr>
   	 				<tr>
      					<th scope="row">3</th>
      					<td>Edmure</td>
      					<td> Fish</td>
      					<td>@tul</td>
    				</tr>
  				</tbody>
			</table>
		</div>
		<div class="col-6 col-md-6 col-lg-6">
			<table class="table">
				<thead>
			 		<tr>
						<th scope="col">#</th>
						<th scope="col">Column heading</th>
						<th scope="col">Column heading</th>
						<th scope="col">Column heading</th>
			  		</tr>
				</thead>
				<tbody>
			  		<tr>
						<th scope="row">1</th>
						<td>Column content</td>
						<td>Column content</td>
						<td>@Column content</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Column content</td>
						<td>Column content</td>
						<td>@Column content</td>
			  		</tr>
			  		<tr class="table-success">
						<th scope="row">3</th>
						<td>Column content</td>
						<td>Column content</td>
						<td>@Column content</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>Column content</td>
						<td>Column content</td>
						<td>@Column content</td>
					</tr>
					<tr class="table-info">
						<th scope="row">5</th>
						<td>Column content</td>
						<td>Column content</td>
						<td>@Column content</td>
					</tr>
					<tr>
						<th scope="row">6</th>
						<td>Column content</td>
						<td>Column content</td>
						<td>@Column content</td>
					</tr>
					<tr class="table-warning">
						<th scope="row">7</th>
						<td>Column content</td>
						<td>Column content</td>
						<td>@Column content</td>
					</tr>
					<tr>
						<th scope="row">8</th>
						<td>Column content</td>
						<td>Column content</td>
						<td>@Column content</td>
					</tr>
					<tr class="table-danger">
						<th scope="row">9</th>
						<td>Column content</td>
						<td>Column content</td>
						<td>@Column content</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="row h-20 text-left pt-4 border-bottom">
			<div class="col-4 col-md-4 col-lg-4">
				<h3>Badge</h3>
				<button type="button" class="btn btn-primary">
					Home <span class="badge badge-light">42</span>
				</button>
				<button type="button" class="btn btn-outline">
					Profile
				</button>
				<button type="button" class="btn btn-outline">
					Messages <span class="badge badge-pill">3</span>
				</button>  
			</div>
			<div class="col-4 col-md-4 col-lg-4">
			<h3>Input Group</h3>
				<div class="input-group">
					<div class="input-group-prepend">
			  			<span class="input-group-text" id="basic-addon1">@</span>
					</div>
					<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
				</div> 
				<div class="input-group">
  					<div class="input-group-append">
    					<span class="input-group-text" id="basic-addon2">.00</span>
  					</div>
				</div>
				<div class="input-group">
  					<div class="input-group-prepend">
    					<span class="input-group-text">$</span>
  					</div>
  					<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  					<div class="input-group-append">
    					<span class="input-group-text">.00</span>
  					</div>
				</div>  
			</div>
		</div>
</div>
`;
