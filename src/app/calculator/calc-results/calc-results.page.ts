import { Component, OnInit, Input } from '@angular/core';
import { CalculatorResults } from '../../models/calculator.model';

@Component({
  selector: 'app-calculator-results',
  templateUrl: './calc-results.page.html',
  styleUrls: ['./calc-results.page.scss'],
})
export class CalculatorResultsPage implements OnInit{
  @Input() public model: CalculatorResults;
  public renderedHTML: string;

  constructor() { }

  ngOnInit(){
    this.renderedHTML = this.stringReplacement();
  }

  stringReplacement() {
    // TODO [MM]: the innerHTML replacement isn't working yet, but this was good enough to commit and get it off my machine
    let builtString = this.model.markup || '<p>test 0:{0} 1:{1} 2:{2}</p>';
    for (let i = 0; i < this.model.results.length; i++) {
      builtString = builtString.replace('{' + i + '}', this.model.results[i].toString());
    }
    return builtString;
  }
}
