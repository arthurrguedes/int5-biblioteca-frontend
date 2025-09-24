import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-box',
  standalone: true,
  template: `
    <div class="content-box">
      <button class="btn-laranja">{{ titulo }}</button>
      <div class="caixa-branca">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .content-box {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border: 1px solid #d97a0f;
      border-radius: 12px;
      padding: 16px;
    }

    .btn-laranja {
      position: absolute;
      top: -14px;
      left: 16px;
      background-color: #d97a0f;
      color: white;
      font-weight: bold;
      font-size: 14px;
      padding: 4px 16px;
      border: none;
      border-radius: 6px;
      z-index: 2;
      cursor: default;
      user-select: none;
      width: 140px;
      text-align: center;
    }

    .caixa-branca {
      background-color: #fff;
      color: #333;
      margin-top: 28px;
      font-size: 14px;
    }
  `]
})
export class ContentBoxComponent {
  @Input() titulo: string = '';
}
