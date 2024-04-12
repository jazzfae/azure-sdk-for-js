// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.shared.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: [
        "test/internal/unit/{,!(browser)/**/}*.spec.ts",
        "test/public/unit/{,!(browser)/**/}*.spec.ts",
      ],
    },
  }),
);
