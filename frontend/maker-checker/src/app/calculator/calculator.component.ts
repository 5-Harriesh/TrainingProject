import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { IExpression } from './../core/models/expression.interface'
import { ExpressionService } from '../core/services/expression.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  
})
export class CalculatorComponent implements OnInit {

  calForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,private expressionService:ExpressionService) { }

  ngOnInit() {
    this.prepareForm();
  }

  prepareForm(): any {
    this.calForm = this.formBuilder.group({
      IExpression: new FormGroup({
        expressionInput: new FormControl,
        expressionOutput: new FormControl
      })
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.calForm.invalid) {
      return;
    }
    const input: IExpression = Object.assign({}, this.calForm.value.IExpression);
    console.log('submitted!! :-)\n\n' + JSON.stringify(input))
    this.expressionService.getExpression(input).subscribe((response : any)  => {
      input.expressionOutput = response;
      this.calForm.setValue({IExpression:input});
    })
  }
  
}
