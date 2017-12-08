
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

import {CustRequestType} from '../order/CustRequest.js';
import {ContentType} from '../content/Content.js';


const CustRequestContentType = new GraphQLObjectType({
  name: 'CustRequestContentType',
  description: 'Type for CustRequestContent in order',

  fields: () => ({
    fromDate: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (custRequestContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${custRequestContent.contentId}`)
    },
    custRequest: {
      type: CustRequestType,
      args : {custRequestId: {type: GraphQLString}},
      resolve: (custRequestContent, args, {loaders}) => loaders.ofbiz.load(`custRequests/find?custRequestId=${custRequestContent.custRequestId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {CustRequestContentType};
    




const CustRequestContentInputType = new GraphQLInputObjectType({
  name: 'CustRequestContentInputType',
  description: 'input type for CustRequestContent in order',

  fields: () => ({
    fromDate: {type: GraphQLString},
    contentId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {CustRequestContentInputType};
    