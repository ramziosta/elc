const assets = [
  {
    id: "1",
    WhiteHeart: require("../assets/icons/ri_hand-heart-line.png"),
    WhiteHeart: require("../assets/icons/ri_hand-heart-line.png"),
    redHeart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    pendingIcon: require("../assets/icons/rating-circle-small.png"),
    ColorOptionsIcon: require("../assets/icons/Ellipse%48.png"),
    iconColorName: "Greatful",
    brandLogo: require("../assets/icons/icon1.png"), //< assets????
  },
  {
    id: "2",
    image: require("../assets/icons/icon-park-outline_foundation-makeup.png"),
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    pendingIcon: require("../assets/icons/rating-circle-small.png"),
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-1.png"),
    iconColorName: "Joy",
    brandLogo: require("../assets/icons/icon2.png"),
  },
  {
    id: "3",
    image: require("../assets/icons/mdi_lock-open-outline.png"),
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    pendingIcon: require("../assets/icons/rating-circle-small.png"),
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-2.png"),
    iconColorName: "Happy",
    brandLogo: require("../assets/icons/icon3.png"),
  },
  {
    id: "4",
    image: require("../assets/icons/tabler_brush-off.png"),
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    pendingIcon: require("../assets/icons/rating-circle-small.png"),
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-3.png"),
    iconColorName: "Lucky",
    brandLogo: require("../assets/icons/icon4.png"),
  },
  {
    id: "5",
    image: require("../assets/icons/tabler_texture.png"),
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    pendingIcon: require("../assets/icons/rating-circle-small.png"),
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-4.png"),
    iconColorName: "Bliss",
    brandLogo: require("../assets/icons/icon5.png"),
  },
  {
    id: "6",
    image: require("../assets/icons/brail.png"),
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    pendingIcon: require("../assets/icons/rating-circle-small.png"),
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-5.png"),
    iconColorName: "Faith",
    brandLogo: require("../assets/icons/icon6.png"),
  },
  {
    id: "7",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-6.png"),
    iconColorName: "Grace",
  },
  {
    id: "8",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-7.png"),
    iconColorName: "Love",
  },
  {
    id: "9",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-8.png"),
    iconColorName: "Hope",
  },
  {
    id: "10",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-9.png"),
    iconColorName: "Believe",
  },
  {
    id: "11",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-10.png"),
    iconColorName: "Courage",
  },
];

