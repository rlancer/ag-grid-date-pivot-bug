# AG Grid Column Defs 
[
    {
        "colId": "accrual_effect",
        "headerName": "Accrual Effect",
        "field": "accrual_effect",
        "type": [
            "Measure",
            "Round"
        ]
    },
    {
        "colId": "Book.Activity",
        "field": "Book.Activity",
        "headerName": "Activity",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "adjusted_maturity_date",
        "headerName": "Adjusted Maturity Date",
        "field": "Product.adjusted_maturity_date",
        "type": [
            "Dimension",
            "DateColumn"
        ]
    },
    {
        "colId": "adjusted_premium",
        "headerName": "Adjusted Premium",
        "field": "Product.adjusted_premium",
        "type": [
            "Measure",
            "Round"
        ]
    },
    {
        "colId": "bbg_ticker",
        "headerName": "BBG Ticker",
        "field": "Product.bbg_ticker",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.BeginLivePricing",
        "field": "Book.BeginLivePricing",
        "headerName": "BeginLivePricing",
        "type": [
            "Dimension",
            "TimeOnlyColumn"
        ]
    },
    {
        "colId": "security_cusip",
        "headerName": "CUSIP",
        "field": "Product.security_cusip",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.Category",
        "field": "Book.Category",
        "headerName": "Category",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "change_quote_close",
        "field": "change_quote_close",
        "headerName": "Change in Close Quote",
        "headerTooltip": "End Quote - Close Quote",
        "type": [
            "Measure",
            "Round"
        ],
        "valueFormatter": ""
    },
    {
        "colId": "change_nominal",
        "field": "change_nominal",
        "headerName": "Change in Nominal",
        "type": [
            "Measure",
            "DecimalVariable"
        ]
    },
    {
        "colId": "quote_close",
        "field": "quote_close",
        "headerName": "Close Quote",
        "type": [
            "Measure",
            "Round"
        ],
        "valueFormatter": ""
    },
    {
        "colId": "Book.Code",
        "field": "Book.Code",
        "headerName": "Code",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "executing_party",
        "headerName": "Counter Party",
        "field": "Product.executing_party",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "currency",
        "headerName": "Currency",
        "field": "Product.currency",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.DeltaHedgeFlag",
        "field": "Book.DeltaHedgeFlag",
        "headerName": "DeltaHedgeFlag",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "book_dominant_country",
        "headerName": "Dominant Country",
        "field": "Book.DominantCountry",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "end_nominal",
        "headerName": "End Nominal",
        "field": "end_nominal",
        "type": [
            "Measure",
            "DecimalVariable"
        ]
    },
    {
        "colId": "end_price",
        "headerName": "End Price",
        "field": "end_price",
        "type": [
            "Measure"
        ]
    },
    {
        "colId": "end_quantity",
        "headerName": "End Quantity",
        "field": "end_quantity",
        "type": [
            "Measure",
            "DecimalVariable"
        ]
    },
    {
        "colId": "end_quote",
        "field": "end_quote",
        "headerName": "End Quote",
        "type": [
            "Measure",
            "Round"
        ],
        "valueFormatter": ""
    },
    {
        "colId": "end_settlement_amount",
        "headerName": "End Settlement Amount",
        "field": "end_settlement_amount",
        "type": [
            "Measure",
            "Round"
        ]
    },
    {
        "colId": "Book.Entity",
        "field": "Book.Entity",
        "headerName": "Entity",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.Fund",
        "field": "Book.Fund",
        "headerName": "Fund",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "fx_pl_effect",
        "headerName": "FxPLEffect",
        "field": "fx_pl_effect",
        "type": [
            "Measure",
            "Round"
        ]
    },
    {
        "colId": "fx_pl_effect_close",
        "headerName": "FxPLEffect Close",
        "field": "fx_pl_effect_close",
        "type": [
            "Measure",
            "Round"
        ]
    },
    {
        "colId": "geo",
        "headerName": "Geography",
        "field": "Book.CountryRegion",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "has_strategy_position_changes",
        "headerName": "Has Position Changes",
        "field": "has_strategy_position_changes",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "security_isin",
        "headerName": "ISIN",
        "field": "Product.security_isin",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "index_family",
        "headerName": "Index Family",
        "field": "Product.index_family",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "index_series",
        "headerName": "Index Series",
        "field": "Product.index_series",
        "type": [
            "Measure"
        ]
    },
    {
        "colId": "index_tenor",
        "headerName": "Index Tenor",
        "field": "Product.index_tenor",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "life_cycle_pl",
        "headerName": "Life Cycle Effect",
        "field": "life_cycle_pl",
        "type": [
            "Measure",
            "Round"
        ]
    },
    {
        "colId": "maturity_date",
        "headerName": "Maturity Date",
        "field": "Product.maturity_date",
        "type": [
            "Dimension",
            "DateColumn"
        ]
    },
    {
        "colId": "Book.Name",
        "field": "Book.Name",
        "headerName": "Name",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "ot_live_pxable",
        "headerName": "OTLivePxAble",
        "field": "Book.OTLivePxable",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "option_strike",
        "headerName": "Option Strike",
        "field": "Product.option_strike",
        "type": [
            "Measure",
            "DecimalVariableFourDecimals"
        ]
    },
    {
        "colId": "option_type",
        "headerName": "Option Type",
        "field": "Product.option_type",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "pl_base_after_close",
        "headerName": "PL Base After Close",
        "field": "pl_base_after_close",
        "headerTooltip": "PL Base After Close = PL Daily - PL Base Close",
        "type": [
            "Measure",
            "Round",
            "InitWidthSmall"
        ]
    },
    {
        "colId": "pl_base_ccy",
        "headerName": "PL Base Ccy",
        "field": "pl_base_ccy",
        "type": [
            "Measure",
            "Round"
        ]
    },
    {
        "colId": "pl_base_close",
        "headerName": "PL Base Close",
        "field": "pl_base_close",
        "type": [
            "Measure",
            "Round",
            "InitWidthSmall"
        ]
    },
    {
        "colId": "pl_close",
        "headerName": "PL Close",
        "field": "pl_close",
        "type": [
            "Measure",
            "Round"
        ]
    },
    {
        "colId": "pl_base",
        "headerName": "PL Daily",
        "field": "pl_base",
        "type": [
            "Measure",
            "Round",
            "InitWidthSmall"
        ]
    },
    {
        "colId": "pl_latest",
        "headerName": "PL Latest",
        "field": "pl_latest",
        "headerTooltip": "PL Latest =  PL Base Close ||  PL Daily ||  0",
        "type": [
            "Measure",
            "Round",
            "InitWidthSmall"
        ]
    },
    {
        "colId": "premium",
        "headerName": "Premium",
        "field": "Product.premium",
        "type": [
            "Measure",
            "Round"
        ]
    },
    {
        "colId": "premium_currency",
        "headerName": "Premium Currency",
        "field": "Product.premium_currency",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "premium_date",
        "headerName": "Premium Date",
        "field": "Product.premium_date",
        "type": [
            "Dimension",
            "DateColumn"
        ]
    },
    {
        "colId": "processing_type",
        "headerName": "Processing Type",
        "field": "Product.processing_type",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "prod_id",
        "headerName": "Prod Id",
        "field": "prod_id",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "product_category",
        "headerName": "Product Category",
        "field": "Product.category",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "product_type",
        "headerName": "Product Type",
        "field": "Product.product_type",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "book_recap_group",
        "headerName": "Recap Group",
        "field": "Book.RecapGroup",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.ReportingGroup",
        "field": "Book.ReportingGroup",
        "headerName": "Reporting Group",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.RiskPod",
        "field": "Book.RiskPod",
        "headerName": "Risk Pod",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "security_default_ticker",
        "headerName": "Security Default Ticker",
        "field": "Product.security_default_ticker",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "start_nominal",
        "headerName": "Start Nominal",
        "field": "start_nominal",
        "type": [
            "Measure",
            "DecimalVariable"
        ]
    },
    {
        "colId": "start_price",
        "field": "start_price",
        "headerName": "Start Price",
        "type": [
            "Measure"
        ]
    },
    {
        "colId": "start_quantity",
        "headerName": "Start Quantity",
        "field": "start_quantity",
        "type": [
            "Measure",
            "DecimalVariable"
        ]
    },
    {
        "colId": "start_quote",
        "field": "start_quote",
        "headerName": "Start Quote",
        "type": [
            "Measure",
            "Round"
        ],
        "valueFormatter": ""
    },
    {
        "colId": "book_strategy",
        "headerName": "Strategy",
        "filter": {},
        "field": "Book.Strategy",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.SubActivity",
        "field": "Book.SubActivity",
        "headerName": "SubActivity",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.SubCategory",
        "field": "Book.SubCategory",
        "headerName": "SubCategory",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.SubTheme",
        "field": "Book.SubTheme",
        "headerName": "SubTheme",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.Theme",
        "field": "Book.Theme",
        "headerName": "Theme",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "trade_date",
        "headerName": "Trade Date",
        "field": "Product.trade_date",
        "type": [
            "Dimension",
            "DateColumn"
        ]
    },
    {
        "colId": "trade_id",
        "headerName": "Trade Id",
        "field": "trade_id",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "trade_type",
        "headerName": "Trade Type",
        "field": "Product.trade_type",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "book_trader",
        "headerName": "Trader",
        "field": "trader",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "underlier_info",
        "headerName": "Underlier Info",
        "field": "Product.underlier_info",
        "type": [
            "Dimension"
        ]
    },
    {
        "colId": "Book.UnderlyingCommodity",
        "field": "Book.UnderlyingCommodity",
        "headerName": "Underlying Commodity",
        "type": [
            "Dimension"
        ]
    },
    {
        "headerName": "Garda",
        "children": [
            {
                "colId": "change_gcp_base_bpv",
                "headerName": "Change GCP Base BPV",
                "field": "change_gcp_base_bpv",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthSmall"
                ]
            },
            {
                "colId": "gcp_base_bpv",
                "headerName": "GCP Base BPV",
                "field": "gcp_base_bpv",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthSmall"
                ]
            },
            {
                "colId": "gcp_desk_product_ref",
                "headerName": "GCP Desk Product Ref",
                "field": "Product.gcp_desk_product_ref",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "gcp_risk_description",
                "headerName": "GCP Risk Desc",
                "field": "Product.gcp_risk_description",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "gcp_start_yield",
                "headerName": "GCP Start Yield",
                "field": "gcp_start_yield",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "gcp_tenor",
                "headerName": "GCP Tenor",
                "field": "Product.gcp_tenor",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "gcp_is_externally_priced",
                "headerName": "GcpIsExternallyPriced",
                "field": "gcp_is_externally_priced",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "start_gcp_base_bpv",
                "headerName": "Start GCP Base BPV",
                "field": "start_gcp_base_bpv",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthSmall"
                ]
            },
            {
                "colId": "gcp_base_balance_sheet",
                "headerName": "gcpBaseBalanceSheet",
                "field": "gcp_base_balance_sheet",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_basis_01",
                "headerName": "gcpBaseBasis01",
                "field": "gcp_base_basis_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_discount_01",
                "headerName": "gcpBaseDiscount01",
                "field": "gcp_base_discount_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_fx_delta",
                "headerName": "gcpBaseFXDelta",
                "field": "gcp_base_fx_delta",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_fixing_01",
                "headerName": "gcpBaseFixing01",
                "field": "gcp_base_fixing_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_float_01",
                "headerName": "gcpBaseFloat01",
                "field": "gcp_base_float_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_funding_01",
                "headerName": "gcpBaseFunding01",
                "field": "gcp_base_funding_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_future_repo_01",
                "headerName": "gcpBaseFutureRepo01",
                "field": "gcp_base_future_repo_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_future_spot_01",
                "headerName": "gcpBaseFutureSpot01",
                "field": "gcp_base_future_spot_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_future_spot_01_fixed_irr",
                "headerName": "gcpBaseFutureSpot01FixedIrr",
                "field": "gcp_base_future_spot_01_fixed_irr",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_base_implied_repo_pnl",
                "headerName": "gcpBaseImpliedRepoPnl",
                "field": "gcp_base_implied_repo_pnl",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_maturity_01",
                "headerName": "gcpBaseMaturity01",
                "field": "gcp_base_maturity_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_maturity_01_fixed_irr",
                "headerName": "gcpBaseMaturity01FixedIrr",
                "field": "gcp_base_maturity_01_fixed_irr",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_base_maturity_01_fixed_irr_ctd",
                "headerName": "gcpBaseMaturity01FixedIrrCtD",
                "field": "gcp_base_maturity_01_fixed_irr_ctd",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_base_par_coupon_01",
                "headerName": "gcpBaseParCoupon01",
                "field": "gcp_base_par_coupon_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_repo_01",
                "headerName": "gcpBaseRepo01",
                "field": "gcp_base_repo_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_simple_yield_01",
                "headerName": "gcpBaseSimpleYield01",
                "field": "gcp_base_simple_yield_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_base_swap_funding_01",
                "headerName": "gcpBaseSwapFunding01",
                "field": "gcp_base_swap_funding_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "change_gcp_base_funding_01",
                "headerName": "gcpChangeBaseFunding01",
                "field": "change_gcp_base_funding_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "change_gcp_base_maturity_01",
                "headerName": "gcpChangeBaseMaturity01",
                "field": "change_gcp_base_maturity_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "change_gcp_base_maturity_01_fixed_irr",
                "headerName": "gcpChangeBaseMaturity01FixedIrr",
                "field": "change_gcp_base_maturity_01_fixed_irr",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_gcp_funding_01",
                "headerName": "gcpChangeFunding01",
                "field": "change_gcp_funding_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "change_gcp_maturity_01",
                "headerName": "gcpChangeMaturity01",
                "field": "change_gcp_maturity_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_cmdty_fut_01",
                "headerName": "gcpCmdtyFut01",
                "field": "gcp_cmdty_fut_01",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_convexity_effect",
                "headerName": "gcpConvexityEffect",
                "field": "gcp_convexity_effect",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_end_clean_price",
                "headerName": "gcpEndCleanPrice",
                "field": "gcp_end_clean_price",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_implied_repo",
                "headerName": "gcpEndImpliedRepo",
                "field": "gcp_end_implied_repo",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_inv_spread_bps",
                "headerName": "gcpEndInvSpreadBps",
                "field": "gcp_end_inv_spread_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_ois_inv_spread_bps",
                "headerName": "gcpEndOisInvSpreadBps",
                "field": "gcp_end_ois_inv_spread_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_ois_par_rate_at_spot",
                "headerName": "gcpEndOisParRateAtSpot",
                "field": "gcp_end_ois_par_rate_at_spot",
                "type": [
                    "Measure",
                    "DecimalPercentage",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_ois_spread_to_par_bps",
                "headerName": "gcpEndOisSpreadToParBps",
                "field": "gcp_end_ois_spread_to_par_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_par_rate_at_spot",
                "headerName": "gcpEndParRateAtSpot",
                "field": "gcp_end_par_rate_at_spot",
                "type": [
                    "Measure",
                    "DecimalPercentage",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_quote_ticks",
                "headerName": "gcpEndQuoteTicks",
                "field": "gcp_end_quote_ticks",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "gcp_end_sofr_inv_spread_bps",
                "headerName": "gcpEndSofrInvSpreadBps",
                "field": "gcp_end_sofr_inv_spread_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_sofr_par_rate_at_spot",
                "headerName": "gcpEndSofrParRateAtSpot",
                "field": "gcp_end_sofr_par_rate_at_spot",
                "type": [
                    "Measure",
                    "DecimalPercentage",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_sofr_spread_to_par_bps",
                "headerName": "gcpEndSofrSpreadToParBps",
                "field": "gcp_end_sofr_spread_to_par_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_end_spread_to_par_bps",
                "headerName": "gcpEndSpreadToParBps",
                "field": "gcp_end_spread_to_par_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_exercise_settlement_type",
                "headerName": "gcpExerciseSettlementType",
                "field": "Product.gcp_exercise_settlement_type",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "gcp_funding_01",
                "headerName": "gcpFunding01",
                "field": "gcp_funding_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_future_spot_01_fixed_irr",
                "headerName": "gcpFutureSpot01FixedIrr",
                "field": "gcp_future_spot_01_fixed_irr",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_fx_delta",
                "headerName": "gcpFxDelta",
                "field": "gcp_fx_delta",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_fx_fixing",
                "headerName": "gcpFxFixing",
                "field": "Product.gcp_fx_fixing",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "gcp_fx_spot_rate",
                "headerName": "gcpFxSpotRate",
                "field": "gcp_fx_spot_rate",
                "type": [
                    "Measure",
                    "Decimal"
                ]
            },
            {
                "colId": "gcp_gross_balance_sheet",
                "headerName": "gcpGrossBalanceSheet",
                "field": "gcp_gross_balance_sheet",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_implied_repo_change_bps",
                "headerName": "gcpImpliedRepoChangeBps",
                "field": "gcp_implied_repo_change_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_inv_spread_change_bps",
                "headerName": "gcpInvSpreadChangeBps",
                "field": "gcp_inv_spread_change_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_maturity_01",
                "headerName": "gcpMaturity01",
                "field": "gcp_maturity_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_maturity_01_fixed_irr",
                "headerName": "gcpMaturity01FixedIrr",
                "field": "gcp_maturity_01_fixed_irr",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_maturity_01_fixed_irr_ctd",
                "headerName": "gcpMaturity01FixedIrrCtD",
                "field": "gcp_maturity_01_fixed_irr_ctd",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_new_trade_pl_base",
                "headerName": "gcpNewTradePlBase",
                "field": "gcp_new_trade_pl_base",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_new_trade_pl_base_close",
                "headerName": "gcpNewTradePlBaseClose",
                "field": "gcp_new_trade_pl_base_close",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_ois_inv_spread_change_bps",
                "headerName": "gcpOisInvSpreadChangeBps",
                "field": "gcp_ois_inv_spread_change_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_ois_spread_change_bps",
                "headerName": "gcpOisSpreadChangeBps",
                "field": "gcp_ois_spread_change_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_premium_style",
                "headerName": "gcpPremiumStyle",
                "field": "Product.gcp_premium_style",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "gcp_sofr_inv_spread_change_bps",
                "headerName": "gcpSofrInvSpreadChangeBps",
                "field": "gcp_sofr_inv_spread_change_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_sofr_spread_change_bps",
                "headerName": "gcpSofrSpreadChangeBps",
                "field": "gcp_sofr_spread_change_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_spread_change_bps",
                "headerName": "gcpSpreadChangeBps",
                "field": "gcp_spread_change_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "start_gcp_base_funding_01",
                "headerName": "gcpStartBaseFunding01",
                "field": "start_gcp_base_funding_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "start_gcp_base_maturity_01",
                "headerName": "gcpStartBaseMaturity01",
                "field": "start_gcp_base_maturity_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "start_gcp_base_maturity_01_fixed_irr",
                "headerName": "gcpStartBaseMaturity01FixedIrr",
                "field": "start_gcp_base_maturity_01_fixed_irr",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "gcp_start_base_pv",
                "headerName": "gcpStartBasePv",
                "field": "gcp_start_base_pv",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_clean_price",
                "headerName": "gcpStartCleanPrice",
                "field": "gcp_start_clean_price",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "start_gcp_funding_01",
                "headerName": "gcpStartFunding01",
                "field": "start_gcp_funding_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_implied_repo",
                "headerName": "gcpStartImpliedRepo",
                "field": "gcp_start_implied_repo",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_inv_spread_bps",
                "headerName": "gcpStartInvSpreadBps",
                "field": "gcp_start_inv_spread_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "start_gcp_maturity_01",
                "headerName": "gcpStartMaturity01",
                "field": "start_gcp_maturity_01",
                "type": [
                    "Measure",
                    "Round",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_ois_inv_spread_bps",
                "headerName": "gcpStartOisInvSpreadBps",
                "field": "gcp_start_ois_inv_spread_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_ois_par_rate_at_spot",
                "headerName": "gcpStartOisParRateAtSpot",
                "field": "gcp_start_ois_par_rate_at_spot",
                "type": [
                    "Measure",
                    "DecimalPercentage",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_ois_spread_to_par_bps",
                "headerName": "gcpStartOisSpreadToParBps",
                "field": "gcp_start_ois_spread_to_par_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_par_rate_at_spot",
                "headerName": "gcpStartParRateAtSpot",
                "field": "gcp_start_par_rate_at_spot",
                "type": [
                    "Measure",
                    "DecimalPercentage",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_quote_ticks",
                "headerName": "gcpStartQuoteTicks",
                "field": "gcp_start_quote_ticks",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "gcp_start_sofr_inv_spread_bps",
                "headerName": "gcpStartSofrInvSpreadBps",
                "field": "gcp_start_sofr_inv_spread_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_sofr_par_rate_at_spot",
                "headerName": "gcpStartSofrParRateAtSpot",
                "field": "gcp_start_sofr_par_rate_at_spot",
                "type": [
                    "Measure",
                    "DecimalPercentage",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_sofr_spread_to_par_bps",
                "headerName": "gcpStartSofrSpreadToParBps",
                "field": "gcp_start_sofr_spread_to_par_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_start_spread_to_par_bps",
                "headerName": "gcpStartSpreadToParBps",
                "field": "gcp_start_spread_to_par_bps",
                "type": [
                    "Measure",
                    "Decimal",
                    "InitWidthMedium"
                ]
            },
            {
                "colId": "gcp_yield_change_bps",
                "headerName": "gcpYieldChangeBps",
                "field": "gcp_yield_change_bps",
                "type": [
                    "Measure",
                    "DecimalVariableFiveDecimals",
                    "InitWidthMedium",
                    "NonAggregated"
                ]
            }
        ]
    },
    {
        "headerName": "Risk",
        "children": [
            {
                "colId": "risk_base_atm_vol",
                "headerName": "Atm Vol Base",
                "field": "risk_base_atm_vol",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "risk_atm_vol",
                "headerName": "Atm Vol Local",
                "field": "risk_atm_vol",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "risk_base_pv_close",
                "headerName": "Base Close PV",
                "field": "risk_base_pv_close",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_ir_volga",
                "headerName": "Base IR Volga",
                "field": "risk_base_ir_volga",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_pv",
                "headerName": "Base PV",
                "field": "risk_base_pv",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_bp01",
                "headerName": "Bp01",
                "field": "risk_base_bp01",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_break_even_rate",
                "headerName": "Break Even Rate",
                "field": "risk_break_even_rate",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "risk_break_even_spread",
                "headerName": "Break Even Spread",
                "field": "risk_break_even_spread",
                "type": [
                    "Measure",
                    "Decimal"
                ]
            },
            {
                "colId": "risk_base_co_delta",
                "headerName": "CO Delta",
                "field": "risk_base_co_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_co_gamma",
                "headerName": "CO Gamma",
                "field": "risk_base_co_gamma",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_co_vega",
                "headerName": "CO Vega",
                "field": "risk_base_co_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_cr_delta",
                "headerName": "CR Delta Base",
                "field": "risk_base_cr_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_cr_delta",
                "headerName": "CR Delta Local",
                "field": "risk_cr_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_cr_gamma",
                "headerName": "CR Gamma Base",
                "field": "risk_base_cr_gamma",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_cr_vanna",
                "headerName": "CR Vanna Base",
                "field": "risk_base_cr_vanna",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_cr_vega",
                "headerName": "CR Vega Base",
                "field": "risk_base_cr_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_cr_volga",
                "headerName": "CR Volga Base",
                "field": "risk_base_cr_volga",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_carry",
                "headerName": "Carry",
                "field": "risk_carry",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_carry",
                "headerName": "Carry Base",
                "field": "risk_base_carry",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_cr_delta",
                "headerName": "Change CR Delta Base",
                "field": "change_risk_base_cr_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_cr_gamma",
                "headerName": "Change CR Gamma Base",
                "field": "change_risk_base_cr_gamma",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_cr_vanna",
                "headerName": "Change CR Vanna Base",
                "field": "change_risk_base_cr_vanna",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_cr_vega",
                "headerName": "Change CR Vega Base",
                "field": "change_risk_base_cr_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_cr_volga",
                "headerName": "Change CR Volga Base",
                "field": "change_risk_base_cr_volga",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_co_delta",
                "headerName": "Change Co Delta",
                "field": "change_risk_base_co_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_co_gamma",
                "headerName": "Change Co Gamma",
                "field": "change_risk_base_co_gamma",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_co_vega",
                "headerName": "Change Co Vega",
                "field": "change_risk_base_co_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_fx_delta",
                "headerName": "Change FX Delta Base",
                "field": "change_risk_base_fx_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_fx_delta_skew",
                "headerName": "Change FX Delta Skew Base",
                "field": "change_risk_base_fx_delta_skew",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_fx_delta_skew_prem",
                "headerName": "Change FX Delta Skew Prem Base",
                "field": "change_risk_base_fx_delta_skew_prem",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_fx_gamma",
                "headerName": "Change FX Gamma",
                "field": "change_risk_base_fx_gamma",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_fx_vega",
                "headerName": "Change FX Vega",
                "field": "change_risk_base_fx_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_implied_vol",
                "headerName": "Change Implied Vol",
                "field": "change_risk_implied_vol",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "change_risk_base_inf_delta",
                "headerName": "Change Inf Delta",
                "field": "change_risk_base_inf_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_bp01",
                "headerName": "Change in Bp01",
                "field": "change_risk_base_bp01",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_ir_delta",
                "headerName": "Change in IR Delta Base",
                "field": "change_risk_base_ir_delta",
                "type": [
                    "Measure",
                    "Round"
                ],
                "initialWidth": 120
            },
            {
                "colId": "risk_base_yield_change",
                "headerName": "Change in Yield",
                "field": "risk_base_yield_change",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "risk_base_clean_market_value",
                "headerName": "Clean Market Value",
                "field": "risk_base_clean_market_value",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_clean_price",
                "headerName": "Clean Price",
                "field": "risk_clean_price",
                "type": [
                    "Measure",
                    "Decimal"
                ]
            },
            {
                "colId": "risk_pv_close",
                "headerName": "Close PV",
                "field": "risk_pv_close",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_cor_delta",
                "headerName": "Correlation Delta Base",
                "field": "risk_base_cor_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_delta",
                "headerName": "Delta Base",
                "field": "risk_base_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_delta",
                "headerName": "Delta Local",
                "field": "risk_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_delta_lot",
                "headerName": "Delta Lot",
                "field": "risk_base_delta_lot",
                "type": [
                    "Measure",
                    "DecimalVariable",
                    "NonAggregated"
                ]
            },
            {
                "colId": "risk_base_delta_ratio",
                "headerName": "Delta Ratio",
                "field": "risk_base_delta_ratio",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "risk_base_delta_underlier",
                "headerName": "Delta Underlier",
                "field": "risk_base_delta_underlier",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_eq_delta",
                "headerName": "EQ Delta",
                "field": "risk_base_eq_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_eq_gamma",
                "headerName": "EQ Gamma",
                "field": "risk_base_eq_gamma",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_eq_vega",
                "headerName": "EQ Vega",
                "field": "risk_base_eq_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_eq_vol_index_vega",
                "headerName": "EQ Vol Index Vega",
                "field": "risk_base_eq_vol_index_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_eq_vol_index_volga",
                "headerName": "EQ Vol Index Volga",
                "field": "risk_base_eq_vol_index_volga",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_implied_vol",
                "headerName": "End Implied Vol",
                "field": "risk_implied_vol",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "risk_fwd_price",
                "headerName": "Fwd Price",
                "field": "risk_fwd_price",
                "type": [
                    "Measure",
                    "Decimal"
                ]
            },
            {
                "colId": "risk_base_fx_delta",
                "headerName": "Fx Delta Base",
                "field": "risk_base_fx_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_fx_delta_skew",
                "headerName": "Fx Delta Skew Base",
                "field": "risk_base_fx_delta_skew",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_fx_delta_skew_prem",
                "headerName": "Fx Delta Skew Prem Base",
                "field": "risk_base_fx_delta_skew_prem",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_fx_gamma",
                "headerName": "Fx Gamma",
                "field": "risk_base_fx_gamma",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_fx_vega",
                "headerName": "Fx Vega",
                "field": "risk_base_fx_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_ir_delta",
                "headerName": "IR Delta Base",
                "field": "risk_base_ir_delta",
                "type": [
                    "Measure",
                    "Round"
                ],
                "initialWidth": 120
            },
            {
                "colId": "risk_base_ir_delta_flat_vol",
                "headerName": "IR Delta Flat Vol Base",
                "field": "risk_base_ir_delta_flat_vol",
                "type": [
                    "Measure",
                    "Round"
                ],
                "initialWidth": 120
            },
            {
                "colId": "risk_ir_delta_flat_vol",
                "headerName": "IR Delta Flat Vol Local",
                "field": "risk_ir_delta_flat_vol",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_ir_delta",
                "headerName": "IR Delta Local",
                "field": "risk_ir_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_ir_gamma",
                "headerName": "IR Gamma",
                "field": "risk_base_ir_gamma",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_ir_vega",
                "headerName": "IR Vega",
                "field": "risk_base_ir_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_inf_delta",
                "headerName": "Inf Delta",
                "field": "risk_base_inf_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "change_risk_base_ir_vega",
                "headerName": "Ir Vega Change",
                "field": "change_risk_base_ir_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "jump_to_rec",
                "headerName": "Jump To Rec",
                "field": "jump_to_rec",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "jump_to_zero",
                "headerName": "Jump To Zero",
                "field": "jump_to_zero",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_market_value",
                "headerName": "Market Value",
                "field": "risk_base_market_value",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_pv",
                "headerName": "PV",
                "field": "risk_pv",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_price",
                "headerName": "Price",
                "field": "risk_price",
                "type": [
                    "Measure",
                    "Decimal"
                ]
            },
            {
                "colId": "risk_realized_vol",
                "headerName": "Realized Vol",
                "field": "risk_realized_vol",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "risk_base_cash",
                "headerName": "Risk Base Cash",
                "field": "risk_base_cash",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_smile_vol",
                "headerName": "Smile Vol Base",
                "field": "risk_base_smile_vol",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "risk_smile_vol",
                "headerName": "Smile Vol Local",
                "field": "risk_smile_vol",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "start_risk_base_bp01",
                "headerName": "Start Bp01",
                "field": "start_risk_base_bp01",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "start_risk_base_co_delta",
                "headerName": "Start CO Delta",
                "field": "start_risk_base_co_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "start_risk_base_co_gamma",
                "headerName": "Start CO Gamma",
                "field": "start_risk_base_co_gamma",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "start_risk_base_co_vega",
                "headerName": "Start CO Vega",
                "field": "start_risk_base_co_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "start_risk_base_ir_delta",
                "headerName": "Start IR Delta Base",
                "field": "start_risk_base_ir_delta",
                "type": [
                    "Measure",
                    "Round"
                ],
                "initialWidth": 120
            },
            {
                "colId": "start_risk_implied_vol",
                "headerName": "Start Implied Vol",
                "field": "start_risk_implied_vol",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "start_risk_base_inf_delta",
                "headerName": "Start Inf Delta",
                "field": "start_risk_base_inf_delta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "start_risk_base_ir_vega",
                "headerName": "Start Ir Vega",
                "field": "start_risk_base_ir_vega",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_theta",
                "headerName": "Theta",
                "field": "risk_base_theta",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_theta_1_d",
                "headerName": "Theta1D",
                "field": "risk_theta_1_d",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "risk_base_theta_1_d",
                "headerName": "Theta1D Base",
                "field": "risk_base_theta_1_d",
                "type": [
                    "Measure",
                    "Round"
                ]
            },
            {
                "colId": "underlier_default_ticker",
                "headerName": "Underlier Default Ticker",
                "field": "Product.underlier_default_ticker",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "risk_underlier_price",
                "headerName": "Underlier Price",
                "field": "risk_underlier_price",
                "type": [
                    "Measure",
                    "Decimal"
                ]
            },
            {
                "colId": "risk_base_yield",
                "headerName": "Yield",
                "field": "risk_base_yield",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            },
            {
                "colId": "risk_base_yield_close",
                "headerName": "Yield Close",
                "field": "risk_base_yield_close",
                "type": [
                    "Measure",
                    "DecimalPercentage"
                ]
            }
        ]
    },
    {
        "headerName": "Structures",
        "children": [
            {
                "colId": "structure_assigned",
                "headerName": "Structure Assigned",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "structure_description",
                "headerName": "Structure Description",
                "field": "Structure.Description",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "structure_expression",
                "headerName": "Structure Expression",
                "field": "Structure.Expression",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "trade_structure",
                "headerName": "Structure Name",
                "field": "Structure.Name",
                "type": [
                    "Dimension"
                ]
            },
            {
                "colId": "structure_theme",
                "headerName": "Structure Theme",
                "field": "Structure.Theme",
                "type": [
                    "Dimension"
                ]
            }
        ]
    },
    {
        "headerName": "Trader",
        "children": [
            {
                "colId": "trader_is_active",
                "headerName": "Trader Active",
                "field": "Trader.is_active",
                "hide": true
            },
            {
                "colId": "trader_vertical",
                "headerName": "Vertical",
                "field": "Trader.vertical",
                "type": [
                    "Dimension"
                ],
                "initialWidth": 120
            }
        ]
    }
]

# Column Types

export const columnTypes: TempoColumnTypes = {
  Dimension: {
    // filter: "agSetColumnFilter",default with ag grid enterprise
    cellRenderer: HighlightFilterCell,
    hide: true,
    getQuickFilterText: applyDefaultQuickFilter,
  },
  Measure: {
    headerClass: "ag-right-aligned-header",
    cellClass: "ag-right-aligned-cell",
    cellClassRules: cellCssStylesNumbers,
    enableValue: true,
    hide: true,
    filter: "agNumberColumnFilter",
    allowedAggFuncs: ["avg", "count", "first", "last", "min", "sum", "sum10"],
    getQuickFilterText: () => "",
  },
  MarketData: {
    // enableRowGroup: true,
    cellClassRules: null,
    hide: false,
  },
  Round: {
    valueFormatter: rndsumzero,
    valueGetter: (cell: ValueGetterParams) => {
      // set value to what rndsumzero is displaying
      // This helps with filtering values with integers as they appear in the grid
      const val = getValueUsingField(cell.data, cell.colDef.field, true);
      if (!val && val !== 0) return null;
      return Math.round(val);
    },
  },
  Decimal: {
    valueFormatter: (cell: ValueFormatterParams) => toDecimal(cell.value, 3),
  },
  DecimalVariable: {
    valueFormatter: (cell: ValueFormatterParams) =>
      toDecimalVariable(cell.value, 3),
  },
  DecimalVariableFourDecimals: {
    valueFormatter: (cell: ValueFormatterParams) =>
      toDecimalVariable(cell.value, 4),
  },
  DecimalVariableFiveDecimals: {
    valueFormatter: (cell: ValueFormatterParams) =>
      toDecimalVariable(cell.value, 5),
  },
  DecimalPercentage: {
    valueFormatter: (cell: ValueFormatterParams) => {
      return toDecimalPercentage(cell.value, 3);
    },
  },
  DateColumn: {
    filter: "agDateColumnFilter",
    comparator: dateComparator,
    getQuickFilterText: (cell: GetQuickFilterTextParams) => {
      return cell.value ? toYYYY_MM_DD(cell.value) : null;
    },
    valueFormatter: (cell: ValueFormatterParams) => {
      return cell.value ? toYYYY_MM_DD(cell.value) : "";
    },
    valueGetter: (cell: ValueGetterParams) => {
      //adding this because there is issue with the leaf node displayed as linux date when date is last in grouping.
      const value: Date | number = getValueUsingField(
        cell.data,
        cell.colDef.field,
        true
      );

      const dte = getDateValue(value);

      if (!dte) {
        return null;
      }

      // Convert UTC date at midnight to local date at midnight
      return new Date(
        dte.getUTCFullYear(),
        dte.getUTCMonth(),
        dte.getUTCDate()
      );
    },
    cellRenderer: null,
  },
  TimeOnlyColumn: {
    comparator: dateComparator,
    getQuickFilterText: (cell: GetQuickFilterTextParams) => {
      return cell.value ? cell.value.toTimeString() : "";
    },
    valueFormatter: (cell: ValueFormatterParams) => {
      return cell.value ? cell.value.toTimeString() : "";
    },
    valueGetter: (cell: ValueGetterParams) => {
      //adding this because there is issue with the leaf node displayed as linux date when date is last in grouping.
      const value = getValueUsingField(cell.data, cell.colDef.field, true);
      return getDateValue(value);
    },
    cellRenderer: null,
  },
  ChartTypeCategory: {
    chartDataType: "category",
  },
  ChartTypeSeries: {
    chartDataType: "series",
  },

  InitWidthMedium: {
    initialWidth: 160,
  },
  InitWidthSmall: {
    initialWidth: 120,
  },
  NonAggregated: {
    allowedAggFuncs: ["noAgg"],
    defaultAggFunc: "noAgg",
  },
};