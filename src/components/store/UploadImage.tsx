"use client"

import { Input, message, Image, Progress, } from 'antd'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemIcon, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Card, CardMedia, CardContent, Typography, Box, CardActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import React, { useState } from 'react'
import { storage } from '@/services/firebaseConfig'

interface StoreImage {
  id: number;
  name: string;
  store_image_name: string;
  store_image_type: string;
}

const UploadImageToStorage = () => {
  const [menuUploading, setMenuUploading] = useState(false)
  const [subImageUpload, setSubImageUpload]  = useState(false)
  const [menuProgressUpload, setProgressUpload] = useState(0)
  const [subImageProgressUpload, setSubImageProgressUpload] = useState(0)
  const [menuData, setMenuData] = useState<StoreImage[]>([])
  const [subImageData, setSubImageData] = useState<StoreImage[]>([])

  const handleSelectedMenuImage = (files: any) => {
    if (files && files[0].size < 10000000) {
      const imageFile = files[0]
      const name = imageFile.name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, imageFile)

      setMenuUploading(true)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setProgressUpload(progress) // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          message.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
            //url is download url of file
            const newUrl = { id: menuData.length + 1, name: name, store_image_name: `${url}`, store_image_type: "ภาพเมนู" };
            console.log(newUrl);
            
            setMenuData([...menuData, newUrl])
            setMenuUploading(false)
          })
        },
      )
    } else {
      message.error('File size too large')
    }
  }

  const removeMenuImage = (urlToDelete: string) => {
    console.log(urlToDelete);
    const newArray = menuData.filter(item => item.store_image_name !== urlToDelete);
    setMenuData(newArray)
  }

  const handleSelectedSubImage = (files: any) => {
    if (files && files[0].size < 10000000) {
      const imageFile = files[0]
      const name = imageFile.name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, imageFile)

      setSubImageUpload(true)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

            setSubImageProgressUpload(progress) // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          message.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const userData = localStorage.getItem("userData")
        const userDataJson = JSON.parse(userData || "[]");
            //url is download url of file
            const newUrl = { id: subImageData.length + 1, name: name, store_image_name: `${url}`, store_image_type: "ภาพประกอบ" };
            console.log(newUrl);
            
            setSubImageData([...subImageData, newUrl])
            setSubImageUpload(false)
          })
        },
      )
    } else {
      message.error('File size too large')
    }
  }

  const removeSubImage = (urlToDelete: string) => {
    console.log(urlToDelete);
    const newArray = subImageData.filter(item => item.store_image_name !== urlToDelete);
    setSubImageData(newArray)
  }

  

  return (
    <div className="container mt-5">
      <div className="col-lg-8 offset-lg-2">
        <Box >
          <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
            <Input
              type="file"
              placeholder="Select file to upload"
              accept="image/png"
              onChange={(files) => handleSelectedMenuImage(files.target.files)}
            />
          </Box>

          <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
            {menuUploading && <Progress percent={menuProgressUpload} />}
          </Box>
        </Box>

        <List>
          {menuData.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Image
                  key={index}
                  src={item.store_image_name}
                  alt={item.store_image_name}
                  style={{ width: 100, height: 100, objectFit: 'cover' }}
                />
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemIcon>
                <Button onClick={() => removeMenuImage(item.store_image_name)} size="small">Remove</Button>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>

      </div>

      <div className="col-lg-8 offset-lg-2">
        <Box >
          <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
            <Input
              type="file"
              placeholder="Select file to upload"
              accept="image/png"
              onChange={(files) => handleSelectedSubImage(files.target.files)}
            />
          </Box>

          <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
            {subImageUpload && <Progress percent={subImageProgressUpload} />}
          </Box>
        </Box>

        <List>
          {subImageData.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Image
                  key={index}
                  src={item.store_image_name}
                  alt={item.store_image_name}
                  style={{ width: 100, height: 100, objectFit: 'cover' }}
                />
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemIcon>
                <Button onClick={() => removeSubImage(item.store_image_name)} size="small">Remove</Button>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>

      </div>
    </div>
  )
}

export default UploadImageToStorage