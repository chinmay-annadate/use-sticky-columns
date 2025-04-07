# use-sticky-columns

[![npm version](https://img.shields.io/npm/v/use-sticky-columns.svg)](https://www.npmjs.com/package/use-sticky-columns)
[![license](https://img.shields.io/npm/l/use-sticky-columns.svg)](LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/use-sticky-columns)](https://bundlephobia.com/package/use-sticky-columns)
[![types](https://img.shields.io/npm/types/use-sticky-columns.svg)](https://www.npmjs.com/package/use-sticky-columns)

A lightweight React hook to make HTML table columns sticky on both left and right sides. Great for data tables and dashboards.

## ✨ Features

- Sticky left and/or right columns
- Automatically handles offsets
- Customizable shadow, z-index, and more
- Compatible with any third party UI Library

## 📦 Installation

```bash
npm install use-sticky-columns
```

## 📦 Usage

```typescript
import { useRef } from "react";
import useStickyColumns from "use-sticky-columns";

const MyTable = () => {
  const tableRef = useRef<HTMLTableElement>(null);

  useStickyColumns(tableRef, {
    numLeftSticky: 2,
    numRightSticky: 1,
    stickyZIndex: 10,
    leftShadow: "inset -2px 0 0 0 rgba(0, 0, 0, 0.1)",
    rightShadow: "inset 2px 0 0 0 rgba(0, 0, 0, 0.1)",
    deps = [],
  });

  return (
    <table ref={tableRef}>
      <thead>...</thead>
      <tbody>...</tbody>
    </table>
  );
};
```
