import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useCallback } from 'react';
import { BooksTableField } from '../config/books-table-fields';
import { getBooks } from '../api/get-books';
import { getBooksDataSource } from '../lib/utils/get-books-data-source';

export const BooksTable = ({ setPickedBook }) => {
  const onGridReady = useCallback(async (params) => {
    const data = await getBooks(1);

    const dataSource = await getBooksDataSource(data);
    params.api.setGridOption('datasource', dataSource);
  }, []);

  const onSelectionChanged = (event) => {
    const selectedNodes = event.api.getSelectedNodes();
    setPickedBook(selectedNodes.length > 0 ? selectedNodes[0].data : null);
  };

  return (
    <div className='w-full flex h-full rounded-2xl overflow-hidden'>
      <div className='ag-theme-material w-full h-full'>
        <AgGridReact
          columnDefs={BooksTableField}
          cacheBlockSize={30}
          rowModelType='infinite'
          onGridReady={onGridReady}
          defaultColDef={{ flex: 1, sortable: false }}
          onSelectionChanged={onSelectionChanged}
          rowSelection='single'
        />
      </div>
    </div>
  );
};
