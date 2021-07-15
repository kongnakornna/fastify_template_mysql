import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '../menu/menu.service';

@Component({
    selector: 'app-flags-menu',
    templateUrl: './flags-menu.component.html',
    styleUrls: ['./flags-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FlagsMenuComponent implements OnInit {

    constructor(public translateService: TranslateService, public menuService: MenuService) { }

    ngOnInit() {
    }

    public changeLang(lang: string) {
        this.translateService.use(lang);
        let menuItems = this.menuService.getVerticalMenuItems();
        let menu_wrapper = document.getElementById('menu0');
        menu_wrapper.innerHTML = '';
        this.menuService.createMenu(menuItems, menu_wrapper, 'vertical');
    }

    public getLangText(lang) {
        if (lang == 'de') {
            return 'German';
        }
        else if (lang == 'fr') {
            return 'French';
        }
        else if (lang == 'ru') {
            return 'Russian';
        }
        else if (lang == 'tr') {
            return 'Turkish';
        }
        else if (lang == 'th') {
            return 'Thai';
        }
        else {
            return 'English';
        }
    }

}
