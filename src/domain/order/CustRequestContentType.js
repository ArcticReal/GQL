
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CustRequestType} from '../order/CustRequestType.js';
import {ContentType} from '../content/ContentType.js';


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
    