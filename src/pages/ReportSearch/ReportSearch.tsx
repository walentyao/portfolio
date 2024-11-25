import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import cls from './ReportSearch.module.scss';
import { useContext } from 'react';
import { ContextUsername } from '@shared/context/username.context';
import { user } from '@shared/mock';
import { useParams } from 'react-router-dom';

export const ReportSearch = () => {
  const { lg } = useParams();
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
      <h3 className={cls.titleTable}>
        {lg === 'ru' ? 'На русском языке' : 'In Russian'}
      </h3>
      <DataTable
        value={reportSearchResponse.filter(
          item => item.language === 'ru',
        )}
        tableStyle={{
          minWidth: '50rem',
        }}
      >
        <Column field="numberPhrase" header="№"></Column>
        <Column
          field="phrase"
          header={lg === 'ru' ? 'Фраза' : 'Phrase'}
        ></Column>
        <Column
          field="search"
          header={
            lg === 'ru'
              ? 'Поисковая система'
              : 'Search engine'
          }
        ></Column>
        <Column
          field="countDocuments"
          header={
            lg === 'ru'
              ? 'Документы 28.09.2024'
              : 'Documents 28.09.2024'
          }
        ></Column>
        <Column
          header={lg === 'ru' ? 'Ссылки' : 'Links'}
          field="link"
          body={linkBodyTemplate}
        >
          <></>
        </Column>
      </DataTable>
      <h3 className={cls.titleTable}>
        {lg === 'ru' ? 'На английском языке' : 'In English'}
      </h3>
      <DataTable
        value={reportSearchResponse.filter(
          item => item.language === 'eng',
        )}
        tableStyle={{
          minWidth: '50rem',
        }}
      >
        <Column field="numberPhrase" header="№"></Column>
        <Column
          field="phrase"
          header={lg === 'ru' ? 'Фраза' : 'Phrase'}
        ></Column>
        <Column
          field="search"
          header={
            lg === 'ru'
              ? 'Поисковая система'
              : 'Search engine'
          }
        ></Column>
        <Column
          field="countDocuments"
          header={
            lg === 'ru'
              ? 'Документы 28.09.2024'
              : 'Documents 28.09.2024'
          }
        ></Column>
        <Column
          header={lg === 'ru' ? 'Ссылки' : 'Links'}
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
