/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  SystemTopic,
  SystemTopicsListBySubscriptionOptionalParams,
  SystemTopicsListByResourceGroupOptionalParams,
  SystemTopicsGetOptionalParams,
  SystemTopicsGetResponse,
  SystemTopicsCreateOrUpdateOptionalParams,
  SystemTopicsCreateOrUpdateResponse,
  SystemTopicsDeleteOptionalParams,
  SystemTopicUpdateParameters,
  SystemTopicsUpdateOptionalParams,
  SystemTopicsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SystemTopics. */
export interface SystemTopics {
  /**
   * List all the system topics under an Azure subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SystemTopicsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SystemTopic>;
  /**
   * List all the system topics under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SystemTopicsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SystemTopic>;
  /**
   * Get properties of a system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    systemTopicName: string,
    options?: SystemTopicsGetOptionalParams
  ): Promise<SystemTopicsGetResponse>;
  /**
   * Asynchronously creates a new system topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicInfo System Topic information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicInfo: SystemTopic,
    options?: SystemTopicsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SystemTopicsCreateOrUpdateResponse>,
      SystemTopicsCreateOrUpdateResponse
    >
  >;
  /**
   * Asynchronously creates a new system topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicInfo System Topic information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicInfo: SystemTopic,
    options?: SystemTopicsCreateOrUpdateOptionalParams
  ): Promise<SystemTopicsCreateOrUpdateResponse>;
  /**
   * Delete existing system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    systemTopicName: string,
    options?: SystemTopicsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete existing system topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    systemTopicName: string,
    options?: SystemTopicsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Asynchronously updates a system topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicUpdateParameters SystemTopic update information.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicUpdateParameters: SystemTopicUpdateParameters,
    options?: SystemTopicsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SystemTopicsUpdateResponse>,
      SystemTopicsUpdateResponse
    >
  >;
  /**
   * Asynchronously updates a system topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param systemTopicName Name of the system topic.
   * @param systemTopicUpdateParameters SystemTopic update information.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    systemTopicName: string,
    systemTopicUpdateParameters: SystemTopicUpdateParameters,
    options?: SystemTopicsUpdateOptionalParams
  ): Promise<SystemTopicsUpdateResponse>;
}
