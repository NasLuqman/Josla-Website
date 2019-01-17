import React, { Component } from 'react';
import './Blog.css';

class Blog extends Component {
  render(){
    return(
<div className="container-fluid section-padding gray-bg blogsection" >
<div className="container-fluid our-blog ">

<h2 className="heading"><center>Our Blog</center></h2>
<div className="heading-underline"></div>
	<div className="row">

		<div className="col-md-10 col-center m-auto">
			<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">


			<ol className="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			</ol>


			<div className="carousel-inner">
				<div className="item carousel-item active">
					<div className="row">
						<div className="col-sm-4">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="image/blog4.jpg" className="img-responsive" alt="image" />
								</div>
								<div className="thumb-content">
									<h4>Cyber security and Mobility</h4>
									<p>What is cyber security? Cyber security is the practice of protecting systems,</p>
									<a href="#" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="image/blog2.png" className="img-responsive" alt="image" />
								</div>
								<div className="thumb-content">
									<h4>Cognitive MicroServices</h4>
									<p>What is cyber security? Cyber security is the practice of protecting systems,</p>
									<a href="#" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="image/blog2.png" className="img-responsive" alt="image" />
								</div>
								<div className="thumb-content">
									<h4>Cyber security and Mobility</h4>
									<p>What is cyber security? Cyber security is the practice of protecting systems,</p>
									<a href="#" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item carousel-item">
					<div className="row">
						<div className="col-sm-4">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="image/blog2.png" className="img-responsive img-fluid" alt="image" />
								</div>
								<div className="thumb-content">
									<h4>Cyber security and Mobility</h4>
									<p>What is cyber security? Cyber security is the practice of protecting systems,</p>
									<a href="#" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="image/blog2.png" className="img-responsive img-fluid" alt="image" />
								</div>
								<div className="thumb-content">
									<h4>Cyber security and Mobility</h4>
									<p>What is cyber security? Cyber security is the practice of protecting systems,</p>
									<a href="#" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="image/blog2.png" className="img-responsive img-fluid" alt="image" />
								</div>
								<div className="thumb-content">
									<h4>Cyber security and Mobility</h4>
									<p>What is cyber security? Cyber security is the practice of protecting systems,</p>
									<a href="#" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item carousel-item">
					<div className="row">
						<div className="col-sm-4">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="image/blog2.png" className="img-responsive img-fluid" alt="image" />
								</div>
								<div className="thumb-content">
									<h4>Cyber security and Mobility</h4>
									<p>What is cyber security? Cyber security is the practice of protecting systems,</p>
									<a href="#" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="image/blog2.png" className="img-responsive img-fluid" alt="image" />
								</div>
								<div className="thumb-content">
									<h4>Cyber security and Mobility</h4>
									<p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
									<a href="#" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="image/blog2.png" className="img-responsive img-fluid" alt="image" />
								</div>
								<div className="thumb-content">
									<h4>Cyber security and Mobility</h4>
									<p>What is cyber security? Cyber security is the practice of protecting systems,</p>
									<a href="#" className="btn btn-primary">More <i className="fa fa-angle-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
				<i className="fa fa-angle-left"></i>
			</a>
			<a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
				<i className="fa fa-angle-right"></i>
			</a>
		</div>
		</div>
	</div>
</div>
</div>
);
}
}

export default Blog;
