import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
      <TextField hint="Email Address" KeyboardType="email" 
        autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="password" secure="true"></TextField>

      <Button text="Sign in" class="submit-button"></Button>
      <Button text="Sign up for Groceries"></Button>
    </StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {}