import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const log = console.log
export default function Todo({todo, index, complete}) {
    return (
        <TableRow className="todo" key={todo.what}>
            <TableCell component="th" scope="row">
                {todo.what}
            </TableCell>
            <TableCell component="th" scope="row">
                {todo.when}
            </TableCell>
            <TableCell component="th" scope="row">
                <Button
                variant="contained"
                color="secondary"
                onClick={
                    () => complete(index)
                }
                //() => this.removeStudent(student) // this also works
                >
                Finish
            </Button>
            </TableCell>
        </TableRow>
    )

}