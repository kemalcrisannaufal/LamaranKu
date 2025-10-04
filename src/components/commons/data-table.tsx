import { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card, CardContent } from "../ui/card";
import { Loader2 } from "lucide-react";

export default function DataTable({
  header,
  data,
  isLoading,
}: {
  header: { key: string; label: string }[];
  data: Record<string, ReactNode>[];
  isLoading: boolean;
}) {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              {header.map((head, index) => (
                <TableHead key={`${head.key}-${index}`} className="capitalize">
                  {head.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={header.length}>
                  <div className="w-full flex justify-center items-center h-20 font-semibold text-muted-foreground">
                    <Loader2 className="animate-spin" />
                  </div>
                </TableCell>
              </TableRow>
            )}

            {!isLoading && data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={header.length}>
                  <div className="w-full flex justify-center items-center h-20 font-semibold text-muted-foreground">
                    No Data Available.
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, rowIndex) => (
                <TableRow key={`data-row-${rowIndex}`}>
                  <TableCell>{rowIndex + 1}</TableCell>
                  {header.map((head, colIndex) => (
                    <TableCell
                      key={`entry-${head}-row-${rowIndex}-col-${colIndex}`}
                    >
                      {row[head.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
