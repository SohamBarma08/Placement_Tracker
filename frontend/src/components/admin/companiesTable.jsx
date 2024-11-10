import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'


const CompaniesTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="https://media.istockphoto.com/id/1201144331/vector/icon-design-element-logo-for-technology-innovation-company-tech-icon-and-symbol.jpg?s=1024x1024&w=is&k=20&c=SnBcv-Z87V7eSE-OPY4W5m26_dYQfgZJGG3prJAwJYg=" />
                        </Avatar>
                    </TableCell>
                    <TableCell>company name</TableCell>
                    <TableCell>company create</TableCell>
                    <TableCell classname="text-right cursor-pointer">
                        <Popover>
                            <PopoverContent className="w-32">
                                <div classname='flex item-center gap-2 w-fit cursor-pointer'>
                                    <Edit2 classname='w-4' />
                                    <span>Edit</span>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </TableCell>
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable