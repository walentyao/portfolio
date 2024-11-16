import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const ReportSearch = () => {
  return (
    <DataTable
      value={[]}
      tableStyle={{ minWidth: '50rem' }}
    >
      <Column field="language" header="Язык"></Column>
      <Column field="phrase" header="Фраза"></Column>
      <Column
        field="search"
        header="Поисковая система"
      ></Column>
      <Column
        field="document"
        header="Документы 30.09.2024"
      ></Column>
      <Column field="link" header="Ссылки"></Column>
    </DataTable>
  );
};

ReportSearch.displayName = 'ReportSearch';
