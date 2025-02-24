import { Component, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { type UserInput } from "./user-input.model";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredDuration = "10";
  enteredExpectedReturn = "5";

  @Output() userValues = new EventEmitter<UserInput>();

  onSubmit() {
    this.userValues.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
    });
  }
}
