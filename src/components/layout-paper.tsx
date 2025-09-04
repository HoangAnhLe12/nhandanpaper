"use client";
import styled from "@emotion/styled";
import { useState } from "react";
import { useWindowSize } from "react-use";

import LongImagesMarkers from "./paper-long";
import { IframeProvider } from "./iframe/IframeContext";
import DisplayIframe from "./iframe/DisplayIframe";

export default function LayoutPaper() {
  const [selected, setSelected] = useState<any>(null);
  const { width, height } = useWindowSize();
  const isMobile = width <= 768;

  const images = [
    {
      id: "img1",
      src: "https://cdn.yoolife.com.vn/yootek/1756975999045-2746.jpg",
    },
    {
      id: "img2",
      src: "https://cdn.yoolife.com.vn/yootek/1756975092188-9536.jpg",
    },
    {
      id: "img3",
      src: "https://cdn.yoolife.com.vn/yootek/1756975894325-1650.jpg",
    },
    {
      id: "img4",
      src: "https://cdn.yoolife.com.vn/yootek/1756975913911-9679.jpg",
    },
    {
      id: "img5",
      src: "https://cdn.yoolife.com.vn/yootek/1756975937919-7757.jpg",
    },
    {
      id: "img6",
      src: "https://cdn.yoolife.com.vn/yootek/1756975948514-3604.jpg",
    },
  ];
  return (
    <Stage>
      <LongImagesMarkers
        widthWindow={width}
        heightWindow={height}
        images={images}
        initialMarkers={{
          img1: [
            {
              id: "bac26f77-d06f-437c-9b4c-bcfd586641a3",
              xPct: 0.551859,
              yPct: 0.49778,
              url: "https://vr360.yoolife.vn/pac-bo-cao-bang-ver-zbdsc278u26822",
            },
          ],
          img2: [],
          img3: [
            {
              id: "4e4a3b80-cbaf-41ad-bd10-90ff693eeb53",
              xPct: 0.832681,
              yPct: 0.719,
              url: "https://vr360.yoolife.vn/cay-da-tan-trao-zbdsc240u26822",
            },
          ],
          img4: [
            {
              id: "adfb6f91-7edf-49c7-9320-dcf01d57eb72",
              xPct: 0.583,
              yPct: 0.943,
              url: "https://vr360.yoolife.vn/nha-ong-cong-ngoc-kha-zac2624u275784",
            },
          ],
          img5: [
            {
              id: "adfb6f91-7edf-49c7-9320-dcf01d57eb72",
              xPct: 0.85829,
              yPct: 0.83,
              url: "https://youtu.be/dyefeqChQZQ",
            },
          ],
        }}
        iconsByImg={{
          img1: [{ xPct: 0.554, yPct: 0.476 }],
          img3: [{ xPct: 0.828, yPct: 0.696 }],
          img4: [
            // { xPct: 0.1175, yPct: 0.498 },
            // { xPct: 0.8625, yPct: 0.82 },
            { xPct: 0.583, yPct: 0.928 },
          ],
          img5: [{ xPct: 0.860938, yPct: 0.807 }],
        }}
        setSelected={setSelected}
        markerHitSize={isMobile ? 50 : 100}
        iconSize={isMobile ? 70 : 100}
        iconSrc="https://cdn.yoolife.com.vn/yootek/1756529700941-2481.gif"
      />

      <IframeProvider>
        {selected && (
          <DisplayIframe
            url={selected?.url}
            onClose={() => {
              setSelected(null);
            }}
            backgroundUrl={
              "https://cdn.yoolife.com.vn/yootek/1756542385292-3072.jpg"
            }
            bgMobileUrl="https://cdn.yoolife.com.vn/yootek/1756542426048-6042.jpg"
          />
        )}
      </IframeProvider>
    </Stage>
  );
}

const Stage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// images={[
//   {
//     id: "img1",
//     // src: "https://cdn.yoolife.com.vn/yootek/1756961351341-5069.jpg",
//     src: "https://cdn.yoolife.com.vn/yootek/1756975999045-2746.jpg",
//   },
//   {
//     id: "img2",
//     // src: "https://cdn.yoolife.com.vn/yootek/1756961380247-2180.jpg",
//     src: "https://cdn.yoolife.com.vn/yootek/1756975092188-9536.jpg",
//   },
//   {
//     id: "img3",
//     // src: "https://cdn.yoolife.com.vn/yootek/1756961392514-1546.jpg",
//     src: "https://cdn.yoolife.com.vn/yootek/1756975894325-1650.jpg",
//   },
//   {
//     id: "img4",
//     // src: "https://cdn.yoolife.com.vn/yootek/1756961403092-1071.jpg",
//     src: "https://cdn.yoolife.com.vn/yootek/1756975913911-9679.jpg",
//   },
//   {
//     id: "img5",
//     // src: "https://cdn.yoolife.com.vn/yootek/1756964246682-7516.jpg",
//     src: "https://cdn.yoolife.com.vn/yootek/1756975937919-7757.jpg",
//   },
//   {
//     id: "img6",
//     // src: "https://cdn.yoolife.com.vn/yootek/1756964524672-8385.jpg",
//     src: "https://cdn.yoolife.com.vn/yootek/1756975948514-3604.jpg",
//   },
// ]}
