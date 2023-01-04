/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

import {Session} from '../../../../lib/session/session';
import {testConfig, queueMockResponse} from '../../../../lib/__tests__/test-helper';
import {ApiVersion} from '../../../../lib/types';
import {shopifyApi, Shopify} from '../../../../lib';

import {restResources} from '../../2023-01';

let shopify: Shopify<typeof restResources>;

beforeEach(() => {
  shopify = shopifyApi({
    ...testConfig,
    apiVersion: ApiVersion.January23,
    restResources,
  });
});

describe('ProductResourceFeedback resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const session = new Session({
    id: '1234',
    shop: domain,
    state: '1234',
    isOnline: true,
  });
  session.accessToken = 'this_is_a_test_token';

  it('test_1', async () => {
    queueMockResponse(JSON.stringify({"resource_feedback": {"created_at": "2023-01-03T12:45:42-05:00", "updated_at": "2023-01-03T12:45:42-05:00", "resource_id": 632910392, "resource_type": "Product", "resource_updated_at": "2023-01-03T12:21:36-05:00", "messages": ["Needs at least one image."], "feedback_generated_at": "2023-01-03T12:45:40-05:00", "state": "requires_action"}}));

    const product_resource_feedback = new shopify.rest.ProductResourceFeedback({session: session});
    product_resource_feedback.product_id = 632910392;
    product_resource_feedback.state = "requires_action";
    product_resource_feedback.messages = [
      "Needs at least one image."
    ];
    product_resource_feedback.resource_updated_at = "2023-01-03T12:21:36-05:00";
    product_resource_feedback.feedback_generated_at = "2023-01-03T17:45:40.928568Z";
    await product_resource_feedback.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2023-01/products/632910392/resource_feedback.json',
      query: '',
      headers,
      data: { "resource_feedback": {"state": "requires_action", "messages": ["Needs at least one image."], "resource_updated_at": "2023-01-03T12:21:36-05:00", "feedback_generated_at": "2023-01-03T17:45:40.928568Z"} }
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
    queueMockResponse(JSON.stringify({"resource_feedback": {"created_at": "2023-01-03T12:45:45-05:00", "updated_at": "2023-01-03T12:45:45-05:00", "resource_id": 632910392, "resource_type": "Product", "resource_updated_at": "2023-01-03T12:21:36-05:00", "messages": [], "feedback_generated_at": "2023-01-03T12:45:44-05:00", "state": "success"}}));

    const product_resource_feedback = new shopify.rest.ProductResourceFeedback({session: session});
    product_resource_feedback.product_id = 632910392;
    product_resource_feedback.state = "success";
    product_resource_feedback.resource_updated_at = "2023-01-03T12:21:36-05:00";
    product_resource_feedback.feedback_generated_at = "2023-01-03T17:45:44.063762Z";
    await product_resource_feedback.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2023-01/products/632910392/resource_feedback.json',
      query: '',
      headers,
      data: { "resource_feedback": {"state": "success", "resource_updated_at": "2023-01-03T12:21:36-05:00", "feedback_generated_at": "2023-01-03T17:45:44.063762Z"} }
    }).toMatchMadeHttpRequest();
  });

  it('test_3', async () => {
    queueMockResponse(JSON.stringify({"resource_feedback": [{"created_at": "2023-01-03T12:45:45-05:00", "updated_at": "2023-01-03T12:45:45-05:00", "resource_id": 632910392, "resource_type": "Product", "resource_updated_at": "2023-01-03T12:21:36-05:00", "messages": ["Needs at least one image."], "feedback_generated_at": "2023-01-03T11:45:45-05:00", "state": "requires_action"}]}));

    await shopify.rest.ProductResourceFeedback.all({
      session: session,
      product_id: 632910392,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2023-01/products/632910392/resource_feedback.json',
      query: '',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

});
