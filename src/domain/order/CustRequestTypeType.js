
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestTypeAttrType} from '../order/CustRequestTypeAttrType.js';
import {PartyRelationshipType} from '../party/PartyRelationshipType.js';
import {CustRequestType} from '../order/CustRequestType.js';
import {CustRequestResolutionType} from '../order/CustRequestResolutionType.js';
import {CustRequestCategoryType} from '../order/CustRequestCategoryType.js';


const CustRequestTypeType = new GraphQLObjectType({
  name: 'CustRequestTypeType',
  description: 'Type for CustRequestType in order',

  fields: () => ({
    parentType: {
      type: CustRequestTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbiz.load(`custRequestTypes/find?custRequestTypeId=${custRequestType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    party: {
      type: new GraphQLList(PartyRelationshipType),
      args : {partyId: {type: GraphQLString}},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`partyRelationships/find?partyIdFrom=${custRequestType.partyId}`)
    },
    custRequestResolution: {
      type: new GraphQLList(CustRequestResolutionType),
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`custRequestResolutions/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    },
    custRequest: {
      type: new GraphQLList(CustRequestType),
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`custRequests/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    },
    custRequestCategory: {
      type: new GraphQLList(CustRequestCategoryType),
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`custRequestCategorys/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    },
    custRequestType: {
      type: new GraphQLList(CustRequestTypeType),
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`custRequestTypes/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    },
    custRequestTypeAttr: {
      type: new GraphQLList(CustRequestTypeAttrType),
      args : {custRequestTypeId: {type: GraphQLString}},
      resolve: (custRequestType, args, {loaders}) => loaders.ofbizArray.load(`custRequestTypeAttrs/find?custRequestTypeId=${custRequestType.custRequestTypeId}`)
    }
  })
});

export {CustRequestTypeType};
    