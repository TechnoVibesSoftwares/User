import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Ref & Earn', url: '/folder/RefEarn', icon: 'wallet' },
    { title: 'QR Viewer', url: '/folder/QRview', icon: 'qr-code' },
    { title: 'Invoices', url: '/folder/Invoices', icon: 'albums' },
    { title: 'Feedback', url: '/folder/Feedback', icon: 'trash' },
    { title: 'Customer Feedback', url: 'folder/feedback', icon: 'accessibility' },
    { title: 'Log Out', url: 'folder/home', icon: 'log-out' },
  ];
}
