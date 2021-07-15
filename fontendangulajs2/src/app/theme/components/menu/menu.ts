import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'ADMIN_NAV.DASHBOARD', '/', null, 'tachometer', null, false, 0),
    new Menu (40, 'ADMIN_NAV.PAGES', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'LOGIN', '/login', null, 'sign-in', null, false, 40),    
    new Menu (44, 'Register', '/register', null, 'registered', null, false, 40),
    new Menu (45, 'Blank', '/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),   
    new Menu (140, 'Level 1', null, null, 'folder-open-o', null, true, 0),
    new Menu (141, 'Level 2', null, null, 'folder-open-o', null, true, 140),
    new Menu (142, 'Level 3', null, null, 'folder-open-o', null, true, 141),
    new Menu (143, 'Level 4', null, null, 'folder-open-o', null, true, 142),
    new Menu (144, 'Level 5', null, null, 'folder-o', null, false, 143),
    new Menu (200, 'ADMIN_NAV.EXTERNAL_LINK', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
]

export const horizontalMenuItems = [ 
    new Menu (1, 'ADMIN_NAV.DASHBOARD', '/', null, 'tachometer', null, false, 0),
    new Menu (40, 'ADMIN_NAV.PAGES', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'LOGIN', '/login', null, 'sign-in', null, false, 0),    
    new Menu (44, 'Register', '/register', null, 'registered', null, false, 0),
    new Menu (45, 'Blank', '/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    new Menu (200, 'ADMIN_NAV.EXTERNAL_LINK', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
]