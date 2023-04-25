import {
  Component,
  ViewChild,
} from '@angular/core';
import {
  MenuItemModel,
  TabComponent,
} from '@syncfusion/ej2-angular-navigations';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageThreeComponent } from '../page-three/page-three.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.scss'],
})
export class TabPageComponent {
  @ViewChild('adaptiveTab') public adaptiveTab?: TabComponent;

  constructor(private router: Router) { }

  onMenuItemSelect(args: any) {
    this.router.navigate([args.item.url]);
  }

  headerText = [
    {
      text: 'Tab 1',
      iconCss: 'e-icons e-home',
      index: 0,
      component: PageOneComponent,
    },
    {
      text: 'Tab 2',
      iconCss: 'e-icons e-bookmark',
      index: 1,
      component: PageTwoComponent,
    },
    {
      text: 'Tab 3',
      iconCss: 'e-icons e-comments',
      index: 2,
      component: PageThreeComponent,
    },
    {
      text: 'Tab 4',
      iconCss: 'e-icons e-calendar',
      index: 3,
      component: PageOneComponent,
    },
  ];

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
