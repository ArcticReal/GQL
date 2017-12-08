
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

import {NeedTypeType} from '../party/NeedType.js';
import {PartyType} from '../party/Party.js';
import {RoleTypeType} from '../party/RoleType.js';
import {CommunicationEventType} from '../party/CommunicationEvent.js';
import {ProductCategoryType} from '../product/ProductCategory.js';
import {ProductType} from '../product/Product.js';
import {PartyTypeType} from '../party/PartyType.js';


const PartyNeedType = new GraphQLObjectType({
  name: 'PartyNeedType',
  description: 'Type for PartyNeed in party',

  fields: () => ({
    partyType: {
      type: PartyTypeType,
      args : {partyTypeId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`partyTypes/find?partyTypeId=${partyNeed.partyTypeId}`)
    },
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${partyNeed.roleTypeId}`)
    },
    needType: {
      type: NeedTypeType,
      args : {needTypeId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`needTypes/find?needTypeId=${partyNeed.needTypeId}`)
    },
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${partyNeed.productCategoryId}`)
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
      resolve: (partyNeed, args, {loaders}) => loaders.ofbiz.load(`communicationEvents/find?communicationEventId=${partyNeed.communicationEventId}`)
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
    




const PartyNeedInputType = new GraphQLInputObjectType({
  name: 'PartyNeedInputType',
  description: 'input type for PartyNeed in party',

  fields: () => ({
    partyTypeId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    needTypeId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    partyNeedId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyId: {type: GraphQLString},
    datetimeRecorded: {type: GraphQLString}
  })
});

export {PartyNeedInputType};
    