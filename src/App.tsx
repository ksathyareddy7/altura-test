import { OwnedNft } from "alchemy-sdk";
import { ethers } from "ethers";
import { useState } from "react";
import { alchemy } from "./alchemySetup";
import { Modal } from "./components/Modal/Modal";
import { NFTList } from "./components/NFTList/NFTList";

function App() {
  const [nfts, setNfts] = useState<OwnedNft[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent, address: string) => {
    e.preventDefault();
    setErrorMessage("");
    if (!ethers.isAddress(address)) {
      setErrorMessage("invalid address.");
      setShowModal(true);
      return;
    }

    try {
      setLoading(true);
      const nfts = await alchemy.nft.getNftsForOwner(address);
      setNfts(nfts.ownedNfts);
      console.log(nfts);
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
      <NFTList data={nfts} loading={loading} handleSubmit={handleSubmit} />
      <Modal show={showModal} handleClose={handleClose}>
        {errorMessage}
      </Modal>
    </div>
  );
}

export default App;
