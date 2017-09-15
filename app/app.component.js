"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n      <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n      <TextField hint=\"Email Address\" KeyboardType=\"email\" \n        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n      <TextField hint=\"password\" secure=\"true\"></TextField>\n\n      <Button text=\"Sign in\" class=\"submit-button\"></Button>\n      <Button text=\"Sign up for Groceries\"></Button>\n    </StackLayout>\n  ",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFpQjFDLElBQWEsWUFBWTtJQUF6QjtJQUEyQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsWUFBWTtJQWZ4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLHVkQVVUO1FBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDckUsQ0FBQztHQUNXLFlBQVksQ0FBRztBQUFmLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9sb2dvX2xvZ2luXCIgc3RyZXRjaD1cIm5vbmVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9JbWFnZT5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBLZXlib2FyZFR5cGU9XCJlbWFpbFwiIFxuICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cbiAgICAgIDxUZXh0RmllbGQgaGludD1cInBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuXG4gICAgICA8QnV0dG9uIHRleHQ9XCJTaWduIGluXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJTaWduIHVwIGZvciBHcm9jZXJpZXNcIj48L0J1dHRvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9Il19