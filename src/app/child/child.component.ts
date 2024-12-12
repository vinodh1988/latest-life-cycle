import { Component,Input, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core'; // Called once after the first ngOnChanges
import { OnChanges } from '@angular/core'; // Called before ngOnInit and whenever one or more data-bound input properties change
import { OnDestroy } from '@angular/core'; // Cleanup just before Angular destroys the directive/component
import { DoCheck } from '@angular/core'; // Called every change detection run, immediately after ngOnChanges
import { AfterContentInit } from '@angular/core'; // Called after Angular projects external content into the component's view
import { AfterContentChecked } from '@angular/core'; // Called after every check of the projected content
import { AfterViewInit } from '@angular/core'; // Called after Angular initializes the component's views and child views
import { AfterViewChecked } from '@angular/core'; // Called after every check of the component's views and child views


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,AfterContentInit,AfterViewInit,OnChanges,
AfterContentChecked,AfterViewChecked{
    normal:string="normal"
@Input() childnumber:string="default child"
      constructor(){
            console.log(this.childnumber+ " is instantiated")
            //During constructor @Input() would receive value from parent
            console.log("Normal:"+this.normal);
      }


      ngOnInit(): void {
        console.log(this.childnumber+ " in onInit")
      }

      ngAfterContentInit(): void {
        console.log("child content init for "+this.childnumber)
      }

      ngAfterViewInit(): void {
        console.log("view  init for child"+this.childnumber)
      }
      
      ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
        console.log("input values received")
      }

      ngAfterContentChecked(): void {
          console.log("child content updated")
      }
      ngAfterViewChecked(): void {
          console.log("view content updated")
      }
      
}
