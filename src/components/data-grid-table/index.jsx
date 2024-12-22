import React, {useState, useEffect, useCallback} from 'react'

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
    DataGrid,
    gridClasses,
    GridToolbarExport,
    GridToolbarContainer,
    GridToolbarQuickFilter,
    GridToolbarFilterButton,
    GridToolbarColumnsButton,
} from '@mui/x-data-grid';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';

import {DataGridTableToolbar} from "./data-grid-toolbar"
import {DataGridTableFiltersResult} from "./data-grid-table-filter-result"

const HIDE_COLUMNS = { category: false };
const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

export function DataGridTable(props){
    const {columns, data, dataLoading, filters, mockOptions, publishOptions, showFilter=false, applyFilter } = props
    const confirmRows = useBoolean();

    const [tableData, setTableData] = useState([]);
    const [selectedRowIds, setSelectedRowIds] = useState([]);

    const [filterButtonEl, setFilterButtonEl] = useState(null);
  
    const [columnVisibilityModel, setColumnVisibilityModel] = useState(HIDE_COLUMNS);
  
    const dataFiltered = filters? applyFilter({ inputData: tableData, filters: filters ? filters.state : {} }) : tableData;
    const canReset = filters ? filters.state.publish.length > 0 || filters.state.stock.length > 0 : false;     
    const CustomToolbarCallback = useCallback(
        () => (
          <CustomToolbar
            filters={filters}
            canReset={canReset}
            selectedRowIds={selectedRowIds}
            setFilterButtonEl={setFilterButtonEl}
            filteredResults={dataFiltered.length}
            onOpenConfirmDeleteRows={confirmRows.onTrue}
            mockOptions={mockOptions}
            publishOptions={publishOptions}
            showFilter={showFilter}
          />
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [filters?.state, selectedRowIds]
      );
    const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);
    useEffect(() => {
    if (data.length) {
      setTableData(data);
    }
  }, [data]);

    return(
        <Card
          sx={{
            flexGrow: { md: 1 },
            display: { md: 'flex' },
            height: { xs: 800, md: 2 },
            flexDirection: { md: 'column' },
          }}
        >
          <DataGrid
            checkboxSelection
            disableRowSelectionOnClick
            rows={dataFiltered}
            columns={columns}
            loading={dataLoading}
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            onRowSelectionModelChange={(newSelectionModel) => setSelectedRowIds(newSelectionModel)}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            slots={{
              toolbar: CustomToolbarCallback,
              noRowsOverlay: () => <EmptyContent />,
              noResultsOverlay: () => <EmptyContent title="No results found" />,
            }}
            slotProps={{
              panel: { anchorEl: filterButtonEl },
              toolbar: { setFilterButtonEl },
              columnsManagement: { getTogglableColumns },
            }}
            sx={{ [`& .${gridClasses.cell}`]: { alignItems: 'center', display: 'inline-flex' } }}
          />
        </Card>
    )
}

function CustomToolbar({
    filters,
    canReset,
    selectedRowIds,
    filteredResults,
    setFilterButtonEl,
    onOpenConfirmDeleteRows,
    mockOptions,
    publishOptions,
    showFilter
  }) {
    return (
      <>
        <GridToolbarContainer>
        {showFilter && <DataGridTableToolbar
          filters={filters}
          options={{ stocks: mockOptions, publishs: publishOptions }}
        />}
        
          <GridToolbarQuickFilter />
  
          <Stack
            spacing={1}
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            {!!selectedRowIds.length && (
              <Button
                size="small"
                color="error"
                startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
                onClick={onOpenConfirmDeleteRows}
              >
                Delete ({selectedRowIds.length})
              </Button>
            )}
  
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton ref={setFilterButtonEl} />
            <GridToolbarExport />
          </Stack>
        </GridToolbarContainer>
  
        {canReset && (
          <DataGridTableFiltersResult
            filters={filters}
            totalResults={filteredResults}
            sx={{ p: 2.5, pt: 0 }}
          />
        )}
      </>
    );
  }
