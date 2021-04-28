import Image from "../Image";

export default function ComparisonRow({ rowData }) {
  // rowData = {
  // feature: featureName,
  // grouparoo: true,
  // comp: false
  // }

  function createCell(cellData, cellId) {
    let cellContents;
    if (Array.isArray(cellData)) {
      cellContents = cellData.map((item, index) =>
        makeMark(item, cellId, index)
      );
    } else {
      cellContents = makeMark(cellData, cellId);
    }
    return <td>{cellContents}</td>;
  }

  function makeMark(hasFeature, cellId, index = 0) {
    if (hasFeature === true) {
      return (
        <Image
          src="/images/grouparoo-blue-checkmark.svg"
          alt="Grouparoo blue checkmark"
          width={25}
          height={25}
          key={`${rowData.feature}-${cellId}-${index}`}
        />
      );
    } else if (hasFeature === false) {
      return (
        <Image
          src="/images/red-x.svg"
          alt="Red X"
          width={24}
          height={23}
          key={`${rowData.feature}-${cellId}-${index}`}
        />
      );
    } else if (typeof hasFeature === "string") {
      return (
        <span key={`${rowData.feature}-${cellId}-${index}`}>{hasFeature}</span>
      );
    }
  }

  return (
    <>
      <tr>
        <td style={{ textAlign: "left" }}>{rowData.feature}</td>
        {createCell(rowData.grouparoo, "grouparoo")}
        {createCell(rowData.comp, "comp")}
      </tr>
    </>
  );
}
