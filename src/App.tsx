import { OwnedNft } from "alchemy-sdk";
import { ethers } from "ethers";
import { useState } from "react";
import { alchemy } from "./alchemySetup";
import { Modal } from "./components/Modal/Modal";
import { NFTList } from "./components/NFTList/NFTList";

function App() {
  const [nfts, setNfts] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [noData, setNoData] = useState(false);
  const handleSubmit = async (e: React.FormEvent, address: string) => {
    e.preventDefault();
    setNoData(false);
    setErrorMessage("");
    if (!ethers.isAddress(address)) {
      setErrorMessage("invalid address.");
      setShowModal(true);
      return;
    }
    try {
      setLoading(true);
      const nfts = await alchemy.nft.getNftsForOwner(address);
      const modifiedNFTData: any = [];
      nfts.ownedNfts.forEach((data) => {
        const imageUrl = data?.contract?.openSea?.imageUrl;
        const image = data?.rawMetadata?.image || data?.rawMetadata?.image_url;
        const finalImageUrl = imageUrl || image;
        const animation_url = data?.rawMetadata?.animation_url;
        const format = data?.media[0]?.format;
        const description =
          data?.rawMetadata?.description ||
          data?.contract?.openSea?.description;
        const nftName =
          data?.rawMetadata?.name ||
          data?.title ||
          `${data?.contract?.openSea?.collectionName}` ||
          "N/A";

        const contractAddress = data?.contract?.address;

        const tokenId = data?.tokenId;
        if (
          animation_url?.includes("ipfs") ||
          image?.includes("ipfs") ||
          imageUrl?.includes("ipfs")
        ) {
          return;
        }
        modifiedNFTData.push({
          image,
          imageUrl,
          finalImageUrl,
          animation_url,
          format,
          description,
          nftName,
          contractAddress,
          tokenId,
        });
      });
      setNfts(modifiedNFTData);
      setNoData(modifiedNFTData.length === 0);
    } catch (e) {
      setErrorMessage("Error fetching NFTs.");
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => setShowModal(false);
  return (
    <div className="App">
      <NFTList
        data={nfts}
        loading={loading}
        handleSubmit={handleSubmit}
        noData={noData}
      />
      <Modal show={showModal} handleClose={handleClose}>
        {errorMessage}
      </Modal>
    </div>
  );
}

export default App;
