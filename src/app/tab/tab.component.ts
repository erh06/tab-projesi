import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tab[id]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() id = 'varsayilan-tab-id';
  @Input() icon = '';
  @Input() title = '';

  // RENDER edilsin mi edilmesin mi?
  @Input() visible = true;

  // üzerine tıklandı mı tıklanmadı mı?
  @Input() selected = true;

  @Output() init = new EventEmitter<any>();

  attr_id = '';
  attr_labelledby = '';

  ngOnInit(): void {
    // Bootstrap Csss için gerekli bunlar
    this.attr_id = `nav-${this.id}`;
    this.attr_labelledby = `nav-${this.id}-tab`;

    this.init.emit();
  }

}
