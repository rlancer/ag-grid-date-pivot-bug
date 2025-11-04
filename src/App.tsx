import { useMemo, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions, ModuleRegistry } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';
import { RowGroupingModule, ColumnsToolPanelModule, PivotModule } from 'ag-grid-enterprise';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './styles.css';
import { generateBulkData } from './dataGenerator';
import { columnDefs as importedColumnDefs } from './columnDefs';

// Register AG Grid modules
ModuleRegistry.registerModules([
  AllCommunityModule,
  ClientSideRowModelModule,
  RowGroupingModule,
  PivotModule,
  ColumnsToolPanelModule
]);

export default function App() {
  const gridRef = useRef<AgGridReact>(null);

  // Generate 60k rows of data
  const rowData = useMemo(() => {
    console.log('Generating 60,000 rows...');
    const data = generateBulkData(60000);
    console.log('Data generated:', data.length, 'rows');
    console.log('First row sample:', data[0]);
    return data;
  }, []);

  // Use the column definitions from columnDefs.ts
  const columnDefs = useMemo<ColDef[]>(() => importedColumnDefs, []);

  const defaultColDef = useMemo<ColDef>(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
  }), []);

  const gridOptions = useMemo<GridOptions>(() => ({
    suppressAggFuncInHeader: true,
  }), []);

  const onGridReady = useCallback((params: any) => {
    console.log('Grid ready with', params.api.getDisplayedRowCount(), 'rows');
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>AG Grid Bug Reproduction - 60k Rows</h1>
        <p className="info">
          Grid loaded with 60,000 rows and {columnDefs.length} columns for bug testing.
        </p>
      </div>
      <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 120px)', width: '100%' }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
          onGridReady={onGridReady}
          animateRows={false}
        />
      </div>
    </div>
  );
}
