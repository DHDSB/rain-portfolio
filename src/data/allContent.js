import { markdownItems } from "./markdownContent.js";

export const allContentItems = markdownItems.filter(
  (item) => item.published !== false
);