const data = [
  {
    id: 1,
    brand: "rejuva minerals",
    name: "Bronzer - loose",
    price: "11.99",
    price_sign: "$",
    currency: "USD",
    image_link:
      "https://www.purpicks.com/wp-content/uploads/2018/03/rejuva-minerals-bronzer.jpg",
    product_link:
      "https://www.purpicks.com/product/rejuva-minerals-bronzer-caribbean/",
    website_link: "https://purpicks.com/",
    description:
      "Caribbean is a multi-purpose shade that is suitable for medium-tan skin tones. This shade may be used as a bronzer, or as a contour shade. \u003cul\u003e\u003cli\u003eOur bronzer has been enhanced with Fruits, Botanicals and Clays for their natural color, fragrance and antioxidant benefits!\u003c/li\u003e\u003cli\u003eBlended with Certified Organics Fruits and Botanicals\u003c/li\u003e\u003cli\u003eFormulated with common skin irritants.\u003c/li\u003e\u003cli\u003eOur bronzer will offer a natural “ultra sheer” semi-matte finish.\u003c/li\u003e\u003cli\u003eMade without any gluten containing ingredients\u003c/li\u003e\u003cli\u003eVEGAN!\u003c/li\u003e\u003cli\u003eEco Friendly jars!\u003c/li\u003e\u003c/ul\u003e",
    rating: 4.5,
    category: "powder",
    product_type: "bronzer",
    tag_list: ["Texture", "Easy Open", "No Tools"],
    created_at: "2018-06-30T19:19:31.682Z",
    updated_at: "2018-09-02T22:52:06.643Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/1032.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/032/original/open-uri20180630-4-1bl3btv?1530390381",
    product_colors: [
      { hex_value: "#DDA983", colour_name: "St Tropez" },
      { hex_value: "#9C7248", colour_name: "Bahama Mama" },
      { hex_value: "#B05665", colour_name: "Pink Shimmer" },
      { hex_value: "#783F30", colour_name: "Sunset Bronze" },
    ],
  },

  {
    id: 193,
    brand: "revlon",
    name: "Revlon ColorStay Skinny Liquid Liner ",
    price: "11.99",
    price_sign: "$",
    currency: "USD",
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/808647e541dad521fcc1fa0d728dd47e_ra,w158,h184_pa,w158,h184.jpg",
    product_link:
      "https://well.ca/products/revlon-colorstay-skinny-liquid-liner_101103.html",
    website_link: "https://well.ca",
    description:
      "Revlon ColorStay Skinny Liquid Liner gives you bold, even colour with a precise skinny tip applicator!Features:0.1mm skinny tip liner that lasts all dayEasy to apply with mistake proof controlBold, even color in one strokeOphthalmologist Tested\n",
    rating: 4.5,
    category: "liquid",
    product_type: "eyeliner",
    tag_list: ["Easy Apply", "Tactile\n Markers", "Ergonomic\n Design"],
    created_at: "2016-10-01T18:28:10.785Z",
    updated_at: "2017-12-23T20:51:21.915Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/193.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/193/original/data?1514062281",
    product_colors: [
      { hex_value: "#000006", colour_name: "Black Out " },
      { hex_value: "#2d6961", colour_name: "Green Spark " },
      { hex_value: "#63453b", colour_name: "Mahogany Flame " },
    ],
  },

  {
    id: 8,
    brand: "maybelline",
    name: "Maybelline Lash Stiletto Ultimate Length Mascara",
    price: "10.99",
    price_sign: null,
    currency: null,
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/812b5ae27df9be983052063d52d7ab7a_ra,w158,h184_pa,w158,h184.jpeg",
    product_link:
      "https://well.ca/products/maybelline-lash-stiletto-ultimate_17287.html",
    website_link: "https://well.ca",
    description:
      "The only mascara that does for lashes what stilettos do for legs.\n\n    The Grip \u0026 Extend brush grasps each lash and coats from every angle\n    Elastic formula stretches lashes for provocative length\n    Pro-Vitamin B-5 formula conditions and smoothes for black-patent shine\n    Contact lens safe and Ophthalmologist tested\n    Waterproof \n\n ",
    rating: 4.0,
    category: null,
    product_type: "mascara",
    tag_list: ["Easy Open", "Easy Apply", "Ergonomic\n Design"],
    created_at: "2016-10-01T18:10:55.406Z",
    updated_at: "2017-12-23T20:31:47.606Z",
    product_api_url: "https://makeup-api.herokuapp.com/api/v1/products/8.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/008/original/data?1514061107",
    product_colors: [{ hex_value: "#0E0F11", colour_name: "Very Black " }],
  },

  {
    id: 677,
    brand: "dior",
    name: "Fix It Colour",
    price: "23.5",
    price_sign: "£",
    currency: "GBP",
    image_link:
      "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_Y0929603_f092960100.jpg",
    product_link:
      "https://www.dior.com/beauty/en_gb/fragrance-beauty/makeup/face/primers/pr-primers-y0929603_f092960100-2-in-1-prime-colour-correct-face-eyes-lips.html",
    website_link: "https://www.dior.com",
    description:
      "Inspired by Backstage makeup techniques, Dior invents its first multipurpose colour concealer: 1 stick, 2 textures, 3 application areas, 4 expert shades to target and neutralize the colour imperfections of the complexion and around the eye and lip contours.",
    rating: null,
    category: "concealer",
    product_type: "foundation",
    tag_list: ["Texture", , "No Tools", "Ergonomic\n Design"],
    created_at: "2017-12-03T23:22:24.860Z",
    updated_at: "2017-12-23T20:58:46.299Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/677.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/677/original/open-uri20171223-4-16x99yk?1514062726",
    product_colors: [
      { hex_value: "#D1D4E3", colour_name: "100 Blue" },
      { hex_value: "#EEC8B9", colour_name: "200 Apricot" },
      { hex_value: "#EBDBB9", colour_name: "300 Yellow" },
      { hex_value: "#CEDFC6", colour_name: "400 Green" },
    ],
  },

  {
    id: 686,
    brand: "dior",
    name: "DIORBLUSH PRECIOUS ROCKS - Christmas 2017 Limited Edition",
    price: "0.0",
    price_sign: "£",
    currency: "GBP",
    image_link:
      "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_Y0715928_F071592864.jpg",
    product_link:
      "https://www.dior.com/beauty/en_gb/fragrance-beauty/makeup/look-exclusives/precious-rocks-collection/pr-preciousrockslook-y0715928_f071592864-vibrant-colour-powderblush.html",
    website_link: "https://www.dior.com",
    description:
      "The new limited-edition Diorblush showcases every facet of the Precious Rocks collection. Printed with a prismatic motif that reflects that of a precious stone, its sheer, peach colour blends seamlessly with your skin to deliver a fresh, crystal-clear complexion.",
    rating: null,
    category: null,
    product_type: "blush",
    tag_list: ["Texture", "Easy Apply", "Tactile\n Markers"],
    created_at: "2017-12-03T23:22:36.467Z",
    updated_at: "2017-12-23T20:58:48.998Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/686.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/686/original/open-uri20171223-4-msf54n?1514062728",
    product_colors: [
      { hex_value: "#EF8687", colour_name: "864 Precious Rocks" },
    ],
  },

  {
    id: 345,
    brand: "l'oreal",
    name: "L'Oreal Paris Visible Lift Blur Foundation ",
    price: "18.99",
    price_sign: null,
    currency: null,
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/c207687e567547445338321ae28c9b96_ra,w158,h184_pa,w158,h184.jpeg",
    product_link:
      "https://well.ca/products/loreal-paris-visible-lift-blur_96664.html",
    website_link: "https://well.ca",
    description:
      "Discover instantly ageless skin. L'Oreal Paris Visible Lift Blur™ features Opti-Blur™ \ntechnology with a cushiony soft texture that glides on to blur the look \nof lines, wrinkles and uneven skin tone in seconds. Skin looks \nflawlessly smooth, instantly perfected.Ingredients: CYCLOPENTASILOXANE,\nAQUA, ETHYLHEXYL\nMETHOXYCINNAMATE,\nDIMETHICONE\nCROSSPOLYMER,\nGLYCERIN, ISOTRIDECYL\nISONONANOATE, PEG-9\nPOLYDIMETHYLSILOXYETHYL\nDIMETHICONE,\nDISTEARDIMONIUM\nHECTORITE,\nPHENOXYETHANOL,\nPEG-10 DIMETHICONE,\nHYDROLYZED WHEAT\nPROTEIN/PVP\nCROSSPOLYMER,\nDISODIUM STEAROYL\nGLUTAMATE,\nCHLORPHENESIN,\nMETHYLPARABEN,\nLYCIUM BARBARUM\nFRUIT EXTRACT,\nACRYLATES\nCOPOLYMER,\nPOTASSIUM SORBATE,\nETHYLPARABEN,\nTOCOPHEROL,\nASCORBYL PALMITATE,\nPANTHENOL, PEG-9,\nALUMINUM HYDROXIDE,\nCITRIC ACID, SODIUM\nPCA, UREA, TREHALOSE,\nPOLYQUATERNIUM-51,\nSOLUBLE COLLAGEN,\nSODIUM HYALURONATE.\n[+/- : CI 77891, MICA,\nCI 77492, CI 77491,\nCI 77499]\n\n\n",
    rating: null,
    category: "liquid",
    product_type: "foundation",
    tag_list: ["Texture", "No Tools", "Tactile\n Markers"],
    created_at: "2016-10-01T18:32:08.987Z",
    updated_at: "2017-12-23T21:08:25.277Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/345.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/345/original/data?1514063305",
    product_colors: [
      { hex_value: "#F9D4B6", colour_name: "Light Ivory " },
      { hex_value: "#FCD1B9", colour_name: "Classic Ivory " },
      { hex_value: "#E4B99C", colour_name: "Nude Beige  " },
      { hex_value: "#EAC2A8", colour_name: "Creamy Natural " },
      { hex_value: "#E1B090", colour_name: "Natural Buff " },
      { hex_value: "#D09F80", colour_name: "Natural Beige " },
      { hex_value: "#D3A389", colour_name: "Buff Beige " },
      { hex_value: "#D2A279", colour_name: "Sun Beige " },
    ],
  },

  {
    id: 298,
    brand: "revlon",
    name: "Revlon PhotoReady Primer, Shadow + Sparkle Palette",
    price: "14.49",
    price_sign: null,
    currency: null,
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/b35505ef545ea7e478d0da882d8e93d8_ra,w158,h184_pa,w158,h184.jpeg",
    product_link:
      "https://well.ca/products/revlon-photoready-primer-shadow_67144.html",
    website_link: "https://well.ca",
    description:
      "Easily create limitless looks with this one Revlon PhotoReady Primer, Shadow + Sparkle Palette.\nThe palette features a primer, 3 highly pigmented shadows, and a \nsparkle top coat. You can use wet for more colour intensity and add the sparkle top \ncoat for a multi-dimensional, intensely shimmering effect.Shadow Shades:",
    rating: 5.0,
    category: "palette",
    product_type: "eyeshadow",
    tag_list: ["Easy Open", "Tactile\n Markers", "Ergonomic\n Design"],
    created_at: "2016-10-01T18:30:44.974Z",
    updated_at: "2017-12-26T00:33:00.289Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/298.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/298/original/data?1514063296",
    product_colors: [],
  },

  {
    id: 527,
    brand: "smashbox",
    name: "Full Exposure Palette",
    price: "52.0",
    price_sign: null,
    currency: null,
    image_link:
      "https://www.smashbox.com/media/images/products/388x396/sbx_sku_60560_388x396_0.jpg",
    product_link:
      "http://www.smashbox.com/product/6029/34102/eyes/eye-shadow/full-exposure-palette",
    website_link: "http://www.smashbox.com/",
    description:
      "Pros in our L.A. studio use neutral eye shadows constantly, and they LOVE having the option to turn luster up or down. That’s why we created this palette of long-wearing shimmers and velvety-smooth mattes in a range of 14 must-have shades. They’re super blendable and anything but basic! Bonus: this palette comes with a deluxe sample of our shadow primer to help you lock on color for 24 hours.For added high wattage, press a shimmer shade into center of lid with fingertips.Mix mattes and shimmers for a camera-ready lookComes with a double-ended shadow brush14 universal shadows from nudes to blacksBonus: Includes 24 Hour Shadow Primer sampleCheck out our #ShapeMatters eye chart, featuring 6 eye shapes for inspiration.Pros in our L.A. studio use neutral eye shadows constantly, and they LOVE having the option to turn luster up or down. That’s why we created this palette of long-wearing shimmers and velvety-smooth mattes in a range of 14 must-have shades. They’re super blendable and anything but basic! Bonus: this palette comes with a deluxe sample of our shadow primer to help you lock on color for 24 hours.For added high wattage, press a shimmer shade into center of lid with fingertips.Mix mattes and shimmers for a camera-ready lookComes with a double-ended shadow brush14 universal shadows from nudes to blacksBonus: Includes 24 Hour Shadow Primer sampleCheck out our #ShapeMatters eye chart, featuring 6 eye shapes for inspiration.",
    rating: null,
    category: "palette",
    product_type: "eyeshadow",
    tag_list: [
      "Texture",
      "Easy Open",
      "No Tools",
      "Easy Apply",
      "Tactile\n Markers",
      "Ergonomic\n Design",
    ],
    created_at: "2016-10-02T01:32:54.786Z",
    updated_at: "2017-12-26T00:33:00.593Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/527.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/527/original/open-uri20171223-4-aqs6ml?1514062151",
    product_colors: [],
  },

  {
    id: 660,
    brand: "dior",
    name: "Rouge Dior",
    price: "27.5",
    price_sign: "£",
    currency: "GBP",
    image_link:
      "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_y0027830.jpg",
    product_link:
      "https://www.dior.com/beauty/en_gb/fragrance-beauty/makeup/lips/lipsticks/pr-lipsticks-y0027830_f002783028-couture-colour-from-satin-to-matte-comfort-wear.html",
    website_link: "https://www.dior.com",
    description:
      "With Rouge Dior and its 16h* comfort cult formula, women feel good, no matter the colour, no matter the satin or matte finish.",
    rating: null,
    category: "lipstick",
    product_type: "lipstick",
    tag_list: ["Texture", "Easy Open", "No Tools", "Easy Apply"],
    created_at: "2017-12-03T23:21:45.703Z",
    updated_at: "2017-12-23T20:58:41.827Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/660.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/660/original/open-uri20171223-4-19og9mv?1514062721",
    product_colors: [
      { hex_value: "#E83F4A", colour_name: "028 Actrice" },
      { hex_value: "#E40068", colour_name: "047 Miss" },
      { hex_value: "#D36179", colour_name: "060 Première" },
      { hex_value: "#D91920", colour_name: "080 Red Smile" },
      { hex_value: "#BBC3C2", colour_name: "207 Montaigne Matte" },
      { hex_value: "#D07866", colour_name: "219 Rose Montaigne" },
    ],
  },

  {
    id: 854,
    brand: "nyx",
    name: "Liquid Suede Cream Lipstick",
    price: "7.0",
    price_sign: "$",
    currency: "USD",
    image_link:
      "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa19d7c26/ProductImages/Lips/Liquid_Suede_Cream_Lipstick/liquidsuedecreamlipstick_main.jpg?sw=390\u0026sh=390\u0026sm=fit",
    product_link:
      "https://www.nyxcosmetics.com/liquid-suede-cream-lipstick/NYX_201.html?cgid=lipstick",
    website_link: "https://www.nyxcosmetics.com",
    description:
      "Doll up your lips in plush and vibrant color! Our Liquid Suede Cream Lipstick glides on and sets into a striking matte finish. Now available in 12 more velvety-soft shades, this waterproof lippie creates a positively polished look with every swipe.",
    rating: null,
    category: "lipstick",
    product_type: "lipstick",
    tag_list: ["Texture", "No Tools", "Ergonomic\n Design"],
    created_at: "2017-12-24T02:25:46.851Z",
    updated_at: "2017-12-24T02:26:39.313Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/854.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/854/original/open-uri20171224-4-seihwb?1514082398",
    product_colors: [
      { hex_value: "#AE5350", colour_name: "Soft-Spoken" },
      { hex_value: "#815049", colour_name: "Brooklyn Thorn" },
      { hex_value: "#7E5036", colour_name: "Downtown Beauty" },
      { hex_value: "#585455", colour_name: "Stone Fox" },
      { hex_value: "#2A2829", colour_name: "Alien" },
    ],
  },

  {
    id: 948,
    brand: "nyx",
    name: "Colored Felt Tip Liner",
    price: "10.0",
    price_sign: "$",
    currency: "USD",
    image_link:
      "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwa801b855/ProductImages/2016/Eyes/Colored_Felt_Tip_Liner/coloredfelttipliner_main.jpg?sw=390\u0026sh=390\u0026sm=fit",
    product_link:
      "https://www.nyxcosmetics.com/colored-felt-tip-liner/NYX_307.html?cgid=eyeliner",
    website_link: "https://www.nyxcosmetics.com",
    description:
      "Line your lids with style and rock a range of captivating looks with our new Colored Felt Tip Liners. Available in six brilliant shades, each liquid liner features a precision felt-tip brush and an easy-to-use “grip zone” for precise, clean, pro-level application every time.",
    rating: null,
    category: "liquid",
    product_type: "eyeliner",
    tag_list: ["Texture", "Easy Open", "Ergonomic\n Design"],
    created_at: "2017-12-24T02:31:43.106Z",
    updated_at: "2017-12-24T02:31:43.448Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/948.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/948/original/open-uri20171224-4-1cdu2rb?1514082702",
    product_colors: [
      { hex_value: "#003D37", colour_name: "Teal" },
      { hex_value: "#052363", colour_name: "Royal Blue" },
      { hex_value: "#0B5489", colour_name: "Cobalt Blue" },
      { hex_value: "#F9F9F9", colour_name: "White" },
      { hex_value: "#363636", colour_name: "Grey" },
      { hex_value: "#4E2D1C", colour_name: "Chocolate Brown" },
    ],
  },
];

