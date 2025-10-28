import { useMemo, useState, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions, CellStyle, ModuleRegistry } from 'ag-grid-community';
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

export default function App() {
  const { startDate: defaultStart, endDate: defaultEnd } = getDefaultDateRange();

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

  // Column definitions with pivot configuration
  const columnDefs = useMemo<ColDef[]>(() => [
    {
      field: 'ticker',
      headerName: 'Ticker',
      rowGroup: false,
      enableRowGroup: true,
      width: 120,
    },
    {
      field: 'date',
      headerName: 'Date',
      pivot: true,
      enablePivot: true,
      width: 120,
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
    {
      field: 'pnl',
      headerName: 'P&L',
      aggFunc: 'sum',
      valueFormatter: (params) => {
        if (params.value != null) {
          const formatted = '$' + params.value.toFixed(2);
          return params.value >= 0 ? formatted : formatted;
        }
        return '';
      },
      cellClassRules: {
        'pnl-positive': (params) => params.value != null && params.value > 0,
        'pnl-negative': (params) => params.value != null && params.value < 0,
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
