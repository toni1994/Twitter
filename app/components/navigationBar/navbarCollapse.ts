import { Component } from '@angular/core';

@Component({
    selector: "navbar-collapse", 
    template: 
    `
      <div class="collapse navbar-collapse" id="bs-navbar-collapse-1">
         <ul class="nav navbar-nav">
            <li class="active"><a href="#">Naslovnica <i class="fa fa-home fa-lx" aria-hidden="true"></i> </a></li>
            <li><a href="#">Obavijesti <i class="fa fa-bell fa-lx" aria-hidden="true"></i> </a></li>
            <li><a href="#">Poruke <i class="fa fa-envelope fa-lx" aria-hidden="true"></i> </a></li>
         </ul>
         <ul class="nav navbar-nav navbar-right">
            <form class="navbar-form navbar-left" role="search">
               <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
               </div>
               <button id="searchIcon" type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
            </form>
            <li class="dropdown" id="myProfil">
               <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <i class="fa fa-user" aria-hidden="true"></i>  <span class="caret"></span></a>
               <ul class="dropdown-menu">
                  <li><a href="#">Moj profil</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Popisi</a></li>
                  <li><a href="#">Aktualni događaji</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Pomoć</a></li>
                  <li><a href="#">Tikovni prečaci</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Postvake</a></li>
                  <li><a href="#">Odjava</a></li>
               </ul>
            </li>
            <button type="submit" class="btn btn-primary navbar-btn"><i class="fa fa-pencil" aria-hidden="true"></i> Tweet</button>
         </ul>
      </div>  
    `
})
export default class NavbarCollapse {

    constructor(){
    }
}