const features = [
  {
    id: "1",
    tag_list: "Easy Apply",
    accessibilityIcon: require("../assets/icons/ri_hand-heart-line.png"),
    rating: "A",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    screenName: "Category",
    navigate: "ProductDetails",
  },
  {
    id: "2",
    tag_list: "Ergonomic\n Design",
    accessibilityIcon: require("../assets/icons/icon-park-outline_foundation-makeup.png"),
    rating: "B",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    screenName: "Category",
    navigate: "ProductDetails2",
  },
  {
    id: "3",
    tag_list: "Easy Open",
    accessibilityIcon: require("../assets/icons/mdi_lock-open-outline.png"),
    rating: "B",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    screenName: "Category",
    navigate: "ProductDetails3",
  },
  {
    id: "4",
    tag_list: "No Tools",
    accessibilityIcon: require("../assets/icons/tabler_brush-off.png"),
    rating: "A",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    screenName: "Category",
  },
  {
    id: "5",
    tag_list: "Texture",
    accessibilityIcon: require("../assets/icons/tabler_texture.png"),
    screenName: "Category",
    rating: "A",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    screenName: "Category",
  },
  {
    id: "6",
    tag_list: "Tactile\n Markers",
    accessibilityIcon: require("../assets/icons/brail.png"),
    rating: "B",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    screenName: "Category",
  },
];

