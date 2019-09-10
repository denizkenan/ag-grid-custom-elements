import {Component, ViewChild, OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid-community';
import {AgGridMaterialTextEditorComponent} from './ag-grid-material-text-editor/ag-grid-material-text-editor.component';
import {AgGridMaterialSelectEditorComponent} from './ag-grid-material-select-editor/ag-grid-material-select-editor.component';
import {AgGridMaterialDatepickerEditorComponent} from './ag-grid-material-datepicker-editor/ag-grid-material-datepicker-editor.component';
import {AgGridMaterialCheckboxCellComponent} from './ag-grid-material-checkbox-cell/ag-grid-material-checkbox-cell.component';
import * as moment from 'moment';
import { AgGridNg2, AgGridModule } from 'ag-grid-angular';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    @ViewChild('agGrid') agGrid: AgGridNg2;

    private gridOptions: GridOptions = <GridOptions>{
        enableSorting: true,
        rowSelection: 'multiple',
        suppressRowClickSelection: true
    };
    public rowData: any[];
    private columnDefs: any[];


    constructor() {
        this.columnDefs = [
            {
                headerName: ' ',
                cellRendererFramework: AgGridMaterialCheckboxCellComponent,
                width: 80
            },
            {
                headerName: 'Make',
                field: 'make',
                editable: true,
                cellEditorFramework: AgGridMaterialSelectEditorComponent,
                cellEditorParams: {values: ['Toyota', 'Ford', 'Porsche']}
            },
            {
                headerName: 'Model',
                field: 'model',
                editable: true,
                cellEditorFramework: AgGridMaterialTextEditorComponent
            },
            {
                headerName: 'Made on',
                field: 'madeOn',
                editable: true,
                cellEditorFramework: AgGridMaterialDatepickerEditorComponent,
               
            },
        ];

        this.rowData = [
            {make: 'Toyota', model: 'Celica', madeOn: null},
            {make: 'Ford', model: 'Mondeo', madeOn: new Date(2016, 2, 13)},
            {make: 'Porsche', model: 'Boxter', madeOn: new Date(2010, 7, 10)}
        ];
    }

    ngOnInit(): void{
        
    }

   
}
