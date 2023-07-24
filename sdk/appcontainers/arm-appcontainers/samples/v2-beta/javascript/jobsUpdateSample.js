/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Patches a Container Apps Job using JSON Merge Patch
 *
 * @summary Patches a Container Apps Job using JSON Merge Patch
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-11-01-preview/examples/Job_Patch.json
 */
async function patchContainerAppsJob() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPCONTAINERS_RESOURCE_GROUP"] || "rg";
  const jobName = "testcontainerAppsJob0";
  const jobEnvelope = {
    properties: {
      configuration: {
        manualTriggerConfig: { parallelism: 4, replicaCompletionCount: 1 },
        replicaRetryLimit: 10,
        replicaTimeout: 10,
        triggerType: "Manual",
      },
      template: {
        containers: [
          {
            name: "testcontainerAppsJob0",
            image: "repo/testcontainerAppsJob0:v1",
            probes: [
              {
                type: "Liveness",
                httpGet: {
                  path: "/health",
                  httpHeaders: [{ name: "Custom-Header", value: "Awesome" }],
                  port: 8080,
                },
                initialDelaySeconds: 3,
                periodSeconds: 3,
              },
            ],
          },
        ],
        initContainers: [
          {
            name: "testinitcontainerAppsJob0",
            args: ["-c", "while true; do echo hello; sleep 10;done"],
            command: ["/bin/sh"],
            image: "repo/testcontainerAppsJob0:v4",
            resources: { cpu: 0.2, memory: "100Mi" },
          },
        ],
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.jobs.beginUpdateAndWait(resourceGroupName, jobName, jobEnvelope);
  console.log(result);
}

async function main() {
  patchContainerAppsJob();
}

main().catch(console.error);
