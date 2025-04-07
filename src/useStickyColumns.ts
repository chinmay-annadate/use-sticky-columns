import { useEffect, RefObject } from "react";

export interface UseStickyColumnsOptions {
  numLeftSticky?: number;
  numRightSticky?: number;
  stickyZIndex?: number;
  leftShadow?: string;
  rightShadow?: string;
  deps?: any[];
}

const useStickyColumns = (
  tableRef: RefObject<HTMLTableElement | null>,
  {
    numLeftSticky = 2,
    numRightSticky = 2,
    stickyZIndex = 10,
    leftShadow = "inset -2px 0 0 0 rgba(0, 0, 0, 0.1)",
    rightShadow = "inset 2px 0 0 0 rgba(0, 0, 0, 0.1)",
    deps = [],
  }: UseStickyColumnsOptions = {}
) => {
  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const cleanupStickyStyles = () => {
      const allStickyCells = table.querySelectorAll("th, td");
      allStickyCells.forEach((cell) => {
        const el = cell as HTMLElement;
        el.style.position = "";
        el.style.left = "";
        el.style.right = "";
        el.style.zIndex = "";
        el.style.boxShadow = "";
      });
    };

    const updateStickyColumns = () => {
      if (!table) return;

      cleanupStickyStyles(); // Clean before applying new styles

      let leftOffset = 0;
      let rightOffset = 0;

      // LEFT sticky columns
      for (let i = 0; i < numLeftSticky; i++) {
        const cells = table.querySelectorAll(
          `thead th:nth-child(${i + 1}), tbody td:nth-child(${i + 1})`
        );

        if (cells.length > 0) {
          const width = cells[0].getBoundingClientRect().width;

          cells.forEach((cell) => {
            const el = cell as HTMLElement;
            el.style.position = "sticky";
            el.style.left = `${leftOffset}px`;
            el.style.zIndex = `${stickyZIndex}`;
            el.style.boxShadow = i === numLeftSticky - 1 ? leftShadow : "none";
          });

          leftOffset += width;
        }
      }

      // RIGHT sticky columns
      for (let i = 0; i < numRightSticky; i++) {
        const cells = table.querySelectorAll(
          `thead th:nth-last-child(${i + 1}), tbody td:nth-last-child(${i + 1})`
        );

        if (cells.length > 0) {
          const width = cells[0].getBoundingClientRect().width;
          rightOffset += width;

          cells.forEach((cell) => {
            const el = cell as HTMLElement;
            el.style.position = "sticky";
            el.style.right = `${rightOffset - width}px`;
            el.style.zIndex = `${stickyZIndex}`;
            el.style.boxShadow = i === numRightSticky - 1 ? rightShadow : "none";
          });
        }
      }
    };

    updateStickyColumns();
    window.addEventListener("resize", updateStickyColumns);

    return () => {
      cleanupStickyStyles();
      window.removeEventListener("resize", updateStickyColumns);
    };
  }, [tableRef, numLeftSticky, numRightSticky, stickyZIndex, leftShadow, rightShadow, ...deps]);
};

export default useStickyColumns;