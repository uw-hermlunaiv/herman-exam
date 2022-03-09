import classNames from 'classnames';
import React from 'react';

type Props = {
  className?: string;
  headers: string[];
  data: any[];
  renderTableRow: (params: any) => React.ReactNode;
};

const Table = function ({ className, headers, data, renderTableRow }: Props) {
  return (
    <div
      className={classNames(
        'bg-white shadow-sm rounded-xl table',
        className,
      )}
    >
      <table className="w-full table-fixed">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => renderTableRow(item))}
          {!data.length && (
          <tr>
            <td
              colSpan={headers.length}
              className="!text-center"
            >
              No data found
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
