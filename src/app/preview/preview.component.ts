import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  iFrameTag: string;

  constructor() { }

  ngOnInit(): void {
    this.formatIFrameTag();
  }

  private formatIFrameTag() {
    let prodUrl = window.location.href.replace('preview', 'prod');
    this.iFrameTag = `<iframe src="${prodUrl}" frameborder="0" width="100%" height="510"></iframe>`;
  }

  public copyUrl(): void {
    const inputText: HTMLInputElement = document.getElementById('urlInput') as HTMLInputElement;
    inputText.select();
    inputText.setSelectionRange(0, 99999);

    document.execCommand('copy');

    alert("Tag copied!");
  }
}
