import * as logger from "./logger-service";
import * as dummy from "./apiClient/dummy";

export default {
  logger,
  api: {
    dummy,
  },
};
