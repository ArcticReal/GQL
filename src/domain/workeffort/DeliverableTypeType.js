
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {QuoteItemType} from '../order/QuoteItemType.js';
import {DeliverableType} from '../workeffort/DeliverableType.js';


const DeliverableTypeType = new GraphQLObjectType({
  name: 'DeliverableTypeType',
  description: 'Type for DeliverableType in workeffort',

  fields: () => ({
    deliverableTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    deliverable: {
      type: new GraphQLList(DeliverableType),
      args : {deliverableTypeId: {type: GraphQLString}},
      resolve: (deliverableType, args, {loaders}) => loaders.ofbizArray.load(`deliverables/find?deliverableTypeId=${deliverableType.deliverableTypeId}`)
    },
    quoteItem: {
      type: new GraphQLList(QuoteItemType),
      args : {deliverableTypeId: {type: GraphQLString}},
      resolve: (deliverableType, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?deliverableTypeId=${deliverableType.deliverableTypeId}`)
    }
  })
});

export {DeliverableTypeType};
    