const highlyRated = [
  {
    id: "1", //id
    brand: "Rare Beauty",
    name: "Soft Pinch Liquid Blush",
    image_link: require("../assets/images/demo.png"), //image_Link
    accessibility: "Ergonomic Design", //tag_list
    buyItAgain: 92, //! NEW
    numberOfReviews: 1598, //! NEW
    rating: "A",
    pending: "...",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    navRoute: "ProductDetails",
  },
  {
    id: "2",
    brand: "YSL",
    name: "Slim Matte Longwear Lipstick",
    image_link: require("../assets/images/m11.jpeg"),
    accessibility: "Texture",
    buyItAgain: 90,
    numberOfReviews: 2014,
    rating: "B",
    pending: "...",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    navRoute: "ProductDetails2",
  },
  {
    id: "3",
    brand: "SkinCeuticals",
    name: "C E Ferulic (1 fl. oz.)",
    image_link: require("../assets/images/m4.jpeg"),
    accessibility: "Easy Apply",
    buyItAgain: 88,
    numberOfReviews: 666,
    rating: "B",
    pending: "...",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    navRoute: "ProductDetails3",
  },
  {
    id: "4",
    brand: "TOM FORD",
    name: "Eye Color Bold Eyeshadow Palette",
    image_link: require("../assets/images/m7.jpeg"),
    accessibility: "No Tools",
    buyItAgain: 92,
    numberOfReviews: 1294,
    rating: "A",
    pending: "...",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
    navRoute: "ProductDetails4",
  },
  {
    id: "5",
    brand: "Cosmetic",
    name: "Daily Dose",
    image_link: require("../assets/images/m5.jpeg"),
    accessibility: "Tactile Markers",
    buyItAgain: 97,
    numberOfReviews: 894,
    rating: "B",
    pending: "...",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
  },
  {
    id: "6",
    brand: "CORS",
    name: "Releaf Balm",
    image_link: require("../assets/images/m6.jpeg"),
    accessibility: "No Tools",
    buyItAgain: 86,
    numberOfReviews: 789,
    rating: "A",
    pending: "...",
    heart: require("../assets/icons/mdi_cards-heart-outline-white.png"),
  },
];

