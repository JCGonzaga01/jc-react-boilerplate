// NOTE:
// Make sure to all add here all newly implemented middlewares to easily consolidate it when importing as middlewares
import * as logger from "./logger-service";
import * as dummy from "./apiClient/dummy";

export default {
  logger,
  api: {
    dummy,
  },
};
