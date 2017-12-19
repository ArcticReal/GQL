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

const SubscriptionAttributeInputType = new GraphQLInputObjectType({
  name: 'SubscriptionAttributeInputType',
  description: 'input type for SubscriptionAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    subscriptionId: {type: GraphQLString}
  })
});

export {SubscriptionAttributeInputType};
    