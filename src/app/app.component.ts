import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'syncfusion-test';
  constructor(private router: Router) { }

  onMenuItemSelect(args: any) {
    this.router.navigate([args.item.url]);
  }
  
  public companyMenuItems: MenuItemModel[] = [
    {
      text: 'Dashboard',
      iconCss: 'e-icons e-comments',
      items: [
        { text: 'About Us' ,iconCss: 'e-icons e-comments'},
        { text: 'Customers' ,iconCss: 'e-icons e-comments'},
        { text: 'Blog' , url: 'Blog',iconCss: 'e-icons e-comments'},
        { text: 'Careers', url: 'Careers', iconCss: 'e-icons e-comments'},
      ],
    },
  ];
  public productMenuItems: MenuItemModel[] = [
    {
      text: 'Products',iconCss: 'e-icons e-comments',
      items: [
        { text: 'Developer', url: 'developer', iconCss: 'e-icons e-comments'},
        { text: 'Analytics' },
        { text: 'Reporting' },
        { text: 'Help Desk' },
      ],
    },
  ];
  public aboutMenuItems: MenuItemModel[] = [
    {
      text: 'About Us',iconCss: 'e-icons e-comments',
    },
  ];
  public carrerMenuItems: MenuItemModel[] = [
    {
      text: 'Carrers',iconCss: 'e-icons e-comments',
    },
  ];
}
