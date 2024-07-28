import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import settings from "./settings";
import comment from "./comment";
import service from "./service";
import accordion from "../modules/accordion";
import group from "../modules/group";
import heroCover from "../modules/hero.cover";
import heroPlain from "../modules/hero.plain";
import list from "../modules/list";
import richlist from "../modules/richlist";
import emailSubscriptionModule from "../modules/emailSubscription";
import team from "./team";

export const schemaTypes = [
  post,
  author,
  category,
  service,
  settings,
  blockContent,
  team,
  comment,

  // modules
  accordion,
  group,
  heroCover,
  heroPlain,
  list,
  richlist,
  emailSubscriptionModule,
];
