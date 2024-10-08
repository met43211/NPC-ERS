import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AuthorsTableField } from '../config/authors-table-fields';
import { useCallback } from 'react';
import { getAuthors } from '../api/get-authors';
import { getAuthorsDataSource } from '../lib/utils/get-authors-data-source';

export const Authors = () => {
  const onGridReady = useCallback(async (params) => {
    const data = await getAuthors(1);

    const dataSource = await getAuthorsDataSource(data);
    params.api.setGridOption('datasource', dataSource);
  }, []);

  return (
    <div className='w-full flex h-full rounded-2xl overflow-hidden'>
      <div className='ag-theme-material w-full h-full'>
        <AgGridReact
          columnDefs={AuthorsTableField}
          cacheBlockSize={30}
          rowModelType='infinite'
          onGridReady={onGridReady}
          defaultColDef={{ flex: 1, sortable: false }}
        />
      </div>
    </div>
  );
};
