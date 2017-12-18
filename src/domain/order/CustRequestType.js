
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

import {CustRequestTypeAttrType} from '../order/CustRequestTypeAttr.js';
import {PartyRelationshipType} from '../party/PartyRelationship.js';
import {CustRequestType} from '../order/CustRequest.js';
import {CustRequestResolutionType} from '../order/CustRequestResolution.js';
import {CustRequestCategoryType} from '../order/CustRequestCategory.js';


const CustRequestTypeType = new GraphQLObjectType({
  name: 'CustRequestTypeType',
  description: 'Type for CustRequestType in order',

  fields: () => ({
    parentType: {
      type: CustRequestTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbiz.load(`order/custRequest/custRequestTypes/find?custRequestTypeId=${custRequestType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    party: {
      type: new GraphQLList(PartyRelationshipType),
      args : {partyId: {type: GraphQLString}},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyRelationships/find?partyIdFrom=${custRequestType.partyId}`)
    },
    custRequestResolutions: {
      type: new GraphQLList(CustRequestResolutionType),
      args : {},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestResolutions/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    },
    custRequests: {
      type: new GraphQLList(CustRequestType),
      args : {},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`order/custRequests/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    },
    custRequestCategories: {
      type: new GraphQLList(CustRequestCategoryType),
      args : {},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestCategorys/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    },
    custRequestTypes: {
      type: new GraphQLList(CustRequestTypeType),
      args : {},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestTypes/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    },
    custRequestTypeAttrs: {
      type: new GraphQLList(CustRequestTypeAttrType),
      args : {},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestTypeAttrs/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    }
  })
});

export {CustRequestTypeType};
    




const CustRequestTypeInputType = new GraphQLInputObjectType({
  name: 'CustRequestTypeInputType',
  description: 'input type for CustRequestType',

  fields: () => ({
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {CustRequestTypeInputType};
    