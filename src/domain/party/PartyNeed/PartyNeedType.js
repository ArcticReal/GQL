
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

import {NeedTypeType} from '../../party/NeedType/NeedTypeType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';
import {ProductCategoryType} from '../../product/ProductCategory/ProductCategoryType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {PartyTypeType} from '../../party/PartyType/PartyTypeType.js';


const PartyNeedType = new GraphQLObjectType({
  name: 'PartyNeedType',
  description: 'Type for PartyNeed in party',

  fields: () => ({
    partyType: {
      type: PartyTypeType,
      args : {partyTypeId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`party/party/partyTypes/find?partyTypeId=${partyNeed.partyTypeId}`)
    },
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${partyNeed.roleTypeId}`)
    },
    needType: {
      type: NeedTypeType,
      args : {needTypeId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`party/needTypes/find?needTypeId=${partyNeed.needTypeId}`)
    },
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${partyNeed.productCategoryId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${partyNeed.productId}`)
    },
    visitId: {type: GraphQLString},
    partyNeedId: {type: GraphQLString},
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${partyNeed.communicationEventId}`)
    },
    description: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyNeed.partyId}`)
    },
    datetimeRecorded: {type: GraphQLString}
  })
});

export {PartyNeedType};
    