import { Component, OnInit } from '@angular/core';
import { MyPlugin  } from "my-plugin";
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
hello:string = "jian she1"

  constructor() {
  }

  ngOnInit(): void {
    const { MyPlugin } = Plugins;
    MyPlugin.echo({ value: this.hello}).then((res: { value: string }) => {
      this.hello = res.value;
      console.log("res:" + this.hello)
    })
  }
}
