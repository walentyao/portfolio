import { useLanguageData } from '@shared/hooks/useLanguageData';
import cls from './Referat.module.scss';
import {
  Accordion,
  AccordionTab,
} from 'primereact/accordion';

export const Referat = () => {
  const { referatResponse } = useLanguageData();
  return (
    <section aria-label="referat" className={cls.biography}>
      <Accordion multiple activeIndex={[0]}>
        {referatResponse.map((article, index) => (
          <AccordionTab key={index} header={article.title}>
            <p>{article.body}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </section>
  );
};
Referat.displaName = 'Referat';
