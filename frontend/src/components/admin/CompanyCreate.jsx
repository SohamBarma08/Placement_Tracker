import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'


const CompanyCreate = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div classname='my-10'>
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>What would you like to give your company name? you can change this later.</p>
                </div>
                <Label>Company Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeholder="JobHunt, Microsoft etc."
                />
                <div classname='flex items=center gap=2 my-10'>
                    <Button variant="outline" onClick ={() => navigate("/admin/companies")}>cancel</Button>
                    <Button onClick ={() => navigate("/admin/companies/Setup")}>continue</Button>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate