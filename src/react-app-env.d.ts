/// <reference types="react-scripts" />
import { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}
declare namespace JSX {
  interface IntrinisicElements {
    "model-viewer": any;
  }
}
