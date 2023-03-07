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
  const imageUrl = data?.contract?.openSea?.imageUrl;
  const image = data?.rawMetadata?.image || data?.rawMetadata?.image_url;
  const finalImageUrl = imageUrl || image;
  const animation_url = data?.rawMetadata?.animation_url;
  const format = data?.media[0]?.format;
  const isVideo =
    VIDEO_FORMATS.includes(format) ||
    VIDEO_FORMATS.some((item) => animation_url?.includes(item));

  const isModel =
    animation_url?.includes("glb") || animation_url?.includes("gltf");

  const description =
    data?.rawMetadata?.description || data?.contract?.openSea?.description;
  const miniDescription = description?.substring(0, 120);

  const nftName =
    data?.rawMetadata?.name ||
    data?.title ||
    `${data?.contract?.openSea?.collectionName}` ||
    "N/A";

  const handleClose = () => setShowModal(false);

  const getAsset = () =>
    isModel ? (
      /*@ts-ignore*/
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

  const openLink = () => {
    window.open(
      `https://opensea.io/assets/${data?.contract?.address}/${data?.tokenId}`,
      "__blank"
    );
  };

  if (
    animation_url?.includes("ipfs") ||
    image?.includes("ipfs") ||
    imageUrl?.includes("ipfs")
  ) {
    return null;
  }

  return (
    <CardContainer>
      {getAsset()}
      <div onClick={() => setShowModal(true)}>
        <Details nftName={nftName} description={miniDescription} />
      </div>
      {createPortal(
        <Modal show={showModal} handleClose={handleClose}>
          <ModalCard>
            {getAsset()}

            <Details nftName={nftName} description={description} />
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
