import React, { useState } from "react";
import { createPortal } from "react-dom";
import ReactPlayer from "react-player";
import { Modal } from "../Modal/Modal";
import { CardContainer, ModalCard } from "./card.style";

type NFTProps = {
  data: any;
};

const VIDEO_FORMATS = ["mp4", "mov", "wmv", "avi", "mkv", "flv"];

export const Card = ({ data }: NFTProps) => {
  const [showModal, setShowModal] = useState(false);
  const imageUrl = data?.contract?.openSea?.imageUrl;
  const image = data?.rawMetadata?.image;
  const finalImageUrl = imageUrl || image;
  const animation_url = data?.rawMetadata?.animation_url;
  const format = data?.media[0]?.format;
  const isVideo =
    VIDEO_FORMATS.includes(format) ||
    VIDEO_FORMATS.some((item) => animation_url?.includes(item));

  const isModel =
    animation_url?.includes("glb") || animation_url?.includes("gltf");

  const nftName =
    data?.rawMetadata?.name ||
    data?.title ||
    `${data?.contract?.openSea?.collectionName}` ||
    "N/A";

  const handleClose = () => setShowModal(false);

  const getAsset = () =>
    isModel ? (
      //@ts-ignore
      <model-viewer
        src={animation_url}
        shadow-intensity="1"
        camera-controls
        //@ts-ignore
      ></model-viewer>
    ) : isVideo ? (
      <ReactPlayer
        url={animation_url}
        controls
        width={"250px"}
        height="250px"
      />
    ) : (
      <img src={finalImageUrl} alt="nft" />
    );

  const getDetails = () => (
    <>
      <h3>{nftName}</h3>
      <p className="description">
        {data?.rawMetadata?.description
          ? data?.rawMetadata?.description?.substring(0, 120)
          : data?.contract?.openSea?.description?.substring(0, 120)}
      </p>
    </>
  );

  const openLink = () => {
    window.open(
      `https://opensea.io/assets/${data?.contract?.address}/${data?.tokenId}`,
      "__blank"
    );
  };

  return (
    <CardContainer>
      {getAsset()}
      <div onClick={() => setShowModal(true)}>{getDetails()}</div>
      {createPortal(
        <Modal show={showModal} handleClose={handleClose}>
          <ModalCard>
            {getAsset()}

            {getDetails()}
            <button className="open" onClick={openLink}>
              Open in OpenSea
            </button>
          </ModalCard>
        </Modal>,
        document.getElementById("portal") as HTMLElement
      )}
    </CardContainer>
  );
};
