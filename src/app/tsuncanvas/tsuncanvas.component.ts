
import { Component } from '@angular/core';

@Component({
  selector: 'app-tsuncanvas',
  templateUrl: './tsuncanvas.component.html',
  styleUrls: ['./tsuncanvas.component.css']
})
export class TsuncanvasComponent {

  YuukaWiki(){
    window.open("https://bluearchive.fandom.com/wiki/Hayase_Yuuka");
  }
  KeqingWiki(){
    window.open("https://genshin-impact.fandom.com/wiki/Keqing");
  }
  HipperWiki(){
    window.open("https://azurlane.koumakan.jp/wiki/Admiral_Hipper");
  }
  KarylWiki(){
    window.open("https://princess-connect.fandom.com/wiki/Karyl");
  }

}
