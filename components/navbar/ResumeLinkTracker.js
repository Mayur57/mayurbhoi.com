import { event } from "../../libs/trackers";

const ResumeLinkTracker = () => {
  event({
    action: "view_item",
    params: {
      message: "Viewed resume.",
    },
  });
};

export default ResumeLinkTracker;
