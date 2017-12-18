
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

import {QuoteItemType} from '../order/QuoteItem.js';
import {DeliverableType} from '../workeffort/Deliverable.js';


const DeliverableTypeType = new GraphQLObjectType({
  name: 'DeliverableTypeType',
  description: 'Type for DeliverableType in workeffort',

  fields: () => ({
    deliverableTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    deliverables: {
      type: new GraphQLList(DeliverableType),
      args : {},
      resolve: (deliverableType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/deliverables/find?deliverableTypeId=${deliverableType.deliverableTypeId}`)
    },
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {},
      resolve: (deliverableType, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteItems/find?deliverableTypeId=${deliverableType.deliverableTypeId}`)
    }
  })
});

export {DeliverableTypeType};
    




const DeliverableTypeInputType = new GraphQLInputObjectType({
  name: 'DeliverableTypeInputType',
  description: 'input type for DeliverableType',

  fields: () => ({
    deliverableTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DeliverableTypeInputType};
    