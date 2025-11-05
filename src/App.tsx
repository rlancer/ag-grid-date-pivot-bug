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
  const dataLoadTimeRef = useRef<number | null>(null);

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
  const [grid1LoadTime, setGrid1LoadTime] = useState<number | null>(null);
  const [grid2LoadTime, setGrid2LoadTime] = useState<number | null>(null);

  useEffect(() => {
    // Simulate 1 second loading delay
    const timer = setTimeout(() => {
      dataLoadTimeRef.current = Date.now();
      setRowData({ records: data });
      console.log('Data loaded after 1 second delay at:', dataLoadTimeRef.current);
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

  const onGrid1FirstDataRendered = useCallback((params: any) => {
    if (dataLoadTimeRef.current) {
      const loadTime = Date.now() - dataLoadTimeRef.current;
      setGrid1LoadTime(loadTime);
      console.log('Grid 1 first data rendered with', params.api.getDisplayedRowCount(), 'rows. Load time:', loadTime, 'ms');
    }
  }, []);

  const onGrid2FirstDataRendered = useCallback((params: any) => {
    if (dataLoadTimeRef.current) {
      const loadTime = Date.now() - dataLoadTimeRef.current;
      setGrid2LoadTime(loadTime);
      console.log('Grid 2 first data rendered with', params.api.getDisplayedRowCount(), 'rows. Load time:', loadTime, 'ms');
    }
  }, []);

  const records = rowData?.records || [];
  return (
    <div className="App">
      <div className="header">
        <h1>AG Grid Bug Reproduction - 60k Rows (Side by Side)</h1>
        <p className="info">
          {rowData === null
            ? '🔄 Loading data...'
            : `✅ Two grids loaded with 60,000 rows and ${columnDefs.length} columns for bug testing.`}
        </p>
        <div style={{
          padding: '10px',
          marginTop: '10px',
          borderRadius: '4px',
          backgroundColor: rowData === null ? '#fff3cd' : '#d4edda',
          border: `1px solid ${rowData === null ? '#ffc107' : '#28a745'}`,
          color: rowData === null ? '#856404' : '#155724',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          {rowData === null ? 'Status: Loading...' : 'Status: Data Loaded Successfully'}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', height: 'calc(100vh - 120px)', width: '100%' }}>
        <div style={{ height: '100%', width: '50%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{
            padding: '8px',
            borderRadius: '4px',
            backgroundColor: '#e3f2fd',
            border: '1px solid #2196f3',
            color: '#0d47a1',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Grid 1 {grid1LoadTime !== null ? `- Loaded in ${grid1LoadTime}ms` : '- Waiting...'}
          </div>
          <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
            <AgGridReact
              ref={gridRef1}
              loading={!rowData?.records}
              rowData={records}
              sideBar={true}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              gridOptions={gridOptions}
              onFirstDataRendered={onGrid1FirstDataRendered}
              animateRows={false}
            />
          </div>
        </div>
        <div style={{ height: '100%', width: '50%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{
            padding: '8px',
            borderRadius: '4px',
            backgroundColor: '#f3e5f5',
            border: '1px solid #9c27b0',
            color: '#4a148c',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Grid 2 {grid2LoadTime !== null ? `- Loaded in ${grid2LoadTime}ms` : '- Waiting...'}
          </div>
          <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
            <AgGridReact
              ref={gridRef2}
              loading={!rowData?.records}
              rowData={rowData?.records}
              sideBar={true}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              gridOptions={gridOptions}
              onFirstDataRendered={onGrid2FirstDataRendered}
              animateRows={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
