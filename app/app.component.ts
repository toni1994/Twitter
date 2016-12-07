import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
   <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Naslovnica <i class="fa fa-home fa-lx" aria-hidden="true"></i> </a></li>
        <li><a href="#">Obavijesti <i class="fa fa-bell fa-lx" aria-hidden="true"></i> </a></li>
		    <li><a href="#">Poruke <i class="fa fa-envelope fa-lx" aria-hidden="true"></i> </a></li>  
      </ul>
      <ul class="nav navbar-nav navbar-right">
	  <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
	  
	  <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
		
    
       <button type="submit" class="btn btn-primary">Tweet</button>
       
        
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


<div class="col-md-3">
  <div class="panel panel-default text-center">
        <div class="panel-heading">
        <h1>Profile</h1>
    <div class="row">
        <div class="col-xs-6">
            <div class="big-box">
              <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" class="img-thumbnail" >
            </div>
        </div>
        <div class="col-xs-6">
            <div class="row">
                <div class="profile-text"> Name:Mario Boban</div>
                <div class="profile-text"> @Mboban</div>
                <div class="profile-text"> Country:Croatia</div>
                <div class="profile-text"> City:Split</div>
            </div>
        </div>
</div>
          
        </div>
        <div class="panel-body">
          <p><strong>20</strong> Lorem</p>
          <p><strong>15</strong> Ipsum</p>
          <p><strong>5</strong> Dolor</p>
          <p><strong>2</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
      </div>
</div>
<div class="col-md-6">
          <div class="row">
       <div class="box profile-info n-border-top">
                    <form>
                        <textarea class="form-control input-lg p-text-area" rows="2" placeholder="Whats in your mind today?"></textarea>
                    </form>
                    <div class="box-footer box-form">
                        <button type="button" class="btn btn-primary pull-right">Post</button>
                        <ul class="nav nav-pills">
                            <li><a href="#"><i class="fa fa-map-marker"></i></a></li>
                            <li><a href="#"><i class="fa fa-camera"></i></a></li>
                            <li><a href="#"><i class=" fa fa-film"></i></a></li>
                            <li><a href="#"><i class="fa fa-microphone"></i></a></li>
                        </ul>
                    </div>
       </div>
       </div>
        <div class="row">
          <div class="panel panel-default text-center">
             <div class="panel-heading">
               <h1>Basic</h1>
        </div>
        <div class="panel-body">
          <p>Hajduk opet izgubio utakmicu u san Lorenu rezultatom 2:0 sto je sokiralo navijace poznatog dalmatinskog kluba</p>
          <p><strong>15</strong> Ipsum</p>
          <p><strong>5</strong> Dolor</p>
          <p><strong>2</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div class="panel-footer">
          <h3>$19</h3>
          <h4>per month</h4>
          <button class="btn btn-lg">Sign Up</button>
        </div>
      </div>
        </div>
      </div>           
   `
})
export class AppComponent { 
 
 }
