import { WomenBagData } from "./WomenBags";
import { WomenSmallBag } from "./WomenSmallBags";
import { WomenAccessoriesData } from "./WomenAccessories";
import { WomenShoe } from "./WomenShoe";
import { MenBagsData } from "./MenBags";
import { MenShoeData } from "./MenShoe";
import { MenClothesData } from "./MenClothes";
import { MenLeatherGoodsData } from "./MenSmallLeatherGoods";

export const CombinedData = [
  ...WomenBagData,
  ...WomenSmallBag,
  ...WomenAccessoriesData,
  ...WomenShoe,
  ...MenBagsData,
  ...MenShoeData,
  ...MenClothesData,
  ...MenLeatherGoodsData,
];
