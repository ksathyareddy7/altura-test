import { Card } from "../Card/Card";
import { Loader, RightArrow } from "../../assets/Icons";

import {
  Button,
  HeaderContainer,
  Input,
  ListContainer,
  LoaderContainer,
  MainContainer,
  Paragraph,
} from "./style";
import { useState } from "react";

type NFTListProps = {
  data: any[];
  loading: boolean;
  handleSubmit: (e: React.FormEvent, address: string) => void;
  noData: boolean;
};

export const NFTList = (props: NFTListProps) => {
  const [address, setAddress] = useState<string>("");

  return (
    <MainContainer>
      <HeaderContainer>
        <Paragraph>
          Provide a wallet or contract address to view all their NFTs.
        </Paragraph>
        <form onSubmit={(e: React.FormEvent) => props.handleSubmit(e, address)}>
          <Input
            placeholder="enter address"
            value={address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAddress(e.target.value)
            }
            disabled={props.loading}
          />
          <Button disabled={!address.length || props.loading}>
            Search NFTs {<RightArrow />}
          </Button>
        </form>
      </HeaderContainer>
      {!props.data.length && props.noData ? <h2>No NFTs Found</h2> : null}
      {props.loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <ListContainer>
          {props.data.map((item, i) => (
            <Card data={item} key={i} />
          ))}
        </ListContainer>
      )}
    </MainContainer>
  );
};
