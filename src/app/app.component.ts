import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  musicBands=["Rock","Pop","Jazz","Classical"];
        showMenu=false;
        first=50;
        second=50;
        third=50;
        fourth=50;
        fifth=50;
        selectedBand=" ";


    setShowMenu(){
      this.showMenu=true;
  }

  setBands(){

      if(this.selectedBand=="Rock"){
          this.first=10;
          this.second=20;
          this.third=30;
          this.fourth=80;
          this.fifth=65;
      }
      else if(this.selectedBand=="Pop"){
          this.first=12;
          this.second=33;
          this.third=52;
          this.fourth=10;
          this.fifth=90;
      }
      else if(this.selectedBand=="Jazz"){
          this.first=90;
          this.second=80;
          this.third=85;
          this.fourth=20;
          this.fifth=10;
      }
      else if(this.selectedBand=="Classical"){
          this.first=10;
          this.second=30;
          this.third=78;
          this.fourth=33;
          this.fifth=22;
      }

  }
}
