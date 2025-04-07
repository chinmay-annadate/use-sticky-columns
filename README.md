# use-sticky-columns

[![npm version](https://img.shields.io/npm/v/use-sticky-columns.svg)](https://www.npmjs.com/package/use-sticky-columns)
[![license](https://img.shields.io/npm/l/use-sticky-columns.svg)](LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/use-sticky-columns)](https://bundlephobia.com/package/use-sticky-columns)
[![types](https://img.shields.io/npm/types/use-sticky-columns.svg)](https://www.npmjs.com/package/use-sticky-columns)

A lightweight React hook to make HTML table columns sticky on both left and right sides. Great for data tables and dashboards.

> 🎬 **[Live Demo](https://chinmay.annadate.in/demos/use-sticky-columns)**

## ✨ Features

- Sticky left and/or right columns
- Automatically handles offsets
- Customizable shadow, z-index, and more
- Compatible with any third party UI Library

## 📦 Installation

```bash
npm install use-sticky-columns
```

## 🚀 Usage
Pass tableRef directly to the table element
```typescript
import ExampleTable from "@/components/examples/ExampleTable";
import { useRef, useState } from "react";
import useStickyColumns from "use-sticky-columns";

const Page = () => {
  const tableRef = useRef<HTMLTableElement | null>(null);

  const [numLeftSticky, setNumLeftSticky] = useState(2);
  const [numRightSticky, setNumRightSticky] = useState(3);

  useStickyColumns(tableRef, {
    numLeftSticky,
    numRightSticky,
    stickyZIndex: 10, # default
    leftShadow: "inset -2px 0 0 0 rgba(0, 0, 0, 0.1)", # default
    rightShadow: "inset 2px 0 0 0 rgba(0, 0, 0, 0.1)",
    deps: [], # any dependencies to reload the table
  });

  return (
    <div className="m-4 md:m-20 space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="flex items-center gap-2 text-sm">
          Left Sticky Columns:
          <input
            type="number"
            value={numLeftSticky}
            onChange={(e) => setNumLeftSticky(Number(e.target.value))}
            min={1}
            className="rounded border px-2 py-1 w-20"
          />
        </label>

        <label className="flex items-center gap-2 text-sm">
          Right Sticky Columns:
          <input
            type="number"
            value={numRightSticky}
            onChange={(e) => setNumRightSticky(Number(e.target.value))}
            min={1}
            className="rounded border px-2 py-1 w-20"
          />
        </label>
      </div>

      {/* Table Container */}
      <div className="max-h-[600px] overflow-hidden rounded-xl border">
        <div className="flex overflow-auto next-ui-table-thead striped-table max-h-[600px]">
          <div className="w-0 grow">
            <ExampleTable tableRef={tableRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
```
