import {
  AA,
  AV,
  CG,
  PC,
  PD,
  PB,
  PDB,
  PS,
  ST,
  STB,
  GlobeGrid,
  LayerStack,Development,ApprovedPng
} from "../assets";
export const apiData = [
  {
    src: PS,
    text: "Property Search",
  },
  {
    src: PD,
    text: "Property Detail",
  },
  {
    src: PC,
    text: "Property Comps",
  },
  {
    src: PB,
    text: "Parcel Boundary",
  },
  {
    src: ST,
    text: "Skip Terrace",
  },
]
;
export const serviceApis = [
  {
    src: AA,
    text: "Address Auto-Complete",
  },
  {
    src: CG,
    text: "CSV Generator",
  },
  {
    src: AV,
    text: "Address Auto-Complete",
  },
]
;
export const bulkApis = [
  {
    src: PDB,
    text: "Property Detail Bulk",
  },
  {
    src: STB,
    text: "Skip Trace Bulk",
  },
]
;
export const reapiSectionData = [
  {
    src: GlobeGrid,
    title: "Enterprise Grade Performance",
    description:
      "Retrieve tens of thousands of records with sub 1 second response times. 99.9% uptime.",
  },
  {
    src: LayerStack,
    title: "A.I. enablement",
    description:
      "When you’re ready to leverage A.I. for deeper analysis, train your models against our datasets to derive your own proprietary insights.",
  },
  {
    src: Development,
    title: "Developer Support",
    description:
      "Need help thinking through your architecture? Hit us up directly. Or pop into our Discord. We love to nerd out on this stuff.",
  },
  {
    src: ApprovedPng,
    title: "Stretch your budget",
    description:
      "Half the price and 10x as powerful as any solution from a big box data provider.",
  },
];