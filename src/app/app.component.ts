import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tab-projesi';

  sekme2initialized() {
    // render edilmesini istemediğimiz için bunu Console çıktısında görmememiz lazım
    console.log('%c Sekme 2 Initialized!', 'background: #555; color: yellow');
  }
}
