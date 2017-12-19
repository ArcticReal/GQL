
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

import {ReturnItemType} from '../../order/ReturnItem/ReturnItemType.js';


const ReturnReasonType = new GraphQLObjectType({
  name: 'ReturnReasonType',
  description: 'Type for ReturnReason in order',

  fields: () => ({
    returnReasonId: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceId: {type: GraphQLString},
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {},
      resolve: (returnReason, args, {loaders}) => loaders.ofbizArray.load(`order/returnItems/find?returnReasonId=${returnReason.returnReasonId}`)
    }
  })
});

export {ReturnReasonType};
    