const recentlyAdded = [
  {
    id: "1", //id
    text: "Brush blissful", //name
    brand: "YSL",
    image_link: require("../assets/images/m11.jpeg"), //image_Link
    review: "Pending Review", //!NEW
    screenName: "ThreeD",
  },
  {
    id: "2",
    text: "Rejuvenate bubbly",
    brand: "Forbiden Beauty",
    image_link: require("../assets/images/m14.jpeg"),
    review: "Pending Review",
    screenName: "ThreeD2",
  },
  {
    id: "3",
    text: "Fabulous glowy",
    brand: "Gucci",
    image_link: require("../assets/images/m17.jpeg"),
    review: "Pending Review",
    screenName: "ThreeD3",
  },
  {
    id: "4",
    text: "Fluffly cream dream",
    brand: "Bobbi Brown",
    image_link: require("../assets/images/m16.jpeg"),
    review: "Pending Review",
  },
  {
    id: "5",
    text: "Lipstick Berlin marvelous",
    brand: "Chanel",
    image_link: require("../assets/images/m13.jpeg"),
    review: "Pending Review",
  },
  {
    id: "6",
    text: "Hydrating lotion serene",
    brand: "Miss Swiss",
    image_link: require("../assets/images/m15.jpeg"),
    review: "Pending Review",
  },
];

