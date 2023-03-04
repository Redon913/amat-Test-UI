import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() ToggleCart: EventEmitter<any> = new EventEmitter();
  
  
  cartToggle(){
    this.ToggleCart.emit(null);
  }
}
