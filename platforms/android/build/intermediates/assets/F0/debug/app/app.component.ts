import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <TextField hint="Email Address" KeyboardType="email" 
      autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="password" secure="true"></TextField>

    <button text="Sign in"></Button>
    <button text="Sign up for Groceries"></Button>
  `
})
export class AppComponent {}