interface Menu {
  title?: string;
  name?: string;
  icon?: string;
  routerLink?: string;
}

export interface IMenu extends Menu {
  children?: Menu[];
}
