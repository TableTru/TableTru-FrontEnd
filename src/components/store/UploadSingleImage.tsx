"use client"
import { Button, Card, Input, List, message, Image, Progress } from 'antd'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import React, { useState } from 'react'
import { storage } from '@/services/firebaseConfig'

export default function UploadSingleImage() {
  const [mainImage, setMainImage] = useState('')
  const [isMainImageUpload, setIsMainImageUpload] = useState(false)
  const [mainProgressUpload, setMainProgressUpload] = useState(0)

  const handleSelectedMainImage = async (files: any) => {
    if (files && files[0].size < 10000000) {
      const name = files[0].name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, files[0])

      setIsMainImageUpload(true)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setMainProgressUpload(progress) // to show progress upload

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
          setIsMainImageUpload(false)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setMainImage(url)
            setIsMainImageUpload(false)
          })
        },
      )
    } else {
      message.error('File size too large')
    }
  }

  return (
    <div className="container mt-5">
      <div className="col-lg-8 offset-lg-2">
        <Input
          type="file"
          placeholder="Select file to upload"
          accept="image/png"
          onChange={(files) => handleSelectedMainImage(files.target.files)}
        />
        {isMainImageUpload && <Progress percent={mainProgressUpload} />}

        {mainImage && (
              <>
                <Image
                  src={mainImage}
                  alt={mainImage}
                  style={{ width: 200, height: 200, objectFit: 'cover' }}
                />
              </>
            )}
      </div>
    </div>
  )
}
