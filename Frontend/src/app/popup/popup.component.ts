import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { IConteos } from '@app/history-list/Interfaces/IConteos';
import { RandomUserService } from '../history-list/services/history-list.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent implements OnInit {
  tableData: any[] = [
    { responsable: 'John', hv: 8, he: 4, hec: 2, total: 14 },
    // Agrega más filas según tus datos
  ];

  constructor(public dialogRef: MatDialogRef<PopupComponent>,private randomUserService: RandomUserService) { }

  ngOnInit(): void {
  }
  onClose(): void {
    this.dialogRef.close();
  }

}
