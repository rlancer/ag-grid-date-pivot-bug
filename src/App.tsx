import { useMemo, useCallback, useRef, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllEnterpriseModule, ColDef, GridOptions, ModuleRegistry } from 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './styles.css';
import { generateBulkData } from './dataGenerator';
import { columnDefs as importedColumnDefs } from './columnDefs';

ModuleRegistry.registerModules([
  AllEnterpriseModule,
]);

export default function App() {
  const gridRef1 = useRef<AgGridReact>(null);
  const gridRef2 = useRef<AgGridReact>(null);

  // Generate 60k rows of data
  const data = useMemo(() => {
    console.log('Generating 60,000 rows...');
    const records = generateBulkData(60000);
    console.log('Data generated:', records.length, 'rows');
    console.log('First row sample:', records[0]);
    return records;
  }, []);

  // State to simulate loading - rowData will be null for 1 second, then becomes { records: [...] }
  const [rowData, setRowData] = useState<{ records: any[] } | null>(null);

  useEffect(() => {
    // Simulate 1 second loading delay
    const timer = setTimeout(() => {
      setRowData({ records: data });
      console.log('Data loaded after 1 second delay');
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  // Use the column definitions from columnDefs.ts
  const columnDefs = useMemo<ColDef[]>(() => importedColumnDefs, []);

  const defaultColDef = useMemo<ColDef>(() => ({
    sortable: true,
    filter: true,
    enableRowGroup: true,
    resizable: true,
    minWidth: 100,
  }), []);

  const gridOptions = useMemo<GridOptions>(() => ({
    suppressAggFuncInHeader: true,
    groupDefaultExpanded: 0, // Start with all groups collapsed
    autoGroupColumnDef: {
      headerName: 'Group',
      minWidth: 300,
      cellRendererParams: {
        suppressCount: false,
      },
    },
  }), []);

  const onGridReady = useCallback((params: any) => {
    console.log('Grid ready with', params.api.getDisplayedRowCount(), 'rows');
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>AG Grid Bug Reproduction - 60k Rows (Side by Side)</h1>
        <p className="info">
          {rowData === null
            ? 'Loading data...'
            : `Two grids loaded with 60,000 rows and ${columnDefs.length} columns for bug testing.`}
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px', height: 'calc(100vh - 120px)', width: '100%' }}>
        <div className="ag-theme-alpine" style={{ height: '100%', width: '50%' }}>
          <AgGridReact
            ref={gridRef1}
            rowData={rowData?.records || []}
            sideBar={true}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            onGridReady={onGridReady}
            animateRows={false}
          />
        </div>
        <div className="ag-theme-alpine" style={{ height: '100%', width: '50%' }}>
          <AgGridReact
            ref={gridRef2}
            rowData={rowData?.records}
            sideBar={true}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            onGridReady={onGridReady}
            animateRows={false}
          />
        </div>
      </div>
    </div>
  );
}
