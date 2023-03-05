import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.css'],
})
export class HandlerComponent {
  params!: any;
  buttonText: string = '';

  constructor(private Aroute: ActivatedRoute, private router: Router) {
    this.params = this.Aroute.snapshot.queryParams;

    if (this.params.title == 'Error') {
      this.buttonText = 'Retry';
    } else if (this.params.title == 'SecurityError') {
      this.buttonText = 'Login';
    }
  }

  accept() {
    this.router.navigate(['/home']);
  }
}
