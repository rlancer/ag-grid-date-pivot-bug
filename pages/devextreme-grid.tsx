import 'devextreme/dist/css/dx.light.css';
import { useMemo, useState, useEffect, useRef } from 'react';
import DataGrid, { Column, Grouping, GroupPanel, SearchPanel, FilterRow, HeaderFilter, Summary, TotalItem, Paging } from 'devextreme-react/data-grid';
import { generateBulkData } from '../src/dataGenerator';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RotateCw } from 'lucide-react';

export default function DevExtremeGrid() {
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

  // State to simulate loading
  const [rowData, setRowData] = useState<any[] | null>(null);
  const [gridLoadTime, setGridLoadTime] = useState<number | null>(null);

  // Handle manual refresh
  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    setRowData(null);
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
      setRowData(data);
      console.log('Data loaded after 1 second delay at:', dataLoadTimeRef.current);
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  const onContentReady = (e: any) => {
    if (dataLoadTimeRef.current && gridLoadTime === null && rowData) {
      const loadTime = Date.now() - dataLoadTimeRef.current;
      setGridLoadTime(loadTime);
      console.log('Grid content ready. Load time:', loadTime, 'ms');
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>DevExtreme DataGrid Performance Test - {rowCount.toLocaleString()} Rows</h1>

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
                <div className={`w-2 h-2 rounded-full ${rowData === null ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
                <span className="text-slate-300 text-sm">
                  {rowData === null ? 'Loading...' : gridLoadTime !== null ? `Loaded in ${gridLoadTime}ms` : 'Ready'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 'calc(100vh - 120px)', width: '100%' }}>
        <DataGrid
          dataSource={rowData || []}
          showBorders={true}
          columnAutoWidth={true}
          allowColumnReordering={true}
          allowColumnResizing={true}
          onContentReady={onContentReady}
          height="100%"
        >
          <GroupPanel visible={true} />
          <SearchPanel visible={true} />
          <Grouping autoExpandAll={false} />
          <FilterRow visible={true} />
          <HeaderFilter visible={true} />
          <Paging enabled={false} />

          <Column dataField="accrual_effect" caption="Accrual Effect" />
          <Column dataField="Book.Activity" caption="Activity" />
          <Column dataField="Product.adjusted_maturity_date" caption="Adjusted Maturity Date" />
          <Column dataField="Product.adjusted_premium" caption="Adjusted Premium" />
          <Column dataField="Product.bbg_ticker" caption="BBG Ticker" />
          <Column dataField="Book.BeginLivePricing" caption="BeginLivePricing" />
          <Column dataField="Product.security_cusip" caption="CUSIP" />
          <Column dataField="Book.Category" caption="Category" />
          <Column dataField="change_quote_close" caption="Change in Close Quote" />
          <Column dataField="change_nominal" caption="Change in Nominal" />
          <Column dataField="quote_close" caption="Close Quote" />
          <Column dataField="Book.Code" caption="Code" />
          <Column dataField="Product.executing_party" caption="Counter Party" />
          <Column dataField="Product.currency" caption="Currency" />
          <Column dataField="Book.DeltaHedgeFlag" caption="DeltaHedgeFlag" />
          <Column dataField="Book.DominantCountry" caption="Dominant Country" groupIndex={2} />
          <Column dataField="end_nominal" caption="End Nominal" />
          <Column dataField="end_price" caption="End Price" />
          <Column dataField="end_quantity" caption="End Quantity" />
          <Column dataField="end_quote" caption="End Quote" />
          <Column dataField="end_settlement_amount" caption="End Settlement Amount" />
          <Column dataField="Book.Entity" caption="Entity" />
          <Column dataField="Book.Fund" caption="Fund" />
          <Column dataField="fx_pl_effect" caption="FxPLEffect" />
          <Column dataField="fx_pl_effect_close" caption="FxPLEffect Close" />
          <Column dataField="Book.CountryRegion" caption="Geography" />
          <Column dataField="has_strategy_position_changes" caption="Has Position Changes" />
          <Column dataField="Product.security_isin" caption="ISIN" />
          <Column dataField="Product.index_family" caption="Index Family" />
          <Column dataField="Product.index_series" caption="Index Series" />
          <Column dataField="Product.index_tenor" caption="Index Tenor" />
          <Column dataField="life_cycle_pl" caption="Life Cycle Effect" />
          <Column dataField="Product.maturity_date" caption="Maturity Date" />
          <Column dataField="Book.Name" caption="Name" />
          <Column dataField="Book.OTLivePxable" caption="OTLivePxAble" />
          <Column dataField="Product.option_strike" caption="Option Strike" />
          <Column dataField="Product.option_type" caption="Option Type" />
          <Column dataField="pl_base_after_close" caption="PL Base After Close" />
          <Column dataField="pl_base_ccy" caption="PL Base Ccy" />
          <Column dataField="pl_base_close" caption="PL Base Close" />
          <Column dataField="pl_close" caption="PL Close" />
          <Column dataField="pl_base" caption="PL Daily" />
          <Column dataField="pl_latest" caption="PL Latest" />
          <Column dataField="Product.premium" caption="Premium" />
          <Column dataField="Product.premium_currency" caption="Premium Currency" />
          <Column dataField="Product.premium_date" caption="Premium Date" />
          <Column dataField="Product.processing_type" caption="Processing Type" />
          <Column dataField="prod_id" caption="Prod Id" />
          <Column dataField="Product.category" caption="Product Category" />
          <Column dataField="Product.product_type" caption="Product Type" />
          <Column dataField="Book.RecapGroup" caption="Recap Group" groupIndex={1} />
          <Column dataField="Book.ReportingGroup" caption="Reporting Group" />
          <Column dataField="Book.RiskPod" caption="Risk Pod" />
          <Column dataField="Product.security_default_ticker" caption="Security Default Ticker" />
          <Column dataField="start_nominal" caption="Start Nominal" />
          <Column dataField="start_price" caption="Start Price" />
          <Column dataField="start_quantity" caption="Start Quantity" />
          <Column dataField="start_quote" caption="Start Quote" />
          <Column dataField="Book.Strategy" caption="Strategy" groupIndex={3} />
          <Column dataField="trader" caption="Trader" groupIndex={0} />
          <Column dataField="Book.SubActivity" caption="SubActivity" />
          <Column dataField="Book.SubCategory" caption="SubCategory" />
          <Column dataField="Book.SubTheme" caption="SubTheme" />
          <Column dataField="Book.Theme" caption="Theme" />
          <Column dataField="Product.trade_date" caption="Trade Date" />
          <Column dataField="trade_id" caption="Trade Id" />
          <Column dataField="Product.trade_type" caption="Trade Type" />
          <Column dataField="Product.underlier_info" caption="Underlier Info" />
          <Column dataField="Book.UnderlyingCommodity" caption="Underlying Commodity" />

          <Summary>
            <TotalItem column="pl_base_after_close" summaryType="sum" />
            <TotalItem column="pl_base_ccy" summaryType="sum" />
            <TotalItem column="pl_base_close" summaryType="sum" />
            <TotalItem column="pl_close" summaryType="sum" />
            <TotalItem column="pl_base" summaryType="sum" />
            <TotalItem column="pl_latest" summaryType="sum" />
          </Summary>
        </DataGrid>
      </div>
    </div>
  );
}
