import { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions, CellStyle, ModuleRegistry, GridApi } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';
import { RowGroupingModule, ColumnsToolPanelModule, PivotModule } from 'ag-grid-enterprise';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './styles.css';
import { generatePositionData, getDefaultDateRange, PositionData } from './dataGenerator';

// Register AG Grid modules
ModuleRegistry.registerModules([
  AllCommunityModule,
  ClientSideRowModelModule,
  RowGroupingModule,
  PivotModule,
  ColumnsToolPanelModule
]);
export function dateComparator(
  date1: string | Date,
  date2: string | Date
): number {
  const date1Number = new Date(date1).getTime();
  const date2Number = new Date(date2).getTime();
  if (isNaN(date1Number) && isNaN(date2Number)) {
    return 0;
  }
  if (isNaN(date1Number)) {
    return -1;
  }
  if (isNaN(date2Number)) {
    return 1;
  }

  return date1Number - date2Number;
}
export default function App() {
  const { startDate: defaultStart, endDate: defaultEnd } = getDefaultDateRange();
  const gridRef = useRef<AgGridReact>(null);

  const [startDate, setStartDate] = useState<string>(
    defaultStart.toISOString().split('T')[0]
  );
  const [endDate, setEndDate] = useState<string>(
    defaultEnd.toISOString().split('T')[0]
  );

  // Generate data based on selected date range
  const rowData = useMemo<PositionData[]>(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return generatePositionData(start, end);
  }, [startDate, endDate]);

  // Refresh pivot columns when data changes
  useEffect(() => {
    if (gridRef.current?.api) {
      gridRef.current.api.refreshClientSideRowModel('aggregate');
    }
  }, [rowData]);

  // Column definitions with pivot configuration
  const columnDefs = useMemo<ColDef[]>(() => [
    {
      field: 'ticker',
      headerName: 'Ticker',
      rowGroup: true,
      enableRowGroup: true,
      width: 120,
    },
    {
      field: 'date',
      headerName: 'Date',
      pivot: true,
      enablePivot: true,
      width: 120,
      pivotComparator: (a, b) => dateComparator(b, a),

    },
    {
      field: 'price',
      headerName: 'Close Price',
      aggFunc: 'last',
      valueFormatter: (params) => {
        if (params.value != null) {
          return '$' + params.value.toFixed(2);
        }
        return '';
      },
    },


  ], []);

  const defaultColDef = useMemo<ColDef>(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
  }), []);

  const gridOptions = useMemo<GridOptions>(() => ({
    pivotMode: true,
    suppressAggFuncInHeader: true,
    groupDefaultExpanded: -1,
  }), []);

  const onGridReady = useCallback((params: any) => {
    params.api.sizeColumnsToFit();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Historical Position P&L Pivot Analysis</h1>
        <div className="date-picker-container">
          <div className="date-input-group">
            <label htmlFor="start-date">Start Date:</label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              max={endDate}
            />
          </div>
          <div className="date-input-group">
            <label htmlFor="end-date">End Date:</label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
            />
          </div>
        </div>
        <p className="info">
          Pivot view shows P&L by ticker across dates. Data is deterministic based on date.
        </p>
      </div>
      <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 200px)', width: '100%' }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
          onGridReady={onGridReady}
          animateRows={true}
        />
      </div>
    </div>
  );
}
