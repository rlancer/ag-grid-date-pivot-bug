import { useMemo, useCallback, useRef, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllEnterpriseModule, ColDef, GridOptions, ModuleRegistry } from 'ag-grid-enterprise';
import { generateBulkData } from '../src/dataGenerator';
import { columnDefs as importedColumnDefs } from '../src/columnDefs';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RotateCw } from 'lucide-react';

ModuleRegistry.registerModules([
  AllEnterpriseModule,
]);

export default function AgPerformance() {
  const gridRef = useRef<AgGridReact>(null);
  const dataLoadTimeRef = useRef<number | null>(null);
  const [rowCount, setRowCount] = useState(5000);
  const [autoRefreshInterval, setAutoRefreshInterval] = useState<string>('off');
  const [refreshKey, setRefreshKey] = useState(0);
  const autoRefreshTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate data based on rowCount and refreshKey
  const data = useMemo(() => {
    console.log(`Generating ${rowCount.toLocaleString()} rows...`);
    const records = generateBulkData(rowCount);
    console.log('Data generated:', records.length, 'rows');
    console.log('First row sample:', records[0]);
    return records;
  }, [rowCount, refreshKey]);

  // State to simulate loading - rowData will be null for 1 second, then becomes { records: [...] }
  const [rowData, setRowData] = useState<{ records: any[] | undefined } | null>({ records: undefined });
  const [gridLoadTime, setGridLoadTime] = useState<number | null>(null);

  // Handle manual refresh
  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    setRowData({ records: undefined });
    setGridLoadTime(null);
  };

  // Handle auto-refresh interval changes
  useEffect(() => {
    // Clear existing timer
    if (autoRefreshTimerRef.current) {
      clearInterval(autoRefreshTimerRef.current);
      autoRefreshTimerRef.current = null;
    }

    // Set up new timer if not 'off'
    if (autoRefreshInterval !== 'off') {
      const intervalMs = parseInt(autoRefreshInterval) * 1000;
      autoRefreshTimerRef.current = setInterval(() => {
        handleRefresh();
      }, intervalMs);
    }

    return () => {
      if (autoRefreshTimerRef.current) {
        clearInterval(autoRefreshTimerRef.current);
      }
    };
  }, [autoRefreshInterval]);

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

        {/* Slick Toolbar */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg shadow-lg p-6 mb-6 border border-slate-700">
          <div className="flex flex-col gap-6">
            {/* Slider Section */}
            <div className="flex items-center gap-4">
              <label className="text-slate-200 font-semibold min-w-[180px] text-sm">
                Rows: <span className="text-blue-400 font-bold text-lg">{rowCount.toLocaleString()}</span>
              </label>
              <Slider
                value={[rowCount]}
                onValueChange={(value) => setRowCount(value[0])}
                min={5000}
                max={60000}
                step={5000}
                className="flex-1"
              />
            </div>

            {/* Controls Section */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-700">
              <Button
                onClick={handleRefresh}
                variant="default"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-md"
              >
                <RotateCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>

              <div className="flex items-center gap-2">
                <label className="text-slate-200 text-sm font-medium">
                  Auto-refresh:
                </label>
                <Select value={autoRefreshInterval} onValueChange={setAutoRefreshInterval}>
                  <SelectTrigger className="w-[140px] bg-slate-800 border-slate-600 text-slate-200">
                    <SelectValue placeholder="Off" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600 text-slate-200">
                    <SelectItem value="off" className="text-slate-200 hover:bg-slate-700">Off</SelectItem>
                    <SelectItem value="5" className="text-slate-200 hover:bg-slate-700">5 seconds</SelectItem>
                    <SelectItem value="30" className="text-slate-200 hover:bg-slate-700">30 seconds</SelectItem>
                    <SelectItem value="60" className="text-slate-200 hover:bg-slate-700">1 minute</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status Indicator */}
              <div className="ml-auto flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${rowData?.records === undefined ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
                <span className="text-slate-300 text-sm">
                  {rowData?.records === undefined ? 'Loading...' : gridLoadTime !== null ? `Loaded in ${gridLoadTime}ms` : 'Ready'}
                </span>
              </div>
            </div>
          </div>
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
