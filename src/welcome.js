export class App {
  heading = "Joshua's fun world!";
  firstName = 'Joshua';
  lastName = 'Bertrand';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome, ${this.fullName}!`);
  }
}