const accessibleBrands = [
  {
    id: "1", //id
    brand: "Rare Beauty",
    text: "Ergonomic Design", //tag_list
    image_link: require("../assets/images/m7.jpeg"),
    brandLogo: require("../assets/icons/icon1.png"), //< assets????
  },
  {
    id: "2",
    brand: "Kohls Kreative",
    text: "Texture",
    image_link: require("../assets/images/m8.jpeg"),
    brandLogo: require("../assets/icons/icon2.png"),
  },
  {
    id: "3",
    brand: "Nora",
    text: "No Tools",
    image_link: require("../assets/images/m9.jpeg"),
    brandLogo: require("../assets/icons/icon3.png"),
  },
  {
    id: "4",
    brand: "CORS",
    text: "Tactile Markers",
    image_link: require("../assets/images/m10.jpeg"),
    brandLogo: require("../assets/icons/icon4.png"),
  },
  {
    id: "5",
    brand: "YSL",
    text: "Easy To Open",
    image_link: require("../assets/images/m11.jpeg"),
    brandLogo: require("../assets/icons/icon5.png"),
  },
  {
    id: "6",
    brand: "Poko",
    text: "Easy To Apply",
    image_link: require("../assets/images/m12.jpeg"),
    brandLogo: require("../assets/icons/icon6.png"),
  },
];

