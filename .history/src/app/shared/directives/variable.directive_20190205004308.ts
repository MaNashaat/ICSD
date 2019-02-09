import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[var]',
  exportAs: 'var'
})
export class VarDirective implements OnInit {
  @Input() var: any;

  ngOnInit() {
    let =; new Date();
  }
}
