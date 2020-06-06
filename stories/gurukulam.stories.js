import { withLinks } from '@storybook/addon-links';

export default {
	title: 'Gurukulam',
	decorators: [withLinks],
};

export const Login = () => `
<div class="container vh-100 p-4">
			<div class="row h-20 text-left  border-bottom">
				<div class="col-10 col-md-10 col-lg-10">
	
					<img class="mt-4 pt-2" src="https://techatpark.com/images/icons/logo_full.svg" alt="" width="72" height="72">
					<h1 class="text-uppercase">Gurukulam</h1>
					
				</div>	
				<div class="col-2 col-md-2 col-lg-2 align-self-end  text-right pr-3 pb-3 p-0">
					
				
						<a href="/sql_exams" class="btn btn-outline-info btn-sm mr-2">
							<i class="fab fa-youtube"></i>
						</a>

						<a href="/sql_exams" class="btn btn-outline-info btn-sm">
							<i class="fab fa-linkedin-in"></i>
						</a>
						
						
				</div>
			</div>
			<div class="row h-50">
				<div class="col-8 col-md-8 col-lg-8">
						<h5 class="text-left mt-5 pt-3 font-weight-bolder">எண்ணென்ப ஏனை எழுத்தென்ப இவ்விரண்டும் </br>
							கண்ணென்ப வாழும் உயிர்க்கு</h5>
						<h6 class="text-left mt-5 pt-3 text-uppercase">Made with Love<br>
							For the students by the students of <a href="/sql_exams">Tech@Park</a></h6>
						
						<a href="/sql_exams" class="btn btn-info btn-lg text-left mt-1">
							Get Started | <i class="fab fa-github"></i>
						</a>
				</div>
				<div class="col-4 col-md-4 col-lg-4 mt-4 p-0 border">
					<img src="https://designsystem.techatpark.com/images/banner.png" class="img-fluid" alt="Responsive image">
				</div>
			</div>
				
			
		</div>
`;
