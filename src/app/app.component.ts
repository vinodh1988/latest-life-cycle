import { Component, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core'; // Called once after the first ngOnChanges
import { OnChanges } from '@angular/core'; // Called before ngOnInit and whenever one or more data-bound input properties change
import { OnDestroy } from '@angular/core'; // Cleanup just before Angular destroys the directive/component
import { DoCheck } from '@angular/core'; // Called every change detection run, immediately after ngOnChanges
import { AfterContentInit } from '@angular/core'; // Called after Angular projects external content into the component's view
import { AfterContentChecked } from '@angular/core'; // Called after every check of the projected content
import { AfterViewInit } from '@angular/core'; // Called after Angular initializes the component's views and child views
import { AfterViewChecked } from '@angular/core'; // Called after every check of the component's views and child views

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterContentInit,AfterViewInit
{
//,DoCheck {
  state="State "+new Date().toTimeString()
    constructor( ){
       console.log("App Constructed")
    }
    ngOnInit(){
      console.log("App component Initiated")
    }

    stateChange(){
      this.state = "State "+new Date().toTimeString()
    }
    ngAfterContentInit(): void {
      console.log(" content init for APP component")
    }

    ngAfterViewInit(): void {
      console.log("view  init for APP component")
    }
/*    ngDoCheck(): void {
      console.log("Check check check")
    }*/
}
