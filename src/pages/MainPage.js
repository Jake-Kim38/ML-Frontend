import React from "react";
import styled from "styled-components";
import DataTable from "../components/DataTable";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const MainPage = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const selectedImage = event.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    return (
        <PageArea>
            <TitleArea>
                <TitleText>웨이퍼 맵 측정</TitleText>
            </TitleArea>
            <ContentArea>
                <LeftSideArea>
                    <ButtonArea>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} size="3x" color="white"/>
                        <ButtonText>이미지를 올려주세요.</ButtonText>
                        <ImageInput type="file" accept="image/^" onChange={handleImageUpload} placeholder="파일 탐색"/>
                    </ButtonArea>
                    {image && (
                        <ImageArea>
                            <MyImage src={image} alt="Uploaded"/>
                        </ImageArea>
                    )}
                    <StartArea>
                        <StartButton>측정 진행</StartButton>
                    </StartArea>
                </LeftSideArea>
                <RightSideArea>
                    <DataTable/>
                </RightSideArea>
            </ContentArea>
        </PageArea>
    )
};

const PageArea = styled.div`
    width: 100wh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.BLACK};
`

const TitleArea = styled.div`
    width: 100%;
    text-align: center;
`

const ContentArea = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
`

const LeftSideArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
`

const RightSideArea = styled.div`
    width: 50%;
    height: 100%;
`

const TitleText = styled.p`
    font-weight: 600;
    font-size: 54px;
    color: ${({ theme }) => theme.colors.WHITE};
`

const ButtonArea = styled.div`
    width: 95%;
    height: 85px;
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.GRAY};
`

const ButtonText = styled.p`
    color: ${({ theme }) => theme.colors.WHITE};
    font-weight: 600;
    font-size: 32px;
    margin-left: 52px;
`

const ImageInput = styled.input`
    background-color: ${({ theme }) => theme.colors.BLACK};
    color: ${({ theme }) => theme.colors.WHITE};
    font-weight: 600;
    font-size: 24px;
    border: none;
    margin-left: 97px;
`

const ImageArea = styled.div`
    width: 95%;
    height: 75%;
    margin-left: 20px;
    margin-top: 60px;
`

const MyImage = styled.img`
    width: 100%;
    height: 100%;
`

const StartArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const StartButton = styled.button`
    width: 30%;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.GRAY};
    color: ${({ theme }) => theme.colors.WHITE};
    border: none;
    cursor: pointer;
    position: fixed;
    bottom: 7%;
`

export default MainPage;