const productColorsIcons = [
  {
    id: "1",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48.png"),
    iconColorName: "Greatful", //! NEW product_colors[color].product_name
    accessibility: "Easy Open", //tag_list
  },
  {
    id: "2",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-1.png"),
    iconColorName: "Joy",
    accessibility: "Easy Open",
  },
  {
    id: "3",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-2.png"),
    iconColorName: "Happy",
    accessibility: "Easy Open",
  },
  {
    id: "4",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-3.png"),
    iconColorName: "Lucky",
    accessibility: "Easy Open",
  },
  {
    id: "5",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-4.png"),
    iconColorName: "Bliss",
    accessibility: "Easy Open",
  },
  {
    id: "6",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-5.png"),
    iconColorName: "Faith",
    accessibility: "Easy Open",
  },
  {
    id: "7",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-6.png"),
    iconColorName: "Grace",
    accessibility: "Easy Open",
  },
  {
    id: "8",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-7.png"),
    iconColorName: "Love",
    accessibility: "Easy Open",
  },
  {
    id: "9",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-8.png"),
    iconColorName: "Hope",
    accessibility: "Easy Open",
  },
  {
    id: "10",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-9.png"),
    iconColorName: "Believe",
    accessibility: "Easy Open",
  },
  {
    id: "11",
    ColorOptionsIcon: require("../assets/icons/Ellipse%48-10.png"),
    iconColorName: "Courage",
    accessibility: "Easy Open",
  },
];

export {
  data,
  features,
  assets,
  productColorsIcons,
  highlyRated,
  accessibleBrands,
  recentlyAdded,
};
