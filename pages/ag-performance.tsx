import { useMemo, useCallback, useRef, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllEnterpriseModule, ColDef, GridOptions, ModuleRegistry } from 'ag-grid-enterprise';
import { generateBulkData } from '../src/dataGenerator';
import { columnDefs as importedColumnDefs } from '../src/columnDefs';
import { Slider } from '@/components/ui/slider';

ModuleRegistry.registerModules([
  AllEnterpriseModule,
]);

export default function AgPerformance() {
  const gridRef = useRef<AgGridReact>(null);
  const dataLoadTimeRef = useRef<number | null>(null);
  const [rowCount, setRowCount] = useState(5000);

  // Generate data based on rowCount
  const data = useMemo(() => {
    console.log(`Generating ${rowCount.toLocaleString()} rows...`);
    const records = generateBulkData(rowCount);
    console.log('Data generated:', records.length, 'rows');
    console.log('First row sample:', records[0]);
    return records;
  }, [rowCount]);

  // State to simulate loading - rowData will be null for 1 second, then becomes { records: [...] }
  const [rowData, setRowData] = useState<{ records: any[] | undefined } | null>({ records: undefined });
  const [gridLoadTime, setGridLoadTime] = useState<number | null>(null);

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
    rowGroupPanelShow: 'always', // Show the row group panel at the top
  }), []);

  const onFirstDataRendered = useCallback((params: any) => {
    if (dataLoadTimeRef.current) {
      const loadTime = Date.now() - dataLoadTimeRef.current;
      setGridLoadTime(loadTime);
      console.log('Grid first data rendered with', params.api.getDisplayedRowCount(), 'rows. Load time:', loadTime, 'ms');
    }
  }, []);

  const records = rowData?.records || [];
  return (
    <div className="App">
      <div className="header">
        <h1>AG Grid Performance Test - {rowCount.toLocaleString()} Rows</h1>
        <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '16px', fontWeight: 'bold' }}>
            <span style={{ minWidth: '150px' }}>Number of Rows: {rowCount.toLocaleString()}</span>
            <Slider
              value={[rowCount]}
              onValueChange={(value) => setRowCount(value[0])}
              min={5000}
              max={60000}
              step={5000}
              className="flex-1"
            />
          </label>
        </div>
        <p className="info">
          {rowData === null
            ? '🔄 Loading data...'
            : `✅ Grid loaded with ${rowCount.toLocaleString()} rows and ${columnDefs.length} columns.`}
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
          {rowData === null ? 'Status: Loading...' : `Status: Data Loaded Successfully ${gridLoadTime !== null ? `- Loaded in ${gridLoadTime}ms` : ''}`}
        </div>
      </div>
      <div style={{ height: 'calc(100vh - 120px)', width: '100%' }}>
        <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
          <AgGridReact
            ref={gridRef}
            loading={!rowData?.records}
            rowData={records}
            sideBar={true}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            onFirstDataRendered={onFirstDataRendered}
            animateRows={false}
            theme="legacy"
          />
        </div>
      </div>
    </div>
  );
}
