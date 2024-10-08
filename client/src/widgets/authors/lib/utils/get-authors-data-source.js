import { getAuthors } from "../../api/get-authors";
import { formatAuthors } from "./format-authors";

const limit = 30;

export const getAuthorsDataSource = async(data)=>{
    return {
        rowCount: undefined,
        getRows: async (params) => {
          const currentPageNumber = Math.floor(params.endRow / limit);
          let lastRow = -1;
          let list = formatAuthors(data);
  
          if (currentPageNumber !== -1) {
            const nextPageData = await getAuthors(currentPageNumber);
  
            list = formatAuthors(nextPageData);
          }
          if (list?.length < limit) {
            lastRow = params?.startRow + list?.length;
          }
  
          list?.length ? params.successCallback(list, lastRow) : params.failCallback();
        },
      };
}