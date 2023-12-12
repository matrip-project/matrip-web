import React, { useState, useRef, useEffect } from 'react';

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import * as uis from './uploadImageStyle';

import { bucketName, s3 } from '../../apis/AWS-S3';

import { canvasPreview } from './canvasPreview';
import { useDebounceEffect } from './useDebounceEffect';
import { useIconClickHandler } from '../../hooks/useIconClickHandler';

import { AiFillCloseCircle } from 'react-icons/ai';
import LoadingIncdicator from '../../components/LoadingIncdicator';

// crop ratio 미리 설정
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

// CropComponentsProps 인터페이스
interface CropComponentsProps {
  // 부모로 보내는 props
  sendimg: (urlFromCrop: string) => void;
  close: (closeToggle: boolean) => void;
  // 부모에서 받는 props
  imgdata: string;
}

const UploadImg: React.FC<CropComponentsProps> = ({
  sendimg,
  close,
  imgdata
}) => {
  // Loading indicator 상태
  const [loading, setLoading] = useState<boolean>(false);
  // canvas ref 참조
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  // image ref 참조
  const imgRef = useRef<HTMLImageElement>(null);

  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const SCALE = 1;
  const ROTATE = 0;
  const ASPECT = 1 / 1;

  // useIconClickHandler
  const handleClose = () => {
    close(false);
  };

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (ASPECT) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, ASPECT));
    }
  }

  /**
   * 자른 이미지 다운로드
   * => s3에 업로드로 변경
   */
  async function onDownloadCropClick() {
    setLoading(true);
    if (!previewCanvasRef.current) {
      throw new Error('Crop canvas does not exist');
    }
    previewCanvasRef.current.toBlob(async (blob) => {
      if (!blob) {
        throw new Error('Failed to create blob');
      }
      // !!TODO datedata 규칙 설정하기
      const datedata = Math.floor(Math.random() * 1000000);
      const filename = `${datedata}.jpg`;
      const uploadParams = {
        Bucket: bucketName as string,
        Key: filename,
        Body: blob,
        ContentType: 'image/jpeg'
      };
      // console.log(uploadParams)
      try {
        await s3.upload(uploadParams).promise();
        const s3Url = `https://${bucketName}.s3.amazonaws.com/${filename}`;
        sendimg(s3Url);
        setLoading(false);
        close(false);
      } catch (error) {
        console.error('Error uploading to S3:', error);
      }
    });
  }

  // crop 영역 선택시 debounce
  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          SCALE,
          ROTATE
        );
      }
    },
    500,
    [completedCrop, SCALE, ROTATE]
  );

  return (
    <uis.EditImageCtnr>
      <uis.CropControl>
        <uis.EditImgHeader>
          {/* <AiFillCloseCircle
            size={30}
            onClick={handleClose}
            style={{marginLeft:'10px'}}
          /> */}
          <uis.SaveImgBtn onClick={handleClose}>취소</uis.SaveImgBtn>
          <uis.SaveImgBtn onClick={onDownloadCropClick}>저장</uis.SaveImgBtn>
        </uis.EditImgHeader>
      </uis.CropControl>
      {loading && <LoadingIncdicator />}
      {imgdata && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={ASPECT}
          style={{ width: '90%' }}
        >
          <img
            ref={imgRef}
            alt='Crop me'
            src={imgdata}
            style={{
              transform: `scale(${SCALE}) rotate(${ROTATE}deg)`,
              width: '600px'
            }}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      {completedCrop && (
        <>
          <div style={{ display: 'none' }}>
            <canvas
              ref={previewCanvasRef}
              style={{
                border: '1px solid black',
                objectFit: 'contain',
                width: completedCrop.width,
                height: completedCrop.height
              }}
            />
          </div>
        </>
      )}
    </uis.EditImageCtnr>
  );
};
export default UploadImg;
