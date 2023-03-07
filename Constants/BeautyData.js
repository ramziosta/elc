const features = [
    {
      key: "1",
      text: "Ergonomic\n Design",
      image: require("../Assets/icons/ri_hand-heart-line.png"),
    },
    {
      key: "2",
      text: "Texture",
      image: require("../Assets/icons/icon-park-outline_foundation-makeup.png"),
    },
    {
      key: "3",
      text: "No Tools",
      image: require("../Assets/icons/mdi_lock-open-outline.png"),
    },
    {
      key: "4",
      text: "Tactile\n Markers",
      image: require("../Assets/icons/tabler_brush-off.png"),
    },
    {
      key: "5",
      text: "Easy Open",
      image: require("../Assets/icons/tabler_texture.png"),
    },
    { key: "6", text: "Easy Apply", image: require("../Assets/icons/brail.png") },
  ];

  const highlyRated = [
    {
      key: "1",
      brand: "Rare Beauty",
      name: "Pink Lipstick",
      image: require("../Assets/images/m1.jpeg"),
      accessibility: "Ergonomic Design",
      buyItAgain: 92,
    },
    {
      key: "2",
      brand: "Kohls Kreative",
      name: "Soft Pinch Liquid....",
      image: require("../Assets/images/m2.jpeg"),
      accessibility: "Texture",
      buyItAgain: 90,
    },
    {
      key: "3",
      brand: "Nora",
      name: "Zen Zone",
      image: require("../Assets/images/m3.jpeg"),
      accessibility: "Lorem Ipsum",
      buyItAgain: 88,
    },
    {
      key: "4",
      brand: "Neauthy",
      name: "Mineral Plus Nigh...",
      image: require("../Assets/images/m4.jpeg"),
      accessibility: "No Tools",
      buyItAgain: 92,
    },
    {
      key: "5",
      brand: "Cosmetic",
      name: "Daily Dose",
      image: require("../Assets/images/m5.jpeg"),
      accessibility: "Tactile Markers",
      buyItAgain: 97,
    },
    {
      key: "6",
      brand: "CORS",
      name: "Releaf Balm",
      image: require("../Assets/images/m6.jpeg"),
      accessibility: "No Tools",
      buyItAgain: 86,
    },
  ];

  const accessibleBrands = [
    {
      key: "1",
      text: "Ergonomic Design",
      image: require("../Assets/images/m7.jpeg"),
    },
    { key: "2", text: "Texture", image: require("../Assets/images/m8.jpeg") },
    { key: "3", text: "No Tools", image: require("../Assets/images/m9.jpeg") },
    {
      key: "4",
      text: "Tactile Markers",
      image: require("../Assets/images/m10.jpeg"),
    },
    {
      key: "5",
      text: "Easy To Open",
      image: require("../Assets/images/m11.jpeg"),
    },
    {
      key: "6",
      text: "Easy To Apply",
      image: require("../Assets/images/m12.jpeg"),
    },
  ];
  const recentlyAdded = [
    {
      key: "1",
      text: "Ergonomic Design",
      brand: "",
      image: require("../Assets/images/m13.jpeg"),
    },
    {
      key: "2",
      text: "Texture",
      brand: "",
      image: require("../Assets/images/m14.jpeg"),
    },
    {
      key: "3",
      text: "No Tools",
      brand: "",
      image: require("../Assets/images/m15.jpeg"),
    },
    {
      key: "4",
      text: "Tactile Markers",
      brand: "",
      image: require("../Assets/images/m16.jpeg"),
    },
    {
      key: "5",
      text: "Easy To Open",
      brand: "",
      image: require("../Assets/images/m17.jpeg"),
    },
    {
      key: "6",
      text: "Easy To Apply",
      brand: "",
      image: require("../Assets/images/m18.jpeg"),
    },
  ];
  
  export{
    features,
    highlyRated,
    accessibleBrands,
    recentlyAdded
  }