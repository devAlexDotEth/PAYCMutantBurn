import React, { useEffect, useState } from "react";
import Popup from "../components/Popup";
import { useContext } from "react";
import { BlockchainContext } from "../context/BlockchainContext";
import Tile from "../components/tile";
import Button from "../components/button";
import Navigation from "../components/navigation";
import Wallet from "../components/wallet";
import Portal from "../template/portal";
import Box from "../components/box";
import Dialog from "../components/dialog";
import DialogHeader from "../assets/dialog-header.png";
import Body from "../components/body";

const Gallery = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [currentSignerAddress, setCurrentSignerAddress] = useState(null);
  const { connectWallet, fetchUnstakedInfo } = useContext(BlockchainContext);
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  async function handleConnectWallet() {
    let signer = await connectWallet();
    if (!signer) {
      return 0;
    }
    let address = await signer.getAddress();
    setCurrentSignerAddress(address);
  }

  const { unstakedNfts, stake } = useContext(BlockchainContext);

  const [showPopup, setShowPopup] = useState(false);

  const [selectedTokenIds, setSelectedTokenIds] = useState([]);
  const [nftType, setNftType] = useState("");

  const imageHandler = (tokenId, type) => {
    if (selectedTokenIds.includes(tokenId)) {
      setSelectedTokenIds(
        selectedTokenIds.filter((token_id) => token_id !== tokenId)
      );
    } else {
      setSelectedTokenIds((oldArray) => [...oldArray, tokenId]);
    }
    setNftType(type);
  };

  const stakeHandler = async () => {
    if (selectedTokenIds.length < 5) {
      setShowDialog(true);
      return;
    }

    let nfts_ = [];
    for (let i = 0; i < selectedTokenIds.length; i++) {
      const element = selectedTokenIds[i];
      nfts_.push(element);
    }
    console.log("nfts to stake ", nfts_);
    await stake(nfts_);
    setTransactionSuccess(true); // Set to true on successful transaction
  };

  async function getUserNFTs() {
    let _nfts = await fetchUnstakedInfo();
  }

  useEffect(() => {
    getUserNFTs();
  }, [currentSignerAddress]);

  console.log({ selectedTokenIds });

  return (
    <Box
      localStyles={{
        overflowY: isRevealed && "hidden",
        height: isRevealed && "100vh",
      }}
    >
      {/* Animation for successful transaction */}
      {transactionSuccess && (
        <div className="animation-background">
          <img src="background.gif" alt="Success Animation" />
        </div>
      )}

      <Navigation
        localStyles={{ position: "fixed", top: 0 }}
        wallet={
          !currentSignerAddress ? (
            <Button size="S" variant="PRIMARY" onClick={handleConnectWallet}>
              Connect Wallet
            </Button>
          ) : (
            <Wallet balance={0.0389} address={currentSignerAddress} />
          )
        }
      >
        <Button
          as="a"
          variant="TERTIARY"
          size="M"
          href="https://www.pepeapeyachtclub.com"
          target="_blank"
        >
          Return home
        </Button>
      </Navigation>

      {isRevealed && (
        <Dialog
          backdropClose={() => setIsRevealed(!isRevealed)}
          image={DialogHeader}
        >
          <Body size="L">Sheesh! Please select 5 NFT's</Body>
          <Button
            size="M"
            variant="PRIMARY"
            onClick={() => setIsRevealed(!isRevealed)}
          >
            Ok
          </Button>
        </Dialog>
      )}

      {showDialog && (
        <Dialog
          backdropClose={() => setShowDialog(false)}
          image={DialogHeader}
        >
          <Body size="L">Sheesh! Please select 5 NFT's</Body>
          <Button
            size="M"
            variant="PRIMARY"
            onClick={() => setShowDialog(false)}
          >
            Ok
          </Button>
        </Dialog>
      )}

      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

      <Portal
        title="Mutant Burn"
        toolbar={
          <>
            <Box localStyles={{ width: "auto" }}></Box>

            {unstakedNfts && unstakedNfts.length > 0 ? (
              <Button size="S" variant="PRIMARY" onClick={stakeHandler}>
                Burn Selected
              </Button>
            ) : (
              <Button size="S" variant="PRIMARY" disabled>
                Burn Selected
              </Button>
            )}
          </>
        }
        children={
          <>
            {unstakedNfts &&
              unstakedNfts.map((token, i) => {
                return (
                  <div
                    id={i}
                    onClick={() => {
                      if (selectedTokenIds.includes(token.tokenId)) {
                        let _selected = [...selectedTokenIds];
                        _selected = _selected.filter(
                          (val) => val != token.tokenId
                        );
                        setSelectedTokenIds(_selected);
                      } else {
                        let _selected = [...selectedTokenIds];
                        _selected.push(token.tokenId);
                        setSelectedTokenIds(_selected);
                      }
                    }}
                    key={"nft" + token.tokenId}
                    className="form-group"
                  >
                    <div>
                      <img
                        style={{
                          width: "150px",
                          borderRadius: "20px",
                          border: selectedTokenIds.includes(token.tokenId)
                            ? "4px solid yellow"
                            : "",
                        }}
                        src={
                          "https://ipfs.io/ipfs/" +
                          token.rawMetadata.image.slice(7)
                        }
                      />
                    </div>
                  </div>
                );
              })}
          </>
        }
      />
    </Box>
  );
};

export default Gallery;