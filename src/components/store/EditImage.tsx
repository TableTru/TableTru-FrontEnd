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
  store_id: number;
  store_image_name: string;
  store_image_type: string;
}

const EditImage = () => {
  const [isUploading, setIsUploading] = useState(false)
  const [progressUpload, setProgressUpload] = useState(0)
  const [urlData, setUrlData] = useState<StoreImage[]>([])

  const handleSelectedMenuImage = (files: any) => {
    if (files && files[0].size < 10000000) {
      const imageFile = files[0]
      const name = imageFile.name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, imageFile)

      setIsUploading(true)

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
            const newUrl = { id: urlData.length + 1, name: name, store_id: userDataJson.store_id, store_image_name: `${url}`, store_image_type: "ภาพเมนู" };
            console.log(newUrl);
            
            setUrlData([...urlData, newUrl])
            setIsUploading(false)
          })
        },
      )
    } else {
      message.error('File size too large')
    }
  }

  const handleSelectedSubImage = (files: any) => {
    if (files && files[0].size < 10000000) {
      const imageFile = files[0]
      const name = imageFile.name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, imageFile)

      setIsUploading(true)

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
            const newUrl = { id: urlData.length + 1, name: name, store_id: userDataJson.store_id, store_image_name: `${url}`, store_image_type: "ภาพประกอบ" };
            console.log(newUrl);
            
            setUrlData([...urlData, newUrl])
            setIsUploading(false)
          })
        },
      )
    } else {
      message.error('File size too large')
    }
  }

  const removeImage = (urlToDelete: string) => {
    console.log(urlToDelete);
    const newArray = urlData.filter(item => item.store_image_name !== urlToDelete);
    setUrlData(newArray)
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
            {isUploading && <Progress percent={progressUpload} />}
          </Box>
        </Box>

        <List>
          {urlData.map((item, index) => (
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
                <Button onClick={() => removeImage(item.store_image_name)} size="small">Remove</Button>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>

      </div>
    </div>
  )
}

export default EditImage