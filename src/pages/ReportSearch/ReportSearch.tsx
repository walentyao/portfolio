import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { reportSearchResponse } from '@shared/mock/Violetta';
import cls from './ReportSearch.module.scss';

export const ReportSearch = () => {
  const linkBodyTemplate = (report: any) => {
    return (
      <a
        href={`${report.link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ссылка
      </a>
    );
  };

  return (
    <div className={cls.tableContainer}>
      <DataTable
        value={reportSearchResponse}
        tableStyle={{
          minWidth: '50rem',
        }}
      >
        <Column field="language" header="Язык"></Column>
        <Column field="numberPhrase" header="№"></Column>
        <Column field="phrase" header="Фраза"></Column>
        <Column
          field="search"
          header="Поисковая система"
        ></Column>
        <Column
          field="countDocuments"
          header="Документы 28.09.2024"
        ></Column>
        <Column
          header="Ссылки"
          field="link"
          body={linkBodyTemplate}
        >
          <></>
        </Column>
      </DataTable>
    </div>
  );
};

ReportSearch.displayName = 'ReportSearch';
