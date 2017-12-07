
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnItemType} from '../order/ReturnItemType.js';


const ReturnReasonType = new GraphQLObjectType({
  name: 'ReturnReasonType',
  description: 'Type for ReturnReason in order',

  fields: () => ({
    returnReasonId: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceId: {type: GraphQLString},
    returnItem: {
      type: new GraphQLList(ReturnItemType),
      args : {returnReasonId: {type: GraphQLString}},
      resolve: (returnReason, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?returnReasonId=${returnReason.returnReasonId}`)
    }
  })
});

export {ReturnReasonType};
    