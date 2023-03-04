import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.css'],
})
export class HandlerComponent {
  params!: any;

  constructor(private Aroute: ActivatedRoute, private router: Router) {
    this.params = this.Aroute.snapshot.queryParams;
    console.log(this.params.title);
  }

  accept() {
    this.router.navigate(['/home']);
  }
}
