import React, { useState } from "react";
import { createPortal } from "react-dom";
import ReactPlayer from "react-player";
import { Modal } from "../Modal/Modal";
import { CardContainer, ModalCard } from "./card.style";

type NFTProps = {
  data: any;
};

const VIDEO_FORMATS = ["mp4", "mov", "wmv", "avi", "mkv", "flv"];

const Details = (props: any) => (
  <>
    <h3>{props.nftName}</h3>
    {props.description ? (
      <p className="description">{props.description}</p>
    ) : null}
  </>
);

export const Card = ({ data }: NFTProps) => {
  const [showModal, setShowModal] = useState(false);

  const isVideo =
    VIDEO_FORMATS.includes(data.format) ||
    VIDEO_FORMATS.some((item) => data?.animation_url?.includes(item));

  const isModel =
    data?.animation_url?.includes("glb") ||
    data?.animation_url?.includes("gltf");

  const miniDescription = data?.description?.substring(0, 120);

  const handleClose = () => setShowModal(false);

  const getAsset = () =>
    isModel ? (
      /*@ts-ignore*/
      <model-viewer
        src={data.animation_url}
        shadow-intensity="1"
        camera-controls
        //@ts-ignore
      ></model-viewer>
    ) : isVideo ? (
      <ReactPlayer
        url={data.animation_url}
        controls
        width={"250px"}
        height="250px"
      />
    ) : (
      <img src={data.finalImageUrl} alt="nft" />
    );

  const openLink = () => {
    window.open(
      `https://opensea.io/assets/${data.contractAddress}/${data.tokenId}`,
      "__blank"
    );
  };

  return (
    <CardContainer>
      {getAsset()}
      <div onClick={() => setShowModal(true)}>
        <Details nftName={data.nftName} description={miniDescription} />
      </div>
      {createPortal(
        <Modal show={showModal} handleClose={handleClose}>
          <ModalCard>
            {getAsset()}

            <Details nftName={data.nftName} description={data.description} />
            <button className="open" onClick={openLink}>
              Go to OpenSea
            </button>
          </ModalCard>
        </Modal>,
        document.getElementById("portal") as HTMLElement
      )}
    </CardContainer>
  );
};
