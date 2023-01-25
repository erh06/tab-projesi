import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabComps!: QueryList<TabComponent>;
  attr_id = '';
  attr_target = '';
  attr_controls = '';

  ngAfterContentInit(): void {
    this.tabComps.toArray().forEach((tab: TabComponent) => {
      this.attr_id = `nav-${tab.id}-tab`;
      this.attr_target = `#nav-${tab.id}`;
      this.attr_controls = `nav-${tab.id}`;
    });

    // ilk sekmeyi varsayılan olarak seçili halde gösteriyorum
    this.selectTabByIndexNo(0);
  }

  private _deactiveAllTabs(): void {
    this.tabComps.forEach(tab => (tab.selected = false));
  }

  selectTab(tab: TabComponent) {
    // not: visible olmayan bir seçmeyi seçmeye çalışmayalım ;)
    if (tab !== undefined && tab.visible) {
      this._deactiveAllTabs();
      tab.selected = true;
    }
  }

  selectTabByIndexNo(index: number) {
    // @ts-ignore
    const tab = this.tabComps.toArray().at(index);
    this.selectTab(tab);
  }

  selectTabById(id: string) {
    const tab = this.tabComps.toArray().find(tabCurrent => tabCurrent.id === id);
    // @ts-ignore
    this.selectTab(tab);
  }
}
