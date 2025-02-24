import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { type UserInput } from "./user-input/user-input.model";
import { InvestmentResults } from "./investment-results/investment-results.model";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent],
})
export class AppComponent {
  resultsData?: InvestmentResults[];

  onCalculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    duration,
    expectedReturn,
  }: UserInput) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}
