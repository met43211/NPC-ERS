import { getBooks } from "../../api/get-books";

const limit = 30;

export const getBooksDataSource = async(data)=>{
    return {
        rowCount: undefined,
        getRows: async (params) => {
          const currentPageNumber = Math.floor(params.endRow / limit);
          let lastRow = -1;
          let list = data
  
          if (currentPageNumber !== -1) {
            const nextPageData = await getBooks(currentPageNumber);
  
            list = nextPageData
          }
          if (list?.length < limit) {
            lastRow = params?.startRow + list?.length;
          }
  
          list?.length ? params.successCallback(list, lastRow) : params.failCallback();
        },
      };
}