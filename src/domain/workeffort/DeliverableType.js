
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
      args : {deliverableTypeId: {type: GraphQLString}},
      resolve: (deliverableType, args, {loaders}) => loaders.ofbizArray.load(`deliverables/find?deliverableTypeId=${deliverableType.deliverableTypeId}`)
    },
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {deliverableTypeId: {type: GraphQLString}},
      resolve: (deliverableType, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?deliverableTypeId=${deliverableType.deliverableTypeId}`)
    }
  })
});

export {DeliverableTypeType};
    




const DeliverableTypeInputType = new GraphQLInputObjectType({
  name: 'DeliverableTypeInputType',
  description: 'input type for DeliverableType in workeffort',

  fields: () => ({
    deliverableTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DeliverableTypeInputType};
    