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
                        <ImageInput type="file" accept="image/^" onChange={handleImageUpload} placeholder="파일 탐색"/>
                        <StartButton onClick={() => console.log("hi")}>측정 진행</StartButton>
                    </ButtonArea>
                    {image && (
                        <ImageArea>
                            <MyImage src={image} alt="Uploaded"/>
                        </ImageArea>
                    )}
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
    flex-direction: column;
    width: 100%;
    height: 80%;
`

const LeftSideArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50%;
`

const RightSideArea = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleText = styled.p`
    font-weight: 600;
    font-size: 38px;
    color: ${({ theme }) => theme.colors.WHITE};
`

const ButtonArea = styled.div`
    width: 70%;
    height: 85px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.GRAY};
`

const ButtonText = styled.p`
    color: ${({ theme }) => theme.colors.WHITE};
    font-weight: 600;
    font-size: 25px;
    margin-left: 52px;
`

const ImageInput = styled.input`
    background-color: ${({ theme }) => theme.colors.BLACK};
    color: ${({ theme }) => theme.colors.WHITE};
    font-weight: 600;
    font-size: 20px;
    border: none;
    margin-left: 97px;
`

const ImageArea = styled.div`
    width: 40%;
    height: 100%;
    margin-top: 10px;
`

const MyImage = styled.img`
    width: 100%;
    height: 100%;
`

const StartButton = styled.button`
    width: 15%;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.GRAY};
    color: ${({ theme }) => theme.colors.WHITE};
    border: 1px solid white;
    cursor: pointer;
    margin-left: 5px;
`

export default MainPage;