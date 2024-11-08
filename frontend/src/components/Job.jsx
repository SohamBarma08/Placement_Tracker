import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'


const Job = () => {

    
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://media.istockphoto.com/id/1201144331/vector/icon-design-element-logo-for-technology-innovation-company-tech-icon-and-symbol.jpg?s=1024x1024&w=is&k=20&c=SnBcv-Z87V7eSE-OPY4W5m26_dYQfgZJGG3prJAwJYg=" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Job Titel</h1>
                <p className='text-sm text-gray-600'>Job Description</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">job position</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">job Type</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">job salary</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button  variant="outline">Details</Button>
                <Button className="bg-[#7b68ee]">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job