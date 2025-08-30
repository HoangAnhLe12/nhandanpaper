"use client";
import styled from "@emotion/styled";
import { useState } from "react";
import { useWindowSize } from "react-use";

import LongImagesMarkers from "./paper-long";
import { IframeProvider } from "./iframe/IframeContext";
import DisplayIframe from "./iframe/DisplayIframe";

export default function LayoutPaper() {
  const [selected, setSelected] = useState<any>(null);
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <Stage>
      <LongImagesMarkers
        images={[
          // { id: "img1", src: "https://cdn.yoolife.com.vn/yootek/1756523655896-7001.jpg" },
          {
            id: "img1",
            // src: "https://cdn.yoolife.com.vn/yootek/1756526680448-2347.webp",
            src: "https://cdn.yoolife.com.vn/yootek/1756555226610-3693.webp",
          },
          {
            id: "img2",
            // src: "https://cdn.yoolife.com.vn/yootek/1756526694829-6150.webp",
            src: " https://cdn.yoolife.com.vn/yootek/1756555251269-1847.webp",
          },
          {
            id: "img3",
            // src: "https://cdn.yoolife.com.vn/yootek/1756526706261-8072.webp",
            src: "https://cdn.yoolife.com.vn/yootek/1756555268990-4435.webp",
          },
          {
            id: "img4",
            // src: "https://cdn.yoolife.com.vn/yootek/1756526717612-7336.webp",
            src: "https://cdn.yoolife.com.vn/yootek/1756555286749-9887.webp",
          },
          {
            id: "img5",
            // src: "https://cdn.yoolife.com.vn/yootek/1756538472996-4469.webp",
            src: "https://cdn.yoolife.com.vn/yootek/1756555307481-2366.webp",
          },
        ]}
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
            // {
            //   id: "e0559a2b-83ca-44c3-b633-1cb8ce01f7b4",
            //   xPct: 0.114481,
            //   yPct: 0.515,
            //   url: "https://vr360.yoolife.vn/quang-truong-ba-dinh-zbdsc2149u275784",
            // },
          ],
          img5: [
            // {
            //   id: "45d2a8eb-c7c4-4e04-b1b4-507f478346af",
            //   xPct: 0.874755,
            //   yPct: 0.487669,
            //   url: "https://vr360.yoolife.vn/quang-truong-ba-dinh-zbdsc2149u275784",
            // },
            {
              id: "adfb6f91-7edf-49c7-9320-dcf01d57eb72",
              xPct: 0.85829,
              yPct: 0.665,
              url: "https://vr360.yoolife.vn/quang-truong-ba-dinh-zbdsc2149u275784",
            },
          ],
        }}
        iconsByImg={{
          img1: [{ xPct: 0.554, yPct: 0.476 }],
          img3: [{ xPct: 0.828, yPct: 0.696 }],
          // img4: [{ xPct: 0.1175, yPct: 0.498 }],
          img5: [
            // { xPct: 0.876, yPct: 0.474159 },
            { xPct: 0.860938, yPct: 0.647 },
          ],
        }}
        setSelected={setSelected}
        markerHitSize={100}
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
