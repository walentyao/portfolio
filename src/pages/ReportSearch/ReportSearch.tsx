import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import cls from './ReportSearch.module.scss';
import { useContext } from 'react';
import { ContextUsername } from '@shared/context/username.context';
import { user } from '@shared/mock';

export const ReportSearch = () => {
  const username = useContext(ContextUsername);
  const { reportSearchResponse } = user[username];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
