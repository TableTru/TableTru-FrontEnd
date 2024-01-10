'use client'
import { useEffect, useState } from 'react'
import {getCategory, getTest, createCategory} from '../../services/category.service'
import { Button, Input } from '@mui/material'

interface Category {
    id: number
    name: string
    imageName: string
    createAt: Date
    updateAt: Date
}

export default function CategoryTest() {
    const [categoryData, setCategoryData] = useState<Category[]>([]);
    const [testData, setTestData] = useState<any>([])
    const [value, setValue] = useState<any>([]);

    const fetchData = async () => {
        const category = await getCategory()
        setCategoryData(category)

        const test = await getTest()
        setTestData(test)
    }

    const postCategory = async () => {
        const categoryObj = {
            category_name: value
        }
        const res = await createCategory(categoryObj)
        // console.log(categoryObj);
    }

    const onClick = () => {
        fetchData()
        console.log(testData);
        console.log(categoryData);
    }

    const handleChange = (event: { target: { value: any } }) => {
        setValue(event.target.value);
        console.log(value);
        
      };

    useEffect(() => {
        fetchData()
        console.log(testData);
    }, [])

    return (
        <div className='test'>
            <h1>Get Test</h1>
            <Button onClick={onClick}>Test</Button>

            <h1>Post Test</h1>
            <Input value={value} onChange={handleChange}></Input>
            <Button onClick={postCategory}>PostCategory</Button>
        </div>
    )
}
