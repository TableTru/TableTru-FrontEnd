'use client'
import { useEffect, useState } from 'react'
import {getCategory, getTest} from '../../services/category.service'
import { Button } from '@mui/material'

interface Category {
    id: number
    name: string
    imageName: string
    createAt: Date
    updateAt: Date
}

interface TestData {
    id: number
    name: string
    detail: string
}

export default function CategoryTest() {
    const [categoryData, setCategoryData] = useState<Category[]>([]);
    const [testData, setTestData] = useState<any>([])

    const fetchData = async () => {
        const category = await getCategory()
        setCategoryData(category)

        const test = await getTest()
        setTestData(test)
    }

    const onClick = () => {
        console.log(testData);
        console.log(categoryData);
        
    }

    useEffect(() => {
        fetchData()
        console.log(testData);
    }, [])

    return (
        <div className='test'>
            <h1>page2</h1>
            <Button onClick={onClick}>Test</Button>
        </div>
    )
}
