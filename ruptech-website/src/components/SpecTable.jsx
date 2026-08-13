export default function SpecTable({ rows = [], columns }) {
  const cols = columns || [
    { key: 'code', label: 'Code', className: 'w-1/4 text-primary font-bold font-mono' },
    { key: 'description', label: 'Description', className: 'w-1/2' },
    { key: 'size', label: 'Size (W × H × D)', className: 'w-1/4' },
  ];

  if (!rows.length) {
    return (
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg text-center text-on-surface-variant font-body-sm text-body-sm">
        No specifications available.
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="font-label-caps text-label-caps text-white border-b border-outline-variant bg-inverse-surface">
            <tr>
              {cols.map((col, i) => (
                <th
                  key={col.key}
                  className={`py-sm px-md ${i < cols.length - 1 ? 'border-r border-outline-variant' : ''}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-mono-label text-mono-label text-on-surface-variant">
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`hover:bg-surface-variant transition-colors border-b border-outline-variant last:border-0 ${
                  i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'
                }`}
              >
                {cols.map((col, j) => (
                  <td
                    key={col.key}
                    className={`py-md px-md ${j < cols.length - 1 ? 'border-r border-outline-variant' : ''} ${
                      col.className || ''
                    }`}
                  >
                    {row[col.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
