
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {NeedTypeType} from '../party/NeedTypeType.js';
import {PartyType} from '../party/PartyType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {ProductCategoryType} from '../product/ProductCategoryType.js';
import {ProductType} from '../product/ProductType.js';
import {PartyTypeType} from '../party/PartyTypeType.js';


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
    