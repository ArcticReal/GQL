
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';
import {ProductType} from '../../product/Product/ProductType.js';


const CommunicationEventProductType = new GraphQLObjectType({
  name: 'CommunicationEventProductType',
  description: 'Type for CommunicationEventProduct in party',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (communicationEventProduct, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${communicationEventProduct.productId}`)
    },
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (communicationEventProduct, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${communicationEventProduct.communicationEventId}`)
    }
  })
});

export {CommunicationEventProductType};
    