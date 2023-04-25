import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
  constructor(private router: Router) { }

  onMenuItemSelect(args: any) {
    this.router.navigate([args.item.url]);
  }
  
  public companyMenuItems: MenuItemModel[] = [
    {
      text: 'Dashboard',
      iconCss: 'e-icons e-comments',
      items: [
        { text: 'About Us' },
        { text: 'Customers' },
        { text: 'Blog' , url: 'Blog',},
        { text: 'Careers', url: 'Careers', },
      ],
    },
  ];
  public productMenuItems: MenuItemModel[] = [
    {
      text: 'Products',iconCss: 'e-icons e-comments',
      items: [
        { text: 'Developer', url: 'developer